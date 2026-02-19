<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import SearchBox from '$lib/components/organisms/SearchBox.svelte';
	import SectionCarousel from '$lib/components/organisms/SectionCarousel.svelte';

	// Nossos componentes estruturais (Átomos)
	import Section from '$lib/components/atoms/Section.svelte';
	import Divider from '$lib/components/atoms/Divider.svelte';

	// Dados mockados
	import { imoveis } from '$lib/data/imoveis';

	// Correção: Usando o case exato dos nossos Tipos ('Venda' e 'Aluguel')
	const imoveisVenda = imoveis.filter(i => i.finalidade === 'Venda');
	const imoveisAluguel = imoveis.filter(i => i.finalidade === 'Aluguel');
</script>

<svelte:head>
	<title>Lupar Imobiliária | Início</title>
</svelte:head>

<Hero
	title="Seu novo lar começa aqui"
	subtitle="Confira as melhores oportunidades de Três Lagoas e região."
/>

<SearchBox />

<Section>
	<SectionCarousel
		title="Oportunidades de Venda"
		subtitle="Casas, terrenos e comerciais prontos para negócio."
		items={imoveisVenda}
		linkVerMais="/imoveis?finalidade=venda"
	/>
</Section>

<Divider />

<Section class="pb-20">
	<SectionCarousel
		title="Aluguel Rápido"
		subtitle="Imóveis selecionados para locação imediata."
		items={imoveisAluguel}
		linkVerMais="/imoveis?finalidade=aluguel"
	/>
</Section>
