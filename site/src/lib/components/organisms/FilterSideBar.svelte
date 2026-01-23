<script lang="ts">
  // --- PROPS (O que o pai manda e recebe de volta) ---
  export let finalidade: string = 'venda';
  export let tiposSelecionados: string[] = [];
  export let quartosMin: number = 0;
  export let banheirosMin: number = 0;

  // Dados estáticos (Categorias)
  const gruposTipos = [
    {
      titulo: 'Residencial',
      tipos: ['Casa', 'Apartamento', 'Sobrado', 'Kitnet', 'Terreno em Condomínio']
    },
    {
      titulo: 'Comercial & Rural',
      tipos: ['Salão Comercial', 'Galpão', 'Sala', 'Prédio Inteiro', 'Terreno Comercial', 'Rural']
    }
  ];

  function toggleTipo(t: string) {
    const tipo = t.toLowerCase();
    if (tiposSelecionados.includes(tipo)) {
      tiposSelecionados = tiposSelecionados.filter(item => item !== tipo);
    } else {
      tiposSelecionados = [...tiposSelecionados, tipo];
    }
  }

  function limparFiltros() {
    tiposSelecionados = [];
    quartosMin = 0;
    banheirosMin = 0;
  }
</script>

<div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-24">

  <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
    <h2 class="font-bold text-gray-900 flex items-center gap-2">
      <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
      Filtros
    </h2>
    {#if tiposSelecionados.length > 0 || quartosMin > 0 || banheirosMin > 0}
      <button
        on:click={limparFiltros}
        class="text-xs text-red-500 hover:text-red-700 font-bold uppercase tracking-wider transition-colors"
      >
        Limpar
      </button>
    {/if}
  </div>

  <div class="bg-gray-100 p-1 rounded-lg flex mb-6">
    <button
      class="flex-1 py-2 text-sm font-bold rounded-md transition-all
      {finalidade === 'venda' ? 'bg-white text-brand shadow-sm' : 'text-gray-500 hover:text-gray-900'}"
      on:click={() => finalidade = 'venda'}
    >
      Comprar
    </button>
    <button
      class="flex-1 py-2 text-sm font-bold rounded-md transition-all
      {finalidade === 'aluguel' ? 'bg-white text-brand shadow-sm' : 'text-gray-500 hover:text-gray-900'}"
      on:click={() => finalidade = 'aluguel'}
    >
      Alugar
    </button>
  </div>

  <div class="mb-6">
    <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tipo de Imóvel</h3>

    <div class="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      {#each gruposTipos as grupo}
        <div>
          <p class="text-[10px] font-bold text-brand uppercase mb-2 bg-brand/5 p-1 rounded inline-block">
            {grupo.titulo}
          </p>
          <div class="space-y-2 pl-1">
            {#each grupo.tipos as t}
              <label class="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={tiposSelecionados.includes(t.toLowerCase())}
                  on:change={() => toggleTipo(t)}
                  class="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand accent-brand transition-all"
                />
                <span class="text-sm text-gray-600 group-hover:text-brand transition-colors select-none">{t}</span>
              </label>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="border-t border-gray-100 my-6"></div>

  <div class="mb-6">
    <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Quartos</h3>
    <div class="grid grid-cols-4 gap-2">
      {#each [1, 2, 3, 4] as num}
        <button
          class="h-10 rounded-lg text-sm font-bold transition-all border flex items-center justify-center
          {quartosMin === num
            ? 'bg-brand text-white border-brand shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand'}"
          on:click={() => quartosMin = (quartosMin === num ? 0 : num)}
        >
          {num}+
        </button>
      {/each}
    </div>
  </div>

  <div class="mb-6">
    <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Banheiros</h3>
    <div class="grid grid-cols-4 gap-2">
      {#each [1, 2, 3, 4] as num}
        <button
          class="h-10 rounded-lg text-sm font-bold transition-all border flex items-center justify-center
          {banheirosMin === num
            ? 'bg-brand text-white border-brand shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand'}"
          on:click={() => banheirosMin = (banheirosMin === num ? 0 : num)}
        >
          {num}+
        </button>
      {/each}
    </div>
  </div>

</div>

<style>
  .custom-scrollbar::-webkit-scrollbar { width: 4px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
</style>
