<script lang="ts">
	import { goto } from '$app/navigation';
	import { imoveis } from '$lib/data/imoveis';
	import { slide } from 'svelte/transition';

	// 1. Svelte 5: Estado com $state()
	let finalidade = $state<'Venda' | 'Aluguel'>('Venda');
	let localizacao = $state('');
	let codigo = $state(''); // Novo campo

	let isDropdownOpen = $state(false);
	let isSugestoesOpen = $state(false); // Novo controle para o autocomplete
	let tiposSelecionados = $state<string[]>([]);

	const gruposTipos = [
		{
			titulo: 'Residencial',
			tipos: ['Casa', 'Apartamento', 'Sobrado', 'Kitnet', 'Terreno em Condomínio']
		},
		{
			titulo: 'Comercial & Rural',
			tipos: ['Salão Comercial', 'Barracão', 'Sala', 'Prédio Inteiro', 'Terreno Comercial', 'Terreno']
		}
	];

	// 2. Extraindo cidades e bairros sem repetição e corrigindo para o singular (bairro)
	const todasSugestoes = [...new Set([
		...imoveis.map(i => i.cidade),
		...imoveis.map(i => i.bairro)
	])].filter(Boolean).sort();

	// 3. Svelte 5: O $derived atualiza automaticamente a lista sempre que o usuário digita
	let sugestoesFiltradas = $derived(
		localizacao.trim() === ''
			? []
			: todasSugestoes.filter(s => s.toLowerCase().includes(localizacao.toLowerCase()))
	);

	function toggleTipo(t: string) {
		if (tiposSelecionados.includes(t)) {
			tiposSelecionados = tiposSelecionados.filter(item => item !== t);
		} else {
			tiposSelecionados = [...tiposSelecionados, t];
		}
	}

	function getButtonText() {
		if (tiposSelecionados.length === 0) return 'Todos os tipos';
		if (tiposSelecionados.length === 1) return tiposSelecionados[0];
		return `${tiposSelecionados[0]} e +${tiposSelecionados.length - 1}`;
	}

	function selecionarSugestao(sugestao: string) {
		localizacao = sugestao;
		isSugestoesOpen = false;
	}

	function handleSearch(e: Event) {
		e.preventDefault(); // Svelte 5: substitui o on:submit|preventDefault

		const params = new URLSearchParams();
		// Convertendo para minúsculo na URL por padrão de web
		params.set('finalidade', finalidade.toLowerCase());

		if (tiposSelecionados.length > 0) params.set('tipos', tiposSelecionados.join(',').toLowerCase());
		if (localizacao) params.set('q', localizacao);
		if (codigo) params.set('cod', codigo); // Novo parâmetro na URL

		goto(`/imoveis?${params.toString()}`);
	}

	// Fecha os modais se clicar fora
	function handleOutsideClick(e: MouseEvent) {
		const target = e.target as Element;
		if (!target.closest('.dropdown-container')) {
			isDropdownOpen = false;
			isSugestoesOpen = false;
		}
	}
</script>

<svelte:window onclick={handleOutsideClick} />

<div class="dropdown-container relative z-20 mx-auto -mt-10 max-w-6xl rounded-xl bg-white font-sans shadow-2xl">
	<div class="flex border-b border-gray-100">
		<button
			type="button"
			class="flex-1 rounded-tl-xl border-r border-gray-100 py-4 text-center text-sm font-bold uppercase tracking-wider transition-all duration-200
      {finalidade === 'Venda' ? 'bg-brand-dark text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}"
			onclick={() => (finalidade = 'Venda')}
		>
			Comprar
		</button>
		<button
			type="button"
			class="flex-1 rounded-tr-xl py-4 text-center text-sm font-bold uppercase tracking-wider transition-all duration-200
      {finalidade === 'Aluguel' ? 'bg-brand-dark text-white' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}"
			onclick={() => (finalidade = 'Aluguel')}
		>
			Alugar
		</button>
	</div>

	<form onsubmit={handleSearch} class="grid grid-cols-1 items-end gap-4 p-6 md:grid-cols-12">

		<div class="relative space-y-1 md:col-span-3">
			<label for="tipo-select" class="flex items-center gap-1 text-xs font-bold uppercase text-gray-500">
				Tipo de Imóvel
			</label>
			<button
				id="tipo-select"
				type="button"
				onclick={() => {
					isDropdownOpen = !isDropdownOpen;
					isSugestoesOpen = false;
				}}
				class="flex h-12 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 text-left outline-none hover:border-brand-dark"
			>
				<span class="block max-w-[85%] truncate text-gray-700">{getButtonText()}</span>
				<svg class="h-4 w-4 text-gray-500 transition-transform {isDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>

			{#if isDropdownOpen}
				<div class="absolute left-0 top-full z-50 mt-2 max-h-80 w-64 overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-xl" transition:slide>
					{#each gruposTipos as grupo}
						<div class="sticky top-0 bg-gray-50 px-4 py-2 text-[10px] font-bold uppercase text-gray-500">{grupo.titulo}</div>
						<div class="p-2">
							{#each grupo.tipos as t}
								<label class="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-brand-dark">
									<input type="checkbox" checked={tiposSelecionados.includes(t)} onchange={() => toggleTipo(t)} class="accent-brand-dark" />
									<span class="text-sm text-gray-700">{t}</span>
								</label>
							{/each}
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="relative space-y-1 md:col-span-4">
			<label for="local" class="text-xs font-bold uppercase text-gray-500">Localização</label>
			<input
				id="local"
				type="text"
				placeholder="Cidade ou Bairro..."
				autocomplete="off"
				bind:value={localizacao}
				oninput={() => (isSugestoesOpen = true)}
				onfocus={() => {
					isSugestoesOpen = true;
					isDropdownOpen = false;
				}}
				class="h-12 w-full rounded-lg border border-gray-300 px-3 outline-none focus:border-brand-dark"
			/>

			{#if isSugestoesOpen && sugestoesFiltradas.length > 0}
				<ul class="absolute left-0 top-full z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
					{#each sugestoesFiltradas as sugestao}
						<li>
							<button
								type="button"
								class="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-brand-dark"
								onclick={() => selecionarSugestao(sugestao)}
							>
								📍 {sugestao}
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<div class="space-y-1 md:col-span-3">
			<label for="codigo" class="text-xs font-bold uppercase text-gray-500">Cód. Imóvel</label>
			<input
				id="codigo"
				type="text"
				placeholder="Ex: casa-paranapunga"
				bind:value={codigo}
				onfocus={() => {
					isDropdownOpen = false;
					isSugestoesOpen = false;
				}}
				class="h-12 w-full rounded-lg border border-gray-300 px-3 outline-none focus:border-brand-dark"
			/>
		</div>

		<div class="md:col-span-2">
			<button type="submit" class="h-12 w-full rounded-lg bg-brand-dark font-bold uppercase text-white shadow-lg transition-all hover:bg-brand-dark0">
				Buscar
			</button>
		</div>
	</form>
</div>
