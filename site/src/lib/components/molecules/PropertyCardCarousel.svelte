<script lang="ts">
  import type { Imovel } from '$lib/types/Property';
  import { fade } from 'svelte/transition';

  export let imovel: Imovel;

  // Se o imóvel não tiver galeria, usa a imagem de capa como item único
  // Isso evita que o site quebre se faltarem fotos
  $: fotos = imovel.galeria && imovel.galeria.length > 0
    ? imovel.galeria
    : [imovel.imagem];

  let currentSlide = 0;
  let scrollContainer: HTMLElement;

  // Navegação manual (Setas)
  function scroll(direction: 'left' | 'right') {
    if (!scrollContainer) return;

    const scrollAmount = scrollContainer.clientWidth;
    const newPos = direction === 'left'
      ? scrollContainer.scrollLeft - scrollAmount
      : scrollContainer.scrollLeft + scrollAmount;

    scrollContainer.scrollTo({
      left: newPos,
      behavior: 'smooth'
    });
  }

  // Atualiza as bolinhas (indicadores) baseado no scroll real
  function handleScroll() {
    if (!scrollContainer) return;
    const index = Math.round(scrollContainer.scrollLeft / scrollContainer.clientWidth);
    currentSlide = index;
  }
</script>

<div class="group block border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col relative">

  <div class="relative aspect-[4/3] bg-gray-200 overflow-hidden">

    <div
      bind:this={scrollContainer}
      on:scroll={handleScroll}
      class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full"
      style="scroll-behavior: smooth;"
    >
      {#each fotos as foto, i}
        <div class="min-w-full h-full snap-center relative">
          <img
            src={typeof foto === 'string' ? foto : foto?.img?.src || foto}
            alt="{imovel.titulo} - Foto {i+1}"
            loading={i === 0 ? "eager" : "lazy"}
            class="w-full h-full object-cover"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
        </div>
      {/each}
    </div>

    <div class="absolute top-3 left-3 bg-gray-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider backdrop-blur-sm shadow-sm z-10">
      {imovel.tipo}
    </div>

    {#if currentSlide > 0}
      <button
        on:click|preventDefault|stopPropagation={() => scroll('left')}
        class="hidden md:group-hover:flex absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-900 rounded-full items-center justify-center shadow-lg transition-all z-20"
        aria-label="Foto anterior"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
    {/if}

    {#if currentSlide < fotos.length - 1}
      <button
        on:click|preventDefault|stopPropagation={() => scroll('right')}
        class="hidden md:group-hover:flex absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-900 rounded-full items-center justify-center shadow-lg transition-all z-20"
        aria-label="Próxima foto"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    {/if}

    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
      {#each fotos.slice(0, 5) as _, i}
        <div
          class="rounded-full transition-all duration-300 shadow-sm
          {i === currentSlide ? 'w-2 h-2 bg-white scale-110' : 'w-1.5 h-1.5 bg-white/50'}"
        ></div>
      {/each}
      {#if fotos.length > 5}
        <div class="w-1 h-1 bg-white/50 rounded-full self-center"></div>
      {/if}
    </div>

  </div>

  <a href="/imoveis/referencia/{imovel.id}" class="p-5 flex flex-col flex-grow">

    <div class="mb-4">
      <div class="flex justify-between items-start mb-1">
        <h3 class="font-bold text-gray-900 line-clamp-1 group-hover:text-brand transition-colors text-lg">
          {imovel.titulo}
        </h3>
        <span class="font-bold text-gray-900 whitespace-nowrap bg-gray-50 px-2 py-1 rounded text-sm">
          {imovel.preco}
        </span>
      </div>

      <p class="text-gray-500 text-sm flex items-center gap-1">
        <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        {imovel.bairros}, {imovel.cidade}
      </p>
    </div>

    <div class="border-t border-gray-100 my-auto"></div>

    <div class="pt-4 flex justify-between text-sm text-gray-500">
      {#if imovel.quartos}
        <div class="flex items-center gap-1.5" title="Quartos">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          <span class="font-medium">{imovel.quartos}</span>
        </div>
      {/if}
      {#if imovel.banheiros}
        <div class="flex items-center gap-1.5" title="Banheiros">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> <span class="font-medium">{imovel.banheiros}</span>
        </div>
      {/if}
      {#if imovel.vagas}
        <div class="flex items-center gap-1.5" title="Vagas">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg> <span class="font-medium">{imovel.vagas}</span>
        </div>
      {/if}
      <div class="flex items-center gap-1.5" title="Área">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
        <span class="font-medium">{imovel.areaConstruida || imovel.areaTotal}m²</span>
      </div>
    </div>

  </a>
</div>

<style>
  /* Esconde a barra de rolagem mas mantém a funcionalidade */
  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }
  .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
</style>
