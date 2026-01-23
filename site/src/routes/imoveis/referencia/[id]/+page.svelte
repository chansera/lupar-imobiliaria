<script lang="ts">
  import type { PageData } from './$types';
  import { fade } from 'svelte/transition';

  export let data: PageData;
  $: ({ imovel } = data);

  const getSrc = (foto: any) => typeof foto === 'string' ? foto : foto?.img?.src || foto?.src || foto;
</script>

<svelte:head>
  <title>{imovel.titulo} | Lupar Imobiliária</title>
</svelte:head>

<main class="min-h-screen bg-white pb-20" in:fade>
  <div class="relative h-[50vh] min-h-[400px] w-full bg-slate-900 md:h-[65vh]">
    <img
      src={getSrc(imovel.imagem)}
      alt={imovel.titulo}
      class="h-full w-full object-cover opacity-70"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

    <div class="absolute bottom-0 left-0 w-full p-6 md:p-12">
      <div class="container mx-auto">
        <div class="max-w-3xl">
          <span class="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {imovel.tipo} para {imovel.finalidade === 'venda' ? 'Venda' : 'Locação'}
          </span>
          <h1 class="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
            {imovel.titulo}
          </h1>
          <div class="mt-4 flex flex-wrap items-center gap-4 text-gray-300">
            <span class="flex items-center gap-1">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2"/></svg>
              {imovel.bairros}, {imovel.cidade}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto -mt-10 px-4 relative z-10">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">

      <div class="lg:col-span-2 space-y-8">
        <div class="rounded-2xl bg-white p-6 shadow-xl border border-gray-100 lg:hidden">
          <p class="text-sm font-medium text-gray-500">Valor</p>
          <p class="text-3xl font-black text-slate-900">{imovel.preco}</p>
          {#if imovel.complementoPreco}
            <p class="text-sm text-blue-600 font-semibold mt-1">{imovel.complementoPreco}</p>
          {/if}
        </div>

        <section class="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">Descrição Detalhada</h2>
          <p class="whitespace-pre-line text-lg leading-relaxed text-slate-600">
            {imovel.descricao}
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl font-bold text-slate-900">Fotos</h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {#if imovel.galeria}
              {#each imovel.galeria as foto}
                <div class="overflow-hidden rounded-xl bg-gray-100 aspect-video group shadow-sm border border-gray-100">
                  <img
                    src={getSrc(foto)}
                    alt="Interior do imóvel"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              {/each}
            {/if}
          </div>
        </section>
      </div>

      <div class="space-y-6">
        <div class="sticky top-24 rounded-2xl bg-white p-8 shadow-2xl border border-gray-100 hidden lg:block">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {imovel.finalidade === 'venda' ? 'Preço de Venda' : 'Valor da Locação'}
          </p>
          <p class="text-4xl font-black text-slate-900">{imovel.preco}</p>
          {#if imovel.complementoPreco}
             <p class="text-sm text-blue-600 font-semibold mt-2 mb-8">{imovel.complementoPreco}</p>
          {:else}
             <div class="mb-8"></div>
          {/if}

          <div class="space-y-4 mb-8">
            <h3 class="font-bold text-slate-900 border-b pb-2 text-sm uppercase">Atributos</h3>
            <div class="grid grid-cols-2 gap-4">
              {#if imovel.quartos > 0}
                <div class="bg-slate-50 p-3 rounded-lg text-center">
                  <span class="block text-xl font-bold text-slate-900">{imovel.quartos}</span>
                  <span class="text-xs text-gray-500 uppercase">Quartos</span>
                </div>
              {/if}

              {#if imovel.banheiros > 0}
                <div class="bg-slate-50 p-3 rounded-lg text-center">
                  <span class="block text-xl font-bold text-slate-900">{imovel.banheiros}</span>
                  <span class="text-xs text-gray-500 uppercase">Banhos</span>
                </div>
              {/if}

              {#if imovel.areaConstruida > 0}
                <div class="bg-slate-50 p-3 rounded-lg text-center">
                  <span class="block text-xl font-bold text-slate-900">{imovel.areaConstruida}m²</span>
                  <span class="text-xs text-gray-500 uppercase">Construída</span>
                </div>
              {/if}

              {#if imovel.areaTotal > 0}
                <div class="bg-slate-50 p-3 rounded-lg text-center">
                  <span class="block text-xl font-bold text-slate-900">{imovel.areaTotal}m²</span>
                  <span class="text-xs text-gray-500 uppercase">Lote Total</span>
                </div>
              {/if}
            </div>
          </div>

          <a
            href="https://wa.me/5567984679017?text=Olá, tenho interesse no imóvel: {imovel.titulo} (Ref: {imovel.id})"
            target="_blank"
            class="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-bold text-white transition-all hover:bg-green-700 shadow-lg shadow-green-200"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>

    </div>
  </div>
</main>
