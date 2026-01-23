<script>
  // Importe a imagem aqui
  // Se você já configurou o 'enhanced-img', pode usar ?enhanced
  import heroBg from '$lib/assets/banner-home.jpg';
</script>

<section class="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">

  <div class="absolute inset-0 z-0">
    <img
      src={heroBg}
      alt="Imagem de fundo imobiliária"
      class="w-full h-full object-cover"
    />
  </div>

  <div class="absolute inset-0 bg-slate-900/80 z-0 mix-blend-multiply"></div>

  <div class="container mx-auto px-4 relative z-10 text-center pb-12">
    <h1 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
      <slot name="title">Encontre seu imóvel ideal</slot>
    </h1>
    <p class="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
      <slot name="subtitle">As melhores opções de compra e venda na região.</slot>
    </p>
  </div>
</section>
