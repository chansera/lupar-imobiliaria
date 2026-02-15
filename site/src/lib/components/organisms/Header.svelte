<script lang="ts">
 import { slide } from 'svelte/transition';
 import { SITE_INFO, SITE_ROUTES,ACTIVE_PATH_PATTERNS } from '$lib/constants';
 import logoImg from '$lib/assets/logo.png';

 let {isMenuOpen = false} = $props();

 function toggleMenu() {
     isMenuOpen = !isMenuOpen;
 }

 function closeMenu() {
     isMenuOpen = false;
 }

</script>

<header class="relative z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 font-sans">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">

            <a href="/" class=" flex items-center gap-2.5 lg:ml-20" onclick={closeMenu}>
                <img
                    src={logoImg}
                    alt={SITE_INFO.nome}
                    class="h-20 w-auto object-contain ml-2"
                />
            </a>

            <nav class="hidden md:flex items-center gap-8 ">
                {#each SITE_ROUTES as link}
                    <a
                        href={link.href}
                        class="text-sm font-bold uppercase tracking-wide transition-all relative py-2
                             {ACTIVE_PATH_PATTERNS === link.href ? 'text-brand' : 'text-gray-500 hover:text-brand'}"
                    >
                        {link.name}
                        {#if ACTIVE_PATH_PATTERNS === link.href}
                            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full" transition:slide></span>
                        {/if}
                    </a>
                {/each}
            </nav>

            <div class="flex items-center gap-4 mr-20">

                <a
                    href="https://wa.me/{SITE_INFO.whatsapp}"
                    target="_blank"
                    class="hidden md:flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span class="inline">WhatsApp</span>
                </a>

                <button
                    class="md:hidden p-2 text-gray-700 hover:bg-brand/10 hover:text-brand rounded-lg transition-colors"
                    onclick={toggleMenu}
                >
                    {#if isMenuOpen}
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    {:else}
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    {/if}
                </button>
            </div>

        </div>
    </div>

    {#if isMenuOpen}
        <div
            class="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl py-4 px-4 flex flex-col gap-2 z-50"
            transition:slide={{ duration: 300 }}
            style="max-height: calc(100vh - 80px); overflow-y: auto;"
        >
            {#each SITE_ROUTES as link}
                <a
                    href={link.href}
                    class="block py-3 px-4 rounded-lg font-bold text-gray-700 hover:bg-brand/5 hover:text-brand transition-colors
                         {ACTIVE_PATH_PATTERNS === link.href ? 'bg-brand/5 text-brand' : ''}"
                    onclick={closeMenu}
                >
                    {link.name}
                </a>
            {/each}

            <div class="border-t border-gray-100 my-2 pt-2"></div>

            <a
                href="https://wa.me/{SITE_INFO.whatsapp}"
                target="_blank"
                class="flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white py-3 rounded-lg font-bold w-full transition-colors shadow-lg shadow-brand/20"
                onclick={closeMenu}
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Falar no WhatsApp
            </a>
        </div>
    {/if}

</header>
