<script lang="ts">
  import type { Imovel } from '$lib/types/Property';
  export let imovel: Imovel;

  // Lógica simples para saber se mostramos detalhes de casa ou de terreno
  const isResidencial = ['Casa', 'Apartamento'].includes(imovel.tipo);
</script>

<a href="/imoveis/referencia/{imovel.id}" class="group block border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">

  <div class="relative h-64 overflow-hidden bg-gray-200">

    {#if typeof imovel.imagem === 'string'}
      <img
        src={imovel.imagem}
        alt={imovel.titulo}
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    {:else}
      <enhanced:img
        src={imovel.imagem}
        alt={imovel.titulo}
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    {/if}

    <div class="absolute top-3 left-3 bg-gray-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
      {imovel.tipo}
    </div>
  </div>

  <div class="p-5 flex flex-col flex-grow">

    <div class="mb-4">
      <h3 class="font-bold text-gray-900 line-clamp-1 group-hover:text-red-600 transition-colors">
        {imovel.titulo}
      </h3>

      <p class="text-gray-500 text-sm flex flex-wrap items-center gap-1 mt-1">
        <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>

        <span>{imovel.bairros}, {imovel.cidade}</span>

        {#if imovel.regiao}
          <span class="ml-1 text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 font-bold uppercase">
            {imovel.regiao}
          </span>
        {/if}
      </p>

      <p class="text-xl font-bold text-gray-900 mt-2">{imovel.preco}</p>
    </div>

    <div class="border-t border-gray-100 my-auto"></div>

    <div class="pt-4 grid grid-cols-3 gap-2 text-sm text-gray-600">

      {#if isResidencial}
        <div class="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
          <span class="font-bold text-gray-900 text-lg">{imovel.quartos || 0}</span>
          <span class="text-[10px] uppercase text-gray-400">Quartos</span>
        </div>
        <div class="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
          <span class="font-bold text-gray-900 text-lg">{imovel.banheiros || 0}</span>
          <span class="text-[10px] uppercase text-gray-400">Banheiros</span>
        </div>
        <div class="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
          <span class="font-bold text-gray-900 text-lg">{imovel.vagas || 0}</span>
          <span class="text-[10px] uppercase text-gray-400">Vagas</span>
        </div>
        <div class="col-span-3 mt-2 text-xs text-center text-gray-400">
          Área Const.: <strong class="text-gray-600">{imovel.areaConstruida || 0}m²</strong> • Total: <strong class="text-gray-600">{imovel.areaTotal}m²</strong>
        </div>

      {:else}
        <div class="col-span-3 flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div class="flex flex-col">
            <span class="text-[10px] uppercase text-gray-400">Área Total</span>
            <span class="font-bold text-gray-900">{imovel.areaTotal}m²</span>
          </div>
          {#if imovel.dimensao}
            <div class="flex flex-col text-right">
              <span class="text-[10px] uppercase text-gray-400">Dimensão</span>
              <span class="font-bold text-gray-900">{imovel.dimensao}</span>
            </div>
          {/if}
        </div>
      {/if}

    </div>

  </div>
</a>
