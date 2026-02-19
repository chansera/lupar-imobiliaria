<script lang="ts">

	import heroBg from '$lib/assets/banner-home.png';

	let {
		title = "Encontre seu imóvel ideal",
		subtitle = "As melhores opções de compra e venda na região."
	}: {
		title?: string;
		subtitle?: string;
	} = $props();
</script>

<section class="relative overflow-hidden bg-slate-900 py-20 text-white md:py-32">

	<div class="absolute inset-0 z-0">
		<enhanced:img
			src={heroBg}
			alt="Imagem de fundo imobiliária"
			class="h-full w-full object-cover"
			sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, 100vw"
		/>
	</div>

	<div class="absolute inset-0 z-0 mix-blend-multiply bg-slate-900/80"></div>

	<div class="container relative z-10 mx-auto px-4 pb-12 text-center">
		<h1 class="mb-4 text-3xl font-bold tracking-tight drop-shadow-lg md:text-5xl">
			{title}
		</h1>
		<p class="mx-auto max-w-2xl text-lg text-gray-100 drop-shadow-md md:text-xl">
			{subtitle}
		</p>
	</div>
</section>
