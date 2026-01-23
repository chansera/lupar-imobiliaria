<script lang="ts">
  import Hero from '$lib/components/organisms/Hero.svelte';
  import SearchBox from '$lib/components/organisms/SearchBox.svelte';
  import SectionCarousel from '$lib/components/organisms/SectionCarousel.svelte';

  // Nossos novos componentes estruturais
  import HomeSearchWrapper from '$lib/components/molecules/HomeSearchWrapper.svelte';
  import Section from '$lib/components/atoms/Section.svelte';
  import Divider from '$lib/components/atoms/Divider.svelte';

  import { imoveis } from '$lib/data/imoveis';

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

<HomeSearchWrapper>
  <SearchBox />
</HomeSearchWrapper>

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
