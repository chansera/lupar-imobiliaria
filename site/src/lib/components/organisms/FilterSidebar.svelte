<script lang="ts">
	import { fly } from 'svelte/transition';
	import FilterContent from '$lib/components/molecules/FilterContent.svelte';
	import type { Finalidade } from '$lib/types/Imovel';

	// 1. Recebendo e vinculando variáveis com a página pai
	let {
		finalidade = $bindable('Venda'),
		tiposSelecionados = $bindable([]),
		quartosMin = $bindable(0),
		banheirosMin = $bindable(0),
		totalResultados = 0
	}: {
		finalidade?: Finalidade;
		tiposSelecionados?: string[];
		quartosMin?: number;
		banheirosMin?: number;
		totalResultados?: number;
	} = $props();

	// 2. Estado local do menu mobile
	let isMobileOpen = $state(false);

	// 3. Tipos para os checkboxes
	const gruposTipos = [
		{ titulo: 'Residencial', tipos: ['Casa', 'Apartamento', 'Sobrado', 'Kitnet', 'Terreno'] },
		{ titulo: 'Comercial', tipos: ['Salão Comercial', 'Barracão', 'Sala', 'Prédio Inteiro', 'Rural'] }
	];

	// 4. Trava o scroll do body no mobile
	$effect(() => {
		if (isMobileOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});

	function toggleTipo(t: string) {
		if (tiposSelecionados.includes(t)) {
			tiposSelecionados = tiposSelecionados.filter(i => i !== t);
		} else {
			tiposSelecionados = [...tiposSelecionados, t];
		}
	}

	function limpar() {
		tiposSelecionados = [];
		quartosMin = 0;
		banheirosMin = 0;
	}
</script>

<div class="mb-6 lg:hidden">
	<button
		onclick={() => (isMobileOpen = true)}
		class="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors active:bg-gray-50"
		aria-label="Abrir filtros de imóveis"
	>
		<span class="flex items-center gap-2 font-bold text-gray-700">
			<svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
			</svg>
			Filtrar Imóveis
		</span>
		{#if tiposSelecionados.length > 0 || quartosMin > 0 || banheirosMin > 0}
			<span class="rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">Ativos</span>
		{/if}
		<svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>
</div>

{#if isMobileOpen}
	<div
		class="fixed inset-0 z-[100] flex h-screen flex-col bg-white font-sans"
		transition:fly={{ y: 200, duration: 300 }}
		role="dialog"
		aria-modal="true"
		aria-labelledby="dialog-title"
	>
		<div class="flex shrink-0 items-center justify-between border-b border-gray-100 bg-white px-4 py-4">
			<button
				onclick={() => (isMobileOpen = false)}
				class="-ml-2 p-2 text-gray-500"
				aria-label="Fechar filtros"
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<h2 id="dialog-title" class="text-lg font-bold text-gray-900">Filtros</h2>

			<button
				onclick={limpar}
				class="text-sm font-bold text-blue-600 hover:underline"
				aria-label="Limpar todos os filtros"
			>
				Limpar
			</button>
		</div>

		<div class="flex-1 space-y-6 overflow-y-auto p-4">
			<FilterContent
				{gruposTipos}
				bind:finalidade
				bind:tiposSelecionados
				bind:quartosMin
				bind:banheirosMin
				{toggleTipo}
			/>
		</div>

		<div class="shrink-0 border-t border-gray-100 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
			<button
				onclick={() => (isMobileOpen = false)}
				class="w-full rounded-lg bg-blue-600 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 active:scale-[0.98]"
				aria-label="Aplicar filtros e ver {totalResultados} imóveis"
			>
				Ver {totalResultados} {totalResultados === 1 ? 'Imóvel' : 'Imóveis'}
			</button>
		</div>
	</div>
{/if}

<div class="sticky top-24 hidden max-h-[calc(100vh-120px)] flex-col rounded-xl border border-gray-100 bg-white shadow-sm lg:flex">
	<div class="z-10 flex items-center justify-between rounded-t-xl border-b border-gray-100 bg-white p-4">
		<h2 class="flex items-center gap-2 text-base font-bold text-gray-900">Filtros</h2>

		{#if tiposSelecionados.length > 0 || quartosMin > 0 || banheirosMin > 0}
			<button
				onclick={limpar}
				class="text-[10px] font-bold uppercase tracking-wide text-red-500 hover:underline"
				aria-label="Limpar todos os filtros"
			>
				LIMPAR
			</button>
		{/if}
	</div>

	<div class="custom-scrollbar overflow-y-auto p-4">
		<FilterContent
			{gruposTipos}
			bind:finalidade
			bind:tiposSelecionados
			bind:quartosMin
			bind:banheirosMin
			{toggleTipo}
		/>
	</div>
</div>

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #e5e7eb;
		border-radius: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #d1d5db;
	}
</style>
