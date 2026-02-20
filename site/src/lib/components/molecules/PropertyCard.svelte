<script lang="ts">
	import type { Imovel } from '$lib/types/Imovel';
	import PropertyCarousel from './PropertyCarousel.svelte';

	let { imovel }: { imovel: Imovel } = $props();

	const formatarMoeda = (valor: number) =>
		new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
</script>

<a
	href="/imoveis/referencia/{imovel.cod}"
	class="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
>
	<article class="flex flex-1 flex-col">
		<PropertyCarousel images={imovel.imagens || []} />

		<div class="flex flex-1 flex-col p-5">
			<div class="mb-3 flex items-center justify-between">
				<span class="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold tracking-wide text-brand">
					{imovel.finalidade}
				</span>
				<span class="text-xs font-semibold uppercase tracking-wider text-gray-500">
					{imovel.tipo}
				</span>
			</div>

			<h3 class="line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-brand-dark" title={imovel.titulo}>
				{imovel.titulo}
			</h3>
			<p class="mt-1 text-sm text-gray-500">{imovel.bairro}, {imovel.cidade}</p>

			<div class="mt-4 text-2xl font-black text-brand">
				{formatarMoeda(imovel.preco)}
			</div>

			<div class="mt-auto border-t border-gray-100 pt-5 mt-4">
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
</a>
