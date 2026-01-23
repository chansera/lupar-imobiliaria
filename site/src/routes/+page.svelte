<script lang="ts">
  import Hero from '$lib/components/organisms/Hero.svelte';
  import SearchBox from '$lib/components/organisms/SearchBox.svelte';
  import SectionCarousel from '$lib/components/organisms/SectionCarousel.svelte';

  import { imoveis } from '$lib/data/imoveis';

  // Filtra as listas
  const imoveisVenda = imoveis.filter(i => i.finalidade === 'venda');
  const imoveisAluguel = imoveis.filter(i => i.finalidade === 'aluguel');
</script>

<svelte:head>
  <title>Lupar Imobiliária | Início</title>
</svelte:head>

<Hero>
  <span slot="title">Seu novo lar começa aqui</span>
  <span slot="subtitle">Confira as melhores oportunidades de Três Lagoas e região.</span>
</Hero>

<div class="relative z-30 px-4 mb-8">
  <SearchBox />
</div>

<div class="bg-white">
  <SectionCarousel
    title="Oportunidades de Venda"
    subtitle="Casas, terrenos e comerciais prontos para negócio."
    items={imoveisVenda}
    linkVerMais="/imoveis?finalidade=venda"
  />
</div>

<div class="container mx-auto px-4"><hr class="border-gray-100"></div>

<div class="bg-white pb-20">
  <SectionCarousel
    title="Aluguel Rápido"
    subtitle="Imóveis selecionados para locação imediata."
    items={imoveisAluguel}
    linkVerMais="/imoveis?finalidade=aluguel"
  />
</div>
