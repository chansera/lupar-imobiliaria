<script lang="ts">
	import PropertyCard from '$lib/components/molecules/PropertyCard.svelte';
	import type { Imovel } from '$lib/types/Imovel';

	// 1. Props no Svelte 5
	let {
		title,
		subtitle = "",
		items = [],
		linkVerMais
	}: {
		title: string;
		subtitle?: string;
		items?: Imovel[];
		linkVerMais: string;
	} = $props();

	// 2. Estado local com $state
	let filtroAtivo = $state<'residencial' | 'comercial'>('residencial');

	// 3. Reatividade com $derived e tipagem estrita
	let itemsFiltrados = $derived(items.filter(item => {
		// Como temos Tipos Fortes agora, a lógica fica muito mais segura:
		const tiposComerciais = ['Salão Comercial', 'Barracão', 'Terreno'];
		const isComercial = tiposComerciais.includes(item.tipo);

		if (filtroAtivo === 'residencial') {
			return !isComercial;
		} else {
			return isComercial;
		}
	}));
</script>

<div class="container mx-auto px-4">
	<div class="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
		<div>
			<h2 class="text-2xl font-bold text-victoria-900 md:text-3xl">{title}</h2>
			{#if subtitle}
				<p class="mt-1 text-victoria-500">{subtitle}</p>
			{/if}
		</div>

		<div class="flex self-start rounded-lg bg-victoria-100 p-1 md:self-auto">
			<button
				class=" rounded-md px-6 py-2 text-sm font-bold transition-all duration-300
        {filtroAtivo === 'residencial'
					? 'bg-white text-victoria-800 shadow-sm'
					: 'text-victoria-500 hover:text-victoria-900'}"
				onclick={() => (filtroAtivo = 'residencial')}
			>
				Residencial
			</button>
			<button
				class=" rounded-md px-6 py-2 text-sm font-bold transition-all duration-300
        {filtroAtivo === 'comercial'
					? 'bg-white text-victoria-800 shadow-sm'
					: 'text-victoria-500 hover:text-victoria-900'}"
				onclick={() => (filtroAtivo = 'comercial')}
			>
				Comercial
			</button>
		</div>
	</div>

	{#if itemsFiltrados.length > 0}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each itemsFiltrados as item (item.cod)}
				<div class="h-full">
					<PropertyCard imovel={item} />
				</div>
			{/each}
		</div>

		<div class="mt-10 flex justify-center">
			<a
				href={linkVerMais}
				class="inline-flex items-center gap-2 rounded-full border border-victoria-200 px-6 py-3 font-bold text-victoria-600 transition-all hover:border-blue-600 hover:text-blue-600"
			>
				Ver todos em {title}
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	{:else}
		<div class="rounded-xl border border-dashed border-victoria-200 bg-victoria-50 py-12 text-center">
			<p class="text-victoria-500">Nenhum imóvel {filtroAtivo} encontrado nesta categoria no momento.</p>
		</div>
	{/if}
</div>
