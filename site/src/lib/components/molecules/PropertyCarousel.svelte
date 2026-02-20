<script lang="ts">
	import type { ImovelImage } from '$lib/types/Image';

	let { images = [] }: { images: ImovelImage[] } = $props();

	const imagensOtimizadas = import.meta.glob<{ default: any }>(
		'/src/lib/assets/images/imoveis/**/*.{jpeg,jpg,png,webp}',
		{
			eager: true,
			query: { enhanced: true }
		}
	);

	function getEnhancedSrc(urlPath: string) {
		const fullPath = urlPath.startsWith('/assets')
			? `/src/lib${urlPath}`
			: urlPath;

		return imagensOtimizadas[fullPath]?.default || urlPath;
	}

	let currentIndex = $state(0);
	let coverImage = $derived(images.find(img => img.isCover) || images[0]);
	let currentImage = $derived(images[currentIndex] || coverImage);

	// Lógica de navegação por clique
	function next(e: Event) {
		e.preventDefault();
		e.stopPropagation();
		if (images.length > 0) currentIndex = (currentIndex + 1) % images.length;
	}

	function prev(e: Event) {
		e.preventDefault();
		e.stopPropagation();
		if (images.length > 0) currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function setIndex(e: Event, index: number) {
		e.preventDefault();
		e.stopPropagation();
		currentIndex = index;
	}

	// Lógica de navegação por Swipe (Mobile)
	let touchStartX = 0;
	let touchEndX = 0;

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.changedTouches[0].screenX;
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	}

	function handleSwipe() {
		if (images.length <= 1) return;

		const minSwipeDistance = 50; // Distância mínima para considerar um "arraste"

		if (touchEndX < touchStartX - minSwipeDistance) {
			// Arrastou para a esquerda -> Próxima foto
			currentIndex = (currentIndex + 1) % images.length;
		} else if (touchEndX > touchStartX + minSwipeDistance) {
			// Arrastou para a direita -> Foto anterior
			currentIndex = (currentIndex - 1 + images.length) % images.length;
		}
	}

	$effect(() => {
		if (images.length > 0 && currentIndex >= images.length) currentIndex = 0;
	});
</script>

<div
	class="group relative h-64 w-full overflow-hidden bg-gray-200"
	aria-roledescription="carousel"
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
>
	{#if images.length > 0 && currentImage}

		<enhanced:img
			src={getEnhancedSrc(currentImage.url)}
			alt={currentImage.alt || 'Foto do imóvel'}
			class="h-full w-full object-cover transition-opacity duration-300"
			sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
		/>

		{#if images.length > 1}
			<button
				class="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white opacity-100 transition-opacity hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
				onclick={prev}
				aria-label="Imagem anterior"
			>
				‹
			</button>
			<button
				class="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white opacity-100 transition-opacity hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
				onclick={next}
				aria-label="Próxima imagem"
			>
				›
			</button>

			<div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
				{#each images as _, index}
					<button
						class="h-2 w-2 rounded-full transition-all {index === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}"
						onclick={(e) => setIndex(e, index)}
						aria-label={`Ir para imagem ${index + 1}`}
					></button>
				{/each}
			</div>
		{/if}
	{:else}
		<div class="flex h-full w-full items-center justify-center text-sm text-gray-500">
			<span>Sem fotos disponíveis</span>
		</div>
	{/if}
</div>
