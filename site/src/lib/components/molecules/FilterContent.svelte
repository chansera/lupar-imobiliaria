<script lang="ts">
  export let finalidade: string;
  export let tiposSelecionados: string[];
  export let quartosMin: number;
  export let banheirosMin: number;
  export let gruposTipos: any[];
  export let toggleTipo: (t: string) => void;
</script>

<div class="mb-5">
  <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Eu quero</p>
  <div class="flex bg-gray-100 p-1 rounded-lg">
    <button
      class="flex-1 py-1.5 text-xs font-bold rounded-md transition-all {finalidade === 'venda' ? 'bg-white text-brand shadow-sm' : 'text-gray-500 hover:text-gray-900'}"
      on:click={() => finalidade = 'venda'}
    >
      Comprar
    </button>
    <button
      class="flex-1 py-1.5 text-xs font-bold rounded-md transition-all {finalidade === 'aluguel' ? 'bg-white text-brand shadow-sm' : 'text-gray-500 hover:text-gray-900'}"
      on:click={() => finalidade = 'aluguel'}
    >
      Alugar
    </button>
  </div>
</div>

<div class="grid grid-cols-1 gap-4 mb-5">

  <div>
    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Quartos</p>
    <div class="flex gap-2">
      <button
        class="h-8 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center flex-1
        {quartosMin === 0 ? 'bg-brand text-white border-brand' : 'bg-white text-gray-500 border-gray-200 hover:border-brand'}"
        on:click={() => quartosMin = 0}
      >
        Todos
      </button>
      {#each [1, 2, 3, 4] as num}
        <button
          class="w-8 h-8 rounded-lg text-xs font-bold border transition-all flex items-center justify-center
          {quartosMin === num
            ? 'bg-brand text-white border-brand shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand'}"
          on:click={() => quartosMin = num}
        >
          {num}+
        </button>
      {/each}
    </div>
  </div>

  <div>
    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Banheiros</p>
    <div class="flex gap-2">
      <button
        class="h-8 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center flex-1
        {banheirosMin === 0 ? 'bg-brand text-white border-brand' : 'bg-white text-gray-500 border-gray-200 hover:border-brand'}"
        on:click={() => banheirosMin = 0}
      >
        Todos
      </button>
      {#each [1, 2, 3, 4] as num}
        <button
          class="w-8 h-8 rounded-lg text-xs font-bold border transition-all flex items-center justify-center
          {banheirosMin === num
            ? 'bg-brand text-white border-brand shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand'}"
          on:click={() => banheirosMin = num}
        >
          {num}+
        </button>
      {/each}
    </div>
  </div>

</div>

<div class="border-t border-gray-100 mb-5"></div>

<div class="mb-2">
  <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Tipo de Imóvel</p>

  <div class="space-y-3">
    {#each gruposTipos as grupo}
      <div>
        <span class="text-[9px] font-bold text-brand/70 uppercase mb-1.5 block">{grupo.titulo}</span>
        <div class="flex flex-wrap gap-1.5">
          {#each grupo.tipos as t}
            <button
              on:click={() => toggleTipo(t)}
              class="px-3 py-1.5 rounded-md text-xs font-medium border transition-all
              {tiposSelecionados.includes(t.toLowerCase())
                ? 'bg-brand text-white border-brand shadow-sm'
                : 'bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand'}"
            >
              {t}
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
