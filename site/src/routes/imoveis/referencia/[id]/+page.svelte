<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	// 1. Svelte 5: Recebendo os dados da função load
	let { data }: { data: PageData } = $props();
	let imovel = $derived(data.imovel);

	// 2. Formatador de Preço
	const formatarMoeda = (valor: number) =>
		new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

	// 3. Inteligência de Imagens (Enhanced Img)
	const imagensOtimizadas = import.meta.glob<{ default: any }>(
		'/src/lib/assets/images/imoveis/**/*.{jpeg,jpg,png,webp}',
		{ eager: true, query: { enhanced: true } }
	);

	function getEnhancedSrc(urlPath?: string) {
		if (!urlPath) return '';
		const fullPath = urlPath.startsWith('/assets') ? `/src/lib${urlPath}` : urlPath;
		return imagensOtimizadas[fullPath]?.default || urlPath;
	}

	// Separando a capa da galeria
	let capa = $derived(imovel.imagens?.find(img => img.isCover) || imovel.imagens?.[0]);
	let galeria = $derived(imovel.imagens?.filter(img => !img.isCover) || []);
</script>

<svelte:head>
	<title>{imovel.titulo} | Lupar Imobiliária</title>
</svelte:head>

<main class="min-h-screen bg-white pb-20" in:fade>
	<div class="relative h-[50vh] w-full min-w-full bg-slate-900 md:h-[65vh]">
		{#if capa}
			<enhanced:img
				src={getEnhancedSrc(capa.url)}
				alt={capa.alt || imovel.titulo}
				class="h-full w-full object-cover opacity-70"
				sizes="100vw"
			/>
		{/if}
		<div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

		<div class="absolute bottom-0 left-0 w-full p-6 md:p-12">
			<div class="container mx-auto">
				<div class="max-w-3xl">
					<span class="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
						{imovel.tipo} para {imovel.finalidade}
					</span>
					<h1 class="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
						{imovel.titulo}
					</h1>
					<div class="mt-4 flex flex-wrap items-center gap-4 text-gray-300">
						<span class="flex items-center gap-1">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" />
							</svg>
							{imovel.bairro}, {imovel.cidade}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container relative z-10 mx-auto -mt-10 px-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div class="space-y-8 lg:col-span-2">

				<div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl lg:hidden">
					<p class="text-sm font-medium text-gray-500">Valor</p>
					<p class="text-3xl font-black text-slate-900">{formatarMoeda(imovel.preco)}</p>
				</div>

				<section class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
					<h2 class="mb-6 text-2xl font-bold text-slate-900">Descrição Detalhada</h2>
					<p class="whitespace-pre-line text-lg leading-relaxed text-slate-600">
						{imovel.descricao}
					</p>
				</section>

				{#if galeria.length > 0}
					<section class="space-y-6">
						<h2 class="text-2xl font-bold text-slate-900">Fotos</h2>
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							{#each galeria as foto}
								<div class="group aspect-video overflow-hidden rounded-xl border border-gray-100 bg-gray-100 shadow-sm">
									<enhanced:img
										src={getEnhancedSrc(foto.url)}
										alt={foto.alt || 'Foto do imóvel'}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
										sizes="(min-width: 640px) 50vw, 100vw"
									/>
								</div>
							{/each}
						</div>
					</section>
				{/if}
			</div>

			<div class="space-y-6">
				<div class="sticky top-24 hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl lg:block">
					<p class="text-sm font-medium uppercase tracking-wider text-gray-500">
						{imovel.finalidade === 'Venda' ? 'Preço de Venda' : 'Valor da Locação'}
					</p>
					<p class="text-4xl font-black text-slate-900">{formatarMoeda(imovel.preco)}</p>

					<div class="mb-8 mt-8 space-y-4">
						<h3 class="border-b pb-2 text-sm font-bold uppercase text-slate-900">Atributos</h3>
						<div class="grid grid-cols-2 gap-4">

							{#if imovel.tipo === 'Casa' || imovel.tipo === 'Apartamento'}
								<div class="rounded-lg bg-slate-50 p-3 text-center">
									<span class="block text-xl font-bold text-slate-900">{imovel.quartos}</span>
									<span class="text-xs uppercase text-gray-500">Quartos</span>
								</div>
								<div class="rounded-lg bg-slate-50 p-3 text-center">
									<span class="block text-xl font-bold text-slate-900">{imovel.banheiros}</span>
									<span class="text-xs uppercase text-gray-500">Banhos</span>
								</div>
								<div class="rounded-lg bg-slate-50 p-3 text-center">
									<span class="block text-xl font-bold text-slate-900">{imovel.areaConstruida}m²</span>
									<span class="text-xs uppercase text-gray-500">Construída</span>
								</div>
							{/if}

							{#if 'areaTotal' in imovel && imovel.areaTotal}
								<div class="rounded-lg bg-slate-50 p-3 text-center">
									<span class="block text-xl font-bold text-slate-900">{imovel.areaTotal}m²</span>
									<span class="text-xs uppercase text-gray-500">Lote Total</span>
								</div>
							{/if}
						</div>
					</div>

					<a
						href="https://wa.me/5567984679017?text=Olá, tenho interesse no imóvel: {imovel.titulo} (Ref: {imovel.cod})"
						target="_blank"
						class="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-bold text-white shadow-lg shadow-green-200 transition-all hover:bg-green-700"
					>
						Chamar no WhatsApp
					</a>
				</div>
			</div>
		</div>
	</div>
</main>
