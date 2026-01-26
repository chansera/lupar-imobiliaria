<script lang="ts">
  import type { Imovel } from '$lib/types/Property';
  import { onMount, tick } from 'svelte';

  export let imovel: Imovel;

  // Lógica de fotos com fallback
  $: fotosOriginais = imovel.galeria?.length ? imovel.galeria : [imovel.imagem];
  $: totalOriginal = fotosOriginais.length;

  // Apenas clone o primeiro slide no final para efeito infinito
  $: fotos = totalOriginal > 1
    ? [...fotosOriginais, fotosOriginais[0]]
    : fotosOriginais;

  let currentSlide = 0;
  let scrollContainer: HTMLElement;
  let isAnimating = false;
  let isManualScroll = false;
  let autoplayInterval: NodeJS.Timeout;

  const MAX_DOTS = 5;
  const TRANSITION_DURATION = 300;

  // Índice visual para os dots (não inclui o clone)
  $: displayIndex = currentSlide % totalOriginal;

  $: startIndex = totalOriginal <= MAX_DOTS
    ? 0
    : Math.max(0, Math.min(displayIndex - 2, totalOriginal - MAX_DOTS));

  $: visibleDots = Array.from(
    { length: Math.min(MAX_DOTS, totalOriginal) },
    (_, i) => startIndex + i
  );

  // Função otimizada para scroll suave
  async function handleScroll() {
    if (!scrollContainer || isAnimating) return;

    const scrollLeft = scrollContainer.scrollLeft;
    const width = scrollContainer.clientWidth;
    const newSlide = Math.round(scrollLeft / width);

    // Se chegou no clone (último slide)
    if (newSlide === totalOriginal && !isManualScroll) {
      isAnimating = true;

      // Transição instantânea para o primeiro slide
      scrollContainer.style.scrollBehavior = 'auto';
      scrollContainer.scrollLeft = 0;

      await tick();

      scrollContainer.style.scrollBehavior = 'smooth';
      currentSlide = 0;
      isAnimating = false;
    } else {
      currentSlide = newSlide;
    }

    isManualScroll = false;
  }

  function scrollTo(direction: 'left' | 'right') {
    if (!scrollContainer || isAnimating) return;

    isAnimating = true;
    isManualScroll = true;

    const width = scrollContainer.clientWidth;
    let targetSlide = direction === 'right' ? currentSlide + 1 : currentSlide - 1;

    // Se for para a direita do último original, vai para o clone
    if (targetSlide > totalOriginal) {
      targetSlide = totalOriginal; // clone
    }
    // Se for para a esquerda do primeiro, vai para o último original
    else if (targetSlide < 0) {
      targetSlide = totalOriginal - 1;
    }

    scrollContainer.scrollTo({
      left: width * targetSlide,
      behavior: 'smooth'
    });

    currentSlide = targetSlide;

    // Se chegou no clone, volta ao início silenciosamente
    if (targetSlide === totalOriginal) {
      setTimeout(async () => {
        if (scrollContainer) {
          // Transição instantânea
          scrollContainer.style.scrollBehavior = 'auto';
          scrollContainer.scrollLeft = 0;

          await tick();

          scrollContainer.style.scrollBehavior = 'smooth';
          currentSlide = 0;
          isAnimating = false;
        }
      }, TRANSITION_DURATION + 50);
    } else {
      setTimeout(() => {
        isAnimating = false;
      }, TRANSITION_DURATION);
    }
  }

  function goToSlide(index: number) {
    if (!scrollContainer || isAnimating || totalOriginal <= 1) return;

    isAnimating = true;
    isManualScroll = true;
    const width = scrollContainer.clientWidth;

    scrollContainer.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });

    currentSlide = index;

    setTimeout(() => {
      isAnimating = false;
    }, TRANSITION_DURATION);
  }

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        scrollTo('right');
      } else {
        scrollTo('left');
      }
    }
  }

  // Inicialização
  onMount(() => {
    if (scrollContainer) {
      // Garante que comece no primeiro slide
      scrollContainer.scrollLeft = 0;
      currentSlide = 0;

      // Auto-play opcional (descomente se quiser)
      // autoplayInterval = setInterval(() => {
      //   if (!isAnimating) scrollTo('right');
      // }, 4000);
    }

    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  });

  // Helper para extrair SRC da imagem
  const getSrc = (f: any) => typeof f === 'string' ? f : f?.img?.src || f?.src || f;
</script>

<div class="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl relative font-sans">

  <div class="relative aspect-[4/3] overflow-hidden bg-gray-200 shrink-0">
    <div
      bind:this={scrollContainer}
      on:scroll={handleScroll}
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
      class="scrollbar-hide flex h-full w-full overflow-x-auto snap-x snap-mandatory select-none"
      style="scroll-behavior: smooth;"
    >
      {#each fotos as foto, i}
        <div class="relative h-full min-w-full snap-center">
          <img
            src={getSrc(foto)}
            alt="Foto {i + 1} do imóvel"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable="false"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
        </div>
      {/each}
    </div>

    {#if totalOriginal > 1}
      <button
        class="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-gray-900 shadow-sm md:group-hover:flex hover:bg-white active:scale-95 transition-all duration-200"
        on:click|preventDefault|stopPropagation={() => scrollTo('left')}
        aria-label="Foto anterior"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button
        class="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-gray-900 shadow-sm md:group-hover:flex hover:bg-white active:scale-95 transition-all duration-200"
        on:click|preventDefault|stopPropagation={() => scrollTo('right')}
        aria-label="Próxima foto"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    {/if}

    {#if totalOriginal > 1}
      <div class="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 pointer-events-none">
        {#each visibleDots as index (index)}
          <button
            class="pointer-events-auto rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 {index === displayIndex ? 'h-2 w-2 bg-white scale-110' : 'h-1.5 w-1.5 bg-white/50 hover:bg-white/80'}"
            on:click|preventDefault|stopPropagation={() => goToSlide(index)}
            aria-label={`Ir para foto ${index + 1}`}
            aria-current={index === displayIndex ? 'true' : 'false'}
          ></button>
        {/each}
      </div>
    {/if}
  </div>

  <a href="/imoveis/referencia/{imovel.id}" class="flex flex-grow flex-col p-5">
    <div class="mb-4">
      <div class="flex items-start justify-between gap-2 mb-1">
        <h3 class="line-clamp-1 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {imovel.titulo}
        </h3>
        <span class="whitespace-nowrap rounded bg-gray-50 px-2 py-1 text-sm font-bold text-gray-900">
          {imovel.preco}
        </span>
      </div>
      <p class="text-sm text-gray-500">{imovel.bairros}, {imovel.cidade}</p>
    </div>

    <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500 font-medium">
      <div class="flex items-center gap-1"><span>{imovel.quartos || 0}</span> Qts</div>
      <div class="flex items-center gap-1"><span>{imovel.banheiros || 0}</span> Banhos</div>
      <div class="flex items-center gap-1"><span>{imovel.areaConstruida || imovel.areaTotal}m²</span></div>
    </div>
  </a>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
