<script lang="ts">
  import { page } from '$app/stores';
  import { imoveis } from '$lib/data/imoveis';
  import { slide } from 'svelte/transition';

  import PropertyCardCarousel from '$lib/components/molecules/PropertyCardCarousel.svelte';
  import FilterSidebar from '$lib/components/organisms/FilterSidebar.svelte';

  let finalidade = $page.url.searchParams.get('finalidade') || 'venda';
  let tiposURL = $page.url.searchParams.get('tipos');
  let tiposSelecionados: string[] = tiposURL ? tiposURL.toLowerCase().split(',') : [];
  let quartosMin = 0;
  let banheirosMin = 0;

  $: imoveisFiltrados = imoveis.filter(imovel => {
    if (imovel.finalidade !== finalidade) return false;
    if (tiposSelecionados.length > 0) {
      const match = tiposSelecionados.some(t => imovel.tipo.toLowerCase().includes(t));
      if (!match) return false;
    }
    if (quartosMin > 0 && (!imovel.quartos || imovel.quartos < quartosMin)) return false;
    if (banheirosMin > 0 && (!imovel.banheiros || imovel.banheiros < banheirosMin)) return false;
    return true;
  });

  function resetAll() {
    tiposSelecionados = [];
    quartosMin = 0;
    banheirosMin = 0;
  }
</script>

<svelte:head>
  <title>Lupar | Imóveis</title>
</svelte:head>

<div class="bg-gray-50 min-h-screen py-8 font-sans">
  <div class="container mx-auto px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Imóveis para {finalidade === 'venda' ? 'Comprar' : 'Alugar'}</h1>
      <p class="text-gray-500 mt-2">
        {imoveisFiltrados.length} {imoveisFiltrados.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside class="lg:col-span-1">
        <FilterSidebar
          bind:finalidade
          bind:tiposSelecionados
          bind:quartosMin
          bind:banheirosMin
          totalResultados={imoveisFiltrados.length}
        />
      </aside>

      <main class="lg:col-span-3">
        {#if imoveisFiltrados.length > 0}
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {#each imoveisFiltrados as imovel (imovel.id)}
              <div transition:slide|local class="h-full">
                <PropertyCardCarousel {imovel} />
              </div>
            {/each}
          </div>
        {:else}
          <div class="bg-white rounded-xl p-12 text-center border border-dashed border-gray-200 flex flex-col items-center justify-center h-96">
            <h3 class="text-xl font-bold text-gray-900">Nenhum imóvel encontrado.</h3>
            <button class="mt-4 text-brand font-bold hover:underline" on:click={resetAll}>
              Limpar Filtros
            </button>
          </div>
        {/if}
      </main>
    </div>
  </div>
</div>
