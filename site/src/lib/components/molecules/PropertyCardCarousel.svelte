<script lang="ts">
  import type { Imovel } from '$lib/types/Property';
  import { onMount } from 'svelte';

  export let imovel: Imovel;

  // Lógica de fotos com fallback
  $: fotosOriginais = imovel.galeria?.length ? imovel.galeria : [imovel.imagem];

  // Para o loop infinito fluido, clonamos a primeira foto no final
  $: fotos = [...fotosOriginais, fotosOriginais[0]];

  let currentSlide = 0;
  let scrollContainer: HTMLElement;

  const MAX_DOTS = 5;
  $: totalOriginal = fotosOriginais.length;

  // Cálculo das bolinhas (baseado no array original)
  $: displayIndex = currentSlide % totalOriginal;
  $: startIndex = totalOriginal <= MAX_DOTS
      ? 0
      : Math.max(0, Math.min(displayIndex - 2, totalOriginal - MAX_DOTS));
  $: visibleDots = Array.from({ length: Math.min(MAX_DOTS, totalOriginal) }, (_, i) => startIndex + i);

  function handleScroll() {
    if (!scrollContainer) return;
    const scrollLeft = scrollContainer.scrollLeft;
    const width = scrollContainer.clientWidth;

    currentSlide = Math.round(scrollLeft / width);

    // MÁGICA DO LOOP INFINITO (Mobile e Desktop)
    // Se chegou no clone (último item), pula silenciosamente para o primeiro
    if (scrollLeft >= (fotos.length - 1) * width) {
        scrollContainer.scrollTo({ left: 1, behavior: 'auto' });
    }
    // Se chegou antes do primeiro, pula para o penúltimo (o original)
    if (scrollLeft <= 0) {
        scrollContainer.scrollTo({ left: (fotos.length - 2) * width, behavior: 'auto' });
    }
  }

  function scrollTo(direction: 'left' | 'right') {
    if (!scrollContainer) return;
    const width = scrollContainer.clientWidth;
    const move = direction === 'right' ? width : -width;

    scrollContainer.scrollBy({ left: move, behavior: 'smooth' });
  }

  // Helper para extrair SRC da imagem
  const getSrc = (f: any) => typeof f === 'string' ? f : f?.img?.src || f?.src || f;
</script>

<div class="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl relative font-sans">

  <div class="relative aspect-[4/3] overflow-hidden bg-gray-200 shrink-0">
    <div
      bind:this={scrollContainer}
      on:scroll={handleScroll}
      class="scrollbar-hide flex h-full w-full overflow-x-auto snap-x snap-mandatory select-none"
    >
      {#each fotos as foto, i}
        <div class="relative h-full min-w-full snap-center">
          <img
            src={getSrc(foto)}
            alt="Foto do imóvel"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
        </div>
      {/each}
    </div>

    {#if totalOriginal > 1}
      <button
        class="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 md:group-hover:flex hover:bg-white"
        on:click|preventDefault|stopPropagation={() => scrollTo('left')}
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2.5"/></svg>
      </button>

      <button
        class="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-900 md:group-hover:flex hover:bg-white"
        on:click|preventDefault|stopPropagation={() => scrollTo('right')}
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="2.5"/></svg>
      </button>
    {/if}

    {#if totalOriginal > 1}
      <div class="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 pointer-events-none">
        {#each visibleDots as index (index)}
          <div class="rounded-full transition-all duration-300 {index === displayIndex ? 'h-2 w-2 bg-white scale-110' : 'h-1.5 w-1.5 bg-white/50'}"></div>
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
