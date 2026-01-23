<!-- src/lib/components/features/PropertyCard.svelte -->
<script lang="ts">
  import type { Property } from '$lib/types/Property';
  export let property: Property;
</script>

<article class="flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
  {#if property.images[0]}
    <img
      src={property.images[0]}
      alt={property.title}
      loading="lazy"
      class="w-full h-48 object-cover bg-gray-100"
    />
  {/if}

  <div class="p-4 flex flex-col flex-1">
    <div class="flex justify-between items-start gap-2 mb-2">
      <h3 class="text-lg font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
      {#if !property.available}
        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Alugado</span>
      {/if}
    </div>

    <p class="text-gray-600 text-sm mb-1">{property.location}</p>
    <p class="text-gray-500 text-sm mb-3">
      {property.bedrooms} quarto{property.bedrooms !== 1 ? 's' : ''} • {property.area}m²
    </p>

    <p class="mt-auto text-lg font-bold text-blue-600">
      R$ {property.price.toLocaleString('pt-BR')}/mês
    </p>
  </div>
</article>
