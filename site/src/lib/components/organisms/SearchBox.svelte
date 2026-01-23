<script lang="ts">
  import { goto } from '$app/navigation';
  import { imoveis } from '$lib/data/imoveis';
  import { slide } from 'svelte/transition';

  // --- ESTADOS ---
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

  // --- MUDANÇA AQUI ---
  function getButtonText() {
    if (tiposSelecionados.length === 0) return 'Todos os tipos';
    // Junta os itens com "..." (ex: Casa...Apartamento)
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
      <label class="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Tipo de Imóvel
      </label>

      <button
        type="button"
        on:click={() => isDropdownOpen = !isDropdownOpen}
        class="w-full h-12 px-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between hover:border-brand focus:ring-2 focus:ring-brand outline-none transition-colors"
      >
        <span class="truncate text-gray-700 block max-w-[90%]">
          {getButtonText()}
        </span>
        <svg class="w-4 h-4 text-gray-500 transition-transform {isDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {#if isDropdownOpen}
        <div
          class="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto"
          transition:slide={{ duration: 200 }}
        >
          {#each gruposTipos as grupo}
            <div class="px-4 py-2 bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-y border-gray-100 sticky top-0 z-10">
              {grupo.titulo}
            </div>

            <div class="p-2">
              {#each grupo.tipos as t}
                <label class="flex items-center gap-3 p-2 hover:bg-brand/5 rounded-lg cursor-pointer group transition-colors">
                  <input
                    type="checkbox"
                    checked={tiposSelecionados.includes(t)}
                    on:change={() => toggleTipo(t)}
                    class="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand accent-brand"
                  />
                  <span class="text-sm text-gray-700 font-medium group-hover:text-brand transition-colors">{t}</span>
                </label>
              {/each}
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <div class="md:col-span-5 space-y-1">
      <label for="local" class="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        Localização
      </label>
      <input
        id="local"
        list="locais-sugestoes"
        type="text"
        placeholder="Cidade, Bairro ou Cód..."
        bind:value={localizacao}
        class="w-full h-12 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none placeholder-gray-400 transition-shadow"
      />
      <datalist id="locais-sugestoes">
        {#each sugestoes as s} <option value={s} /> {/each}
      </datalist>
    </div>

    <div class="md:col-span-3">
      <button type="submit" class="w-full h-12 bg-brand hover:bg-brand-dark text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        BUSCAR
      </button>
    </div>

  </form>
</div>
