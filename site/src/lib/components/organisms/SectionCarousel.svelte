<script lang="ts">
  import PropertyCardCarousel from '$lib/components/molecules/PropertyCard.svelte';
  import type { Imovel } from '$lib/types/Property';

  export let title: string;
  export let subtitle: string = "";
  export let items: Imovel[] = []; // Recebe a lista completa (ex: tudo de Venda)
  export let linkVerMais: string;

  // Estado do filtro local
  let filtroAtivo: 'residencial' | 'comercial' = 'residencial';

  // Lógica de classificação
  // Residencial: Casa, Apartamento, Sobrado...
  // Comercial: Comercial, Terreno, Galpão, Rural...
  $: itemsFiltrados = items.filter(item => {
    const tipo = item.tipo.toLowerCase();
    if (filtroAtivo === 'residencial') {
      return ['casa', 'apartamento', 'kitnet', 'sobrado'].includes(tipo);
    } else {
      return !['casa', 'apartamento', 'kitnet', 'sobrado'].includes(tipo);
    }
  });
</script>

<section class="py-12 border-b border-gray-100">
  <div class="container mx-auto px-4">

    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        {#if subtitle}
          <p class="text-gray-500 mt-1">{subtitle}</p>
        {/if}
      </div>

      <div class="flex bg-gray-100 p-1 rounded-lg self-start md:self-auto">
        <button
          class="px-6 py-2 text-sm font-bold rounded-md transition-all duration-300
          {filtroAtivo === 'residencial'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-900'}"
          on:click={() => filtroAtivo = 'residencial'}
        >
          Residencial
        </button>
        <button
          class="px-6 py-2 text-sm font-bold rounded-md transition-all duration-300
          {filtroAtivo === 'comercial'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-900'}"
          on:click={() => filtroAtivo = 'comercial'}
        >
          Comercial
        </button>
      </div>
    </div>

    {#if itemsFiltrados.length > 0}
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:grid md:grid-cols-3 md:pb-0 scrollbar-hide">
        {#each itemsFiltrados as item (item.id)}
          <div class="min-w-[85%] md:min-w-0 snap-center">
            <PropertyCardCarousel imovel={item} />
          </div>
        {/each}
      </div>

      <div class="hidden md:flex justify-center mt-8">
        <a href={linkVerMais} class="text-sm font-bold text-red-600 hover:underline flex items-center gap-1">
          Ver todos em {title}
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>

    {:else}
      <div class="text-center py-12 bg-gray-50 rounded-xl">
        <p class="text-gray-500">Nenhum imóvel {filtroAtivo} encontrado nesta categoria no momento.</p>
      </div>
    {/if}

    <div class="mt-4 md:hidden text-center">
      <a href={linkVerMais} class="inline-block py-3 px-6 border border-gray-200 text-gray-900 font-bold rounded-lg w-full">
        Ver todos
      </a>
    </div>

  </div>
</section>

<style>
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
