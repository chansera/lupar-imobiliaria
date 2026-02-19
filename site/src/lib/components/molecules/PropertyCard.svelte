<script lang="ts">
	import type { Imovel } from '$lib/types/Imovel';
	import PropertyCarousel from './PropertyCarousel.svelte'; // Ajuste o caminho se necessário

	// Recebendo o imóvel via props (Svelte 5)
	let { imovel }: { imovel: Imovel } = $props();

	// Formatador de moeda
	const formatarMoeda = (valor: number) =>
		new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
</script>

<article class="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

	<PropertyCarousel images={imovel.imagens || []} />

	<div class="flex flex-1 flex-col p-5">
		<div class="mb-3 flex items-center justify-between">
			<span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold tracking-wide text-blue-800">
				{imovel.finalidade}
			</span>
			<span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
				{imovel.tipo}
			</span>
		</div>

		<h3 class="line-clamp-1 text-lg font-bold text-gray-900" title={imovel.titulo}>
			{imovel.titulo}
		</h3>
		<p class="mt-1 text-sm text-gray-500">{imovel.bairro}, {imovel.cidade}</p>

		<div class="mt-4 text-2xl font-black text-blue-700">
			{formatarMoeda(imovel.preco)}
		</div>

		<div class="mt-auto pt-5 border-t border-gray-100 mt-4">
			<div class="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">

				{#if imovel.tipo === 'Casa' || imovel.tipo === 'Apartamento'}
					<span class="flex items-center gap-1.5" title="Quartos">
						🛏️ {imovel.quartos}
					</span>
					<span class="flex items-center gap-1.5" title="Banheiros">
						🚿 {imovel.banheiros}
					</span>
					<span class="flex items-center gap-1.5" title="Área Construída">
						📐 {imovel.areaConstruida}m²
					</span>

				{:else if imovel.tipo === 'Terreno'}
					<span class="flex items-center gap-1.5" title="Área Total">
						📐 {imovel.areaTotal}m²
					</span>

				{:else if imovel.tipo === 'Salão Comercial' || imovel.tipo === 'Barracão'}
					{#if imovel.banheiros}
						<span class="flex items-center gap-1.5" title="Banheiros">
							🚿 {imovel.banheiros}
						</span>
					{/if}
					<span class="flex items-center gap-1.5" title="Área Total">
						📐 {imovel.areaTotal}m²
					</span>
				{/if}

			</div>
		</div>
	</div>
</article>
