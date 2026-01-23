<script lang="ts">
  import { goto } from '$app/navigation';
  import { imoveis } from '$lib/data/imoveis';
  import { slide } from 'svelte/transition';

  let finalidade: 'venda' | 'aluguel' = 'venda';
  let localizacao = '';
  let isDropdownOpen = false;
  let tiposSelecionados: string[] = [];

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
    if (tiposSelecionados.includes(t)) {
      tiposSelecionados = tiposSelecionados.filter(item => item !== t);
    } else {
      tiposSelecionados = [...tiposSelecionados, t];
    }
  }

  function getButtonText() {
    if (tiposSelecionados.length === 0) return 'Todos os tipos';
    return tiposSelecionados.join('...');
  }

  const sugestoes = [...new Set([
    ...imoveis.map(i => i.cidade),
    ...imoveis.map(i => i.bairros)
  ])].sort();

  function handleSearch() {
    const params = new URLSearchParams();
    params.set('finalidade', finalidade);
    if (tiposSelecionados.length > 0) params.set('tipos', tiposSelecionados.join(',').toLowerCase());
    if (localizacao) params.set('q', localizacao);
    goto(`/imoveis?${params.toString()}`);
  }
</script>

<svelte:window on:click={(e) => {
  if (isDropdownOpen && !(e.target as Element).closest('.dropdown-container')) {
    isDropdownOpen = false;
  }
}} />

<div class="bg-white rounded-xl shadow-2xl max-w-5xl mx-auto -mt-10 relative z-20 font-sans dropdown-container">
  <div class="flex border-b border-gray-100">
    <button
      type="button"
      class="flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider transition-all duration-200 border-r border-gray-100 rounded-tl-xl
      {finalidade === 'venda' ? 'bg-brand text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}"
      on:click={() => finalidade = 'venda'}
    >
      Comprar
    </button>
    <button
      type="button"
      class="flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider transition-all duration-200 rounded-tr-xl
      {finalidade === 'aluguel' ? 'bg-brand text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}"
      on:click={() => finalidade = 'aluguel'}
    >
      Alugar
    </button>
  </div>

  <form on:submit|preventDefault={handleSearch} class="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
    <div class="md:col-span-4 space-y-1 relative">
      <label for="tipo-select" class="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
        Tipo de Imóvel
      </label>

      <button
        id="tipo-select"
        type="button"
        on:click={() => isDropdownOpen = !isDropdownOpen}
        class="w-full h-12 px-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between hover:border-brand outline-none"
      >
        <span class="truncate text-gray-700 block max-w-[90%]">{getButtonText()}</span>
        <svg class="w-4 h-4 text-gray-500 {isDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>

      {#if isDropdownOpen}
        <div class="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto" transition:slide>
          {#each gruposTipos as grupo}
            <div class="px-4 py-2 bg-gray-50 text-[10px] font-bold text-gray-500 uppercase sticky top-0">{grupo.titulo}</div>
            <div class="p-2">
              {#each grupo.tipos as t}
                <label class="flex items-center gap-3 p-2 hover:bg-brand/10 rounded-lg cursor-pointer">
                  <input type="checkbox" checked={tiposSelecionados.includes(t)} on:change={() => toggleTipo(t)} class="accent-brand" />
                  <span class="text-sm text-gray-700">{t}</span>
                </label>
              {/each}
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <div class="md:col-span-5 space-y-1">
      <label for="local" class="text-xs font-bold text-gray-500 uppercase">Localização</label>
      <input id="local" list="locais-sugestoes" type="text" placeholder="Cidade ou Bairro..." bind:value={localizacao} class="w-full h-12 px-3 border border-gray-300 rounded-lg outline-none focus:border-brand" />
      <datalist id="locais-sugestoes">
        {#each sugestoes as s}<option value={s}>{s}</option>{/each}
      </datalist>
    </div>

    <div class="md:col-span-3">
      <button type="submit" class="w-full h-12 bg-brand hover:bg-brand-dark text-white font-bold rounded-lg shadow-lg transition-all uppercase">Buscar</button>
    </div>
  </form>
</div>
