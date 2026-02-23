<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { SITE_INFO } from '$lib/constants';
	import { page } from '$app/state';

	let { data }: { data: PageData } = $props();
	let imovel = $derived(data.imovel);

	const formatarMoeda = (valor: number) =>
		new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

	const imagensOtimizadas = import.meta.glob<{ default: any }>(
		'/src/lib/assets/images/imoveis/**/*.{jpeg,jpg,png,webp}',
		{ eager: true, query: { enhanced: true } }
	);

	function getEnhancedSrc(urlPath?: string) {
		if (!urlPath) return '';
		const fullPath = urlPath.startsWith('/assets') ? `/src/lib${urlPath}` : urlPath;
		return imagensOtimizadas[fullPath]?.default || urlPath;
	}

	let capa = $derived(imovel.imagens?.find((img: any) => img.isCover) || imovel.imagens?.[0]);
	let galeria = $derived(imovel.imagens?.filter((img: any) => !img.isCover) || []);

	let linkWhatsApp = $derived(
		`https://wa.me/55${SITE_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, tenho interesse no imóvel: ${imovel.titulo} (Ref: ${imovel.cod}). Link: ${page.url.href}`)}`
	);
</script>

<svelte:head>
	<title>{imovel.titulo} | Lupar Imobiliária</title>
</svelte:head>

<main class="min-h-screen bg-white pb-20" in:fade>
	<div class="relative h-[50vh] w-full min-w-full bg-victoria-800 md:h-[65vh]">
		{#if capa}
			<enhanced:img
				src={getEnhancedSrc(capa.url)}
				alt={capa.alt || imovel.titulo}
				class="h-full w-full object-cover opacity-70"
				sizes="100vw"
			/>
		{/if}
		<div class="absolute inset-0 bg-gradient-to-t from-victoria-900 via-victoria-900/20 to-transparent"></div>

		<div class="absolute bottom-0 left-0 w-full p-6 pb-16 md:p-12 md:pb-20">
			<div class="container mx-auto">
				<div class="max-w-3xl">
					<span class="mb-4 inline-block rounded-full bg-victoria-800 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
						{imovel.tipo} para {imovel.finalidade}
					</span>
					<h1 class="text-3xl font-extrabold text-white drop-shadow-md md:text-5xl lg:text-6xl">
						{imovel.titulo}
					</h1>
					<div class="mt-4 flex flex-wrap items-center gap-4 text-victoria-300 drop-shadow-sm">
						<span class="flex items-center gap-1.5 text-sm md:text-base">
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

				<div class="rounded-2xl border border-victoria-100 bg-white p-6 shadow-xl lg:hidden">
					<p class="text-sm font-medium text-victoria-500">Valor</p>
					<p class="mb-5 text-3xl font-black text-victoria-800">{formatarMoeda(imovel.preco)}</p>

					<a
						href={linkWhatsApp}
						target="_blank"
						class="flex w-full items-center justify-center gap-2 rounded-lg bg-victoria-800 px-6 py-4 font-bold text-white shadow-sm transition-all active:bg-victoria-900"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
						<span>WhatsApp</span>
					</a>
				</div>

				<section class="rounded-2xl border border-victoria-100 bg-white p-8 shadow-sm">
					<h2 class="mb-6 text-2xl font-bold text-victoria-800">Descrição Detalhada</h2>
					<p class="whitespace-pre-line text-lg leading-relaxed text-victoria-600">
						{imovel.descricao}
					</p>
				</section>

				{#if galeria.length > 0}
					<section class="space-y-6">
						<h2 class="text-2xl font-bold text-victoria-800">Fotos</h2>
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							{#each galeria as foto}
								<div class="group aspect-video overflow-hidden rounded-xl border border-victoria-100 bg-victoria-100 shadow-sm">
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
				<div class="sticky top-24 hidden rounded-2xl border border-victoria-100 bg-white p-8 shadow-2xl lg:block">
					<p class="text-sm font-medium uppercase tracking-wider text-victoria-500">
						{imovel.finalidade === 'Venda' ? 'Preço de Venda' : 'Valor da Locação'}
					</p>
					<p class="text-4xl font-black text-victoria-800">{formatarMoeda(imovel.preco)}</p>

					<div class="mb-8 mt-8 space-y-4">
						<h3 class="border-b border-victoria-800 pb-2 text-sm font-bold uppercase text-victoria-800">Atributos</h3>
						<div class="grid grid-cols-2 gap-4">
							{#if imovel.tipo === 'Casa' || imovel.tipo === 'Apartamento'}
								<div class="rounded-lg bg-victoria-50 p-3 text-center">
									<span class="block text-xl font-bold text-victoria-800">{imovel.quartos}</span>
									<span class="text-xs uppercase text-victoria-500">Quartos</span>
								</div>
								<div class="rounded-lg bg-victoria-50 p-3 text-center">
									<span class="block text-xl font-bold text-victoria-800">{imovel.banheiros}</span>
									<span class="text-xs uppercase text-victoria-500">Banhos</span>
								</div>
								<div class="rounded-lg bg-victoria-50 p-3 text-center">
									<span class="block text-xl font-bold text-victoria-800">{imovel.areaConstruida}m²</span>
									<span class="text-xs uppercase text-victoria-500">Construída</span>
								</div>
							{/if}
							{#if 'areaTotal' in imovel && imovel.areaTotal}
								<div class="rounded-lg bg-victoria-50 p-3 text-center">
									<span class="block text-xl font-bold text-victoria-800">{imovel.areaTotal}m²</span>
									<span class="text-xs uppercase text-victoria-500">Lote Total</span>
								</div>
							{/if}
						</div>
					</div>

					<a
						href={linkWhatsApp}
						target="_blank"
						class="flex w-full items-center justify-center gap-2 rounded-lg bg-victoria-800 px-6 py-4 font-bold text-white shadow-sm transition-all hover:-tranvictoria-y-0.5 hover:bg-victoria-900 hover:shadow-md"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
						<span>WhatsApp</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</main>
