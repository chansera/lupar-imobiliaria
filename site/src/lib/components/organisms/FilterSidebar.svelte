<script lang="ts">
 import { fade, fly } from 'svelte/transition';
 import FilterContent from '$lib/components/molecules/FilterContent.svelte';

 export let finalidade: string = 'venda';
 export let tiposSelecionados: string[] = [];
 export let quartosMin: number = 0;
 export let banheirosMin: number = 0;
 export let totalResultados: number = 0;

 let isMobileOpen = false;

 const gruposTipos = [
     { titulo: 'Residencial', tipos: ['Casa', 'Apartamento', 'Sobrado', 'Kitnet', 'Terreno'] },
     { titulo: 'Comercial', tipos: ['Salão', 'Galpão', 'Sala', 'Prédio', 'Rural'] }
 ];

 // LOGICA PARA TRAVAR O BODY
 // Sempre que 'isMobileOpen' mudar, executamos esse bloco
 $: if (typeof document !== 'undefined') {
     if (isMobileOpen) {
         document.body.style.overflow = 'hidden';
     } else {
         document.body.style.overflow = 'auto';
     }
 }

 function toggleTipo(t: string) {
     const tipo = t.toLowerCase();
     if (tiposSelecionados.includes(tipo)) {
         tiposSelecionados = tiposSelecionados.filter(i => i !== tipo);
     } else {
         tiposSelecionados = [...tiposSelecionados, tipo];
     }
 }

 function limpar() {
     tiposSelecionados = [];
     quartosMin = 0;
     banheirosMin = 0;
 }
</script>

<!-- BOTÃO 1: Botão para abrir filtros mobile - JÁ TEM TEXTO, está OK -->
<div class="lg:hidden mb-6">
    <button
        on:click={() => isMobileOpen = true}
        class="w-full flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-lg shadow-sm active:bg-gray-50 transition-colors"
        aria-label="Abrir filtros de imóveis"
        >
        <span class="flex items-center gap-2 font-bold text-gray-700">
            <svg class="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
            Filtrar Imóveis
        </span>
        {#if tiposSelecionados.length > 0 || quartosMin > 0}
            <span class="bg-brand text-white text-xs font-bold px-2 py-1 rounded-full">Ativos</span>
        {/if}
        <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </button>
</div>

{#if isMobileOpen}
    <div
        class="fixed inset-0 z-[100] bg-white flex flex-col font-sans h-screen"
        transition:fly={{ y: 200, duration: 300 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
    >

        <div class="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white shrink-0">
            <button
                on:click={() => isMobileOpen = false}
                class="p-2 -ml-2 text-gray-500"
                aria-label="Fechar filtros"
                >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <h2 id="dialog-title" class="text-lg font-bold text-gray-900">Filtros</h2>

            <!-- BOTÃO 3: Botão Limpar - JÁ TEM TEXTO, está OK -->
            <button
                on:click={limpar}
                class="text-sm font-bold text-brand hover:underline"
                aria-label="Limpar todos os filtros"
            >
                Limpar
            </button>
        </div>

        <div class="flex-1 overflow-y-auto p-4 space-y-6">
            <FilterContent
                {gruposTipos}
                bind:finalidade
                bind:tiposSelecionados
                bind:quartosMin
                bind:banheirosMin
                {toggleTipo}
            />
        </div>

        <div class="border-t border-gray-100 p-4 bg-white shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <!-- BOTÃO 4: Botão para aplicar filtros - JÁ TEM TEXTO, está OK -->
            <button
                on:click={() => isMobileOpen = false}
                class="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-lg shadow-lg transition-all active:scale-[0.98]"
                aria-label="Aplicar filtros e ver {totalResultados} imóveis"
                >
                Ver {totalResultados} Imóveis
            </button>
        </div>
    </div>
{/if}

<div class="hidden lg:flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 sticky top-24 max-h-[calc(100vh-120px)]">
    <div class="flex justify-between items-center p-4 border-b border-gray-100 bg-white rounded-t-xl z-10">
        <h2 class="font-bold text-gray-900 text-base flex items-center gap-2">Filtros</h2>

        <!-- BOTÃO 5: Botão Limpar desktop - JÁ TEM TEXTO, está OK -->
        {#if tiposSelecionados.length > 0 || quartosMin > 0 || banheirosMin > 0}
            <button
                on:click={limpar}
                class="text-[10px] text-red-500 font-bold hover:underline uppercase tracking-wide"
                aria-label="Limpar todos os filtros"
            >
                LIMPAR
            </button>
        {/if}
    </div>

    <div class="p-4 overflow-y-auto custom-scrollbar">
        <FilterContent
            {gruposTipos}
            bind:finalidade
            bind:tiposSelecionados
            bind:quartosMin
            bind:banheirosMin
            {toggleTipo}
        />
    </div>
</div>

<style>
 .custom-scrollbar::-webkit-scrollbar { width: 4px; }
 .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
 .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
 .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
</style>
