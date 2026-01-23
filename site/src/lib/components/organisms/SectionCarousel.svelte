<script lang="ts">
  // MUDANÇA: Importando o Card com Carrossel
  import PropertyCardCarousel from '$lib/components/molecules/PropertyCardCarousel.svelte';
  import type { Imovel } from '$lib/types/Property';

  export let title: string;
  export let subtitle: string = "";
  export let items: Imovel[] = [];
  export let linkVerMais: string;

  // Filtros internos (Residencial/Comercial)
  let filtroAtivo: 'residencial' | 'comercial' = 'residencial';

  $: itemsFiltrados = items.filter(item => {
    const tipo = item.tipo.toLowerCase();
    // Lógica para agrupar Rural junto com Comercial
    const isComercial = ['comercial', 'terreno', 'galpão', 'rural', 'sala'].some(t => tipo.includes(t));

    if (filtroAtivo === 'residencial') {
      return !isComercial;
    } else {
      return isComercial;
    }
  });
</script>

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
          ? 'bg-white text-brand shadow-sm'
          : 'text-gray-500 hover:text-gray-900'}"
        on:click={() => filtroAtivo = 'residencial'}
      >
        Residencial
      </button>
      <button
        class="px-6 py-2 text-sm font-bold rounded-md transition-all duration-300
        {filtroAtivo === 'comercial'
          ? 'bg-white text-brand shadow-sm'
          : 'text-gray-500 hover:text-gray-900'}"
        on:click={() => filtroAtivo = 'comercial'}
      >
        Comercial
      </button>
    </div>
  </div>

  {#if itemsFiltrados.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each itemsFiltrados as item (item.id)}
        <div class="h-full"> <PropertyCardCarousel imovel={item} />
        </div>
      {/each}
    </div>

    <div class="flex justify-center mt-10">
      <a href={linkVerMais} class="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-brand hover:text-brand text-gray-600 font-bold rounded-full transition-all">
        Ver todos em {title}
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>

  {:else}
    <div class="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
      <p class="text-gray-500">Nenhum imóvel {filtroAtivo} encontrado nesta categoria no momento.</p>
    </div>
  {/if}

</div>
