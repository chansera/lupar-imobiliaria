<script lang="ts">
  import PropertyCard from '$lib/components/molecules/PropertyCard.svelte';
  import type { Imovel } from '$lib/types/Property';

  // Recebe a lista de imóveis
  export let items: Imovel[] = [];
</script>

<div class="container mx-auto py-12 px-4">
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">Imóveis em Destaque</h2>
    <p class="text-gray-500 max-w-2xl mx-auto">
      Confira nossa seleção exclusiva de oportunidades para você viver bem.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each items as item (item.id)}
      <PropertyCard imovel={item} />
    {/each}
  </div>

  <div class="text-center mt-12">
    <a
      href="/imoveis"
      class="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
    >
      Ver todos os imóveis
    </a>
  </div>
</div>
