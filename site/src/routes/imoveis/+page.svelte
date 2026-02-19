<script lang="ts">
	import { page } from '$app/state';
	import { imoveis } from '$lib/data/imoveis';
	import { slide } from 'svelte/transition';

	import PropertyCard from '$lib/components/molecules/PropertyCard.svelte';
	import FilterSidebar from '$lib/components/organisms/FilterSidebar.svelte';
	import type { Finalidade } from '$lib/types/Imovel';

	// 1. Inicialização segura dos Tipos baseados na URL
	const getInitialFinalidade = (): Finalidade => {
		const urlParam = page.url.searchParams.get('finalidade');
		return urlParam?.toLowerCase() === 'aluguel' ? 'Aluguel' : 'Venda';
	};

	// 2. Estado (Runes)
	let finalidade = $state<Finalidade>(getInitialFinalidade());

	const tiposURL = page.url.searchParams.get('tipos');
	let tiposSelecionados = $state<string[]>(tiposURL ? tiposURL.toLowerCase().split(',') : []);

	let quartosMin = $state(0);
	let banheirosMin = $state(0);

	// Recebendo os novos parâmetros do SearchBox
	let codigoBusca = $state(page.url.searchParams.get('cod') || '');
	let localizacaoBusca = $state(page.url.searchParams.get('q') || '');

	// 3. Reatividade Pura ($derived) - O coração da filtragem
	let imoveisFiltrados = $derived(imoveis.filter(imovel => {
		// Regra de Ouro: Se buscou pelo código exato, ignora os outros filtros
		if (codigoBusca) {
			return imovel.cod.toLowerCase().includes(codigoBusca.toLowerCase());
		}

		// Filtro 1: Finalidade
		if (imovel.finalidade !== finalidade) return false;

		// Filtro 2: Tipos de Imóvel
		if (tiposSelecionados.length > 0) {
			const match = tiposSelecionados.some(t => imovel.tipo.toLowerCase() === t);
			if (!match) return false;
		}

		// Filtro 3: Localização (Cidade ou Bairro)
		if (localizacaoBusca) {
			const query = localizacaoBusca.toLowerCase();
			const matchLocal = imovel.cidade.toLowerCase().includes(query) || imovel.bairro.toLowerCase().includes(query);
			if (!matchLocal) return false;
		}

		// Filtro 4: Características Numéricas (Com Type Guardngng seguro)
		if (quartosMin > 0) {
			if (!('quartos' in imovel) || (imovel.quartos || 0) < quartosMin) return false;
		}

		if (banheirosMin > 0) {
			if (!('banheiros' in imovel) || (imovel.banheiros || 0) < banheirosMin) return false;
		}

		return true;
	}));

	function resetAll() {
		tiposSelecionados = [];
		quartosMin = 0;
		banheirosMin = 0;
		codigoBusca = '';
		localizacaoBusca = '';
	}
</script>

<svelte:head>
	<title>Lupar | Imóveis</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-8 font-sans">
	<div class="container mx-auto px-4">
		<div class="mb-8">
			<h1 class="text-3xl font-bold text-gray-900">
				Imóveis para {finalidade === 'Venda' ? 'Comprar' : 'Alugar'}
			</h1>
			<p class="mt-2 text-gray-500">
				{imoveisFiltrados.length} {imoveisFiltrados.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
				{#if localizacaoBusca}
					em <strong class="text-gray-700">{localizacaoBusca}</strong>
				{/if}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
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
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{#each imoveisFiltrados as imovel (imovel.cod)}
							<div transition:slide|local class="h-full">
								<PropertyCard {imovel} />
							</div>
						{/each}
					</div>
				{:else}
					<div class="flex h-96 flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-white p-12 text-center">
						<h3 class="text-xl font-bold text-gray-900">Nenhum imóvel encontrado.</h3>
						<p class="mt-2 text-sm text-gray-500">Tente ajustar sua busca ou remover alguns filtros.</p>
						<button class="mt-4 font-bold text-blue-600 hover:underline" onclick={resetAll}>
							Limpar Filtros
						</button>
					</div>
				{/if}
			</main>
		</div>
	</div>
</div>
