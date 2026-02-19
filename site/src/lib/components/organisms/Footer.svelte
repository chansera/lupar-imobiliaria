<script lang="ts">
 import { SITE_INFO, SITE_ROUTES } from '$lib/constants';
 import { page } from '$app/state';
 import logoImg from '$lib/assets/logo.png';

 // Função para verificar se a rota está ativa (mesma lógica do Header)
 function isActive(href: string): boolean {
     const currentPath = page.url.pathname;

     // Se for a home
     if (href === '/' && currentPath === '/') return true;

     // Para outras rotas, verifica se o path começa com o href
     if (href !== '/' && currentPath.startsWith(href)) return true;

     return false;
 }
</script>

<footer class="bg-white text-gray-600 py-12 border-t border-gray-100 mt-auto font-sans">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <!-- Logo e Descrição -->
        <div class="flex flex-col items-start">
            <a href="/">
                <img src={logoImg} alt={SITE_INFO.nome} class="h-24 w-auto object-contain" />
            </a>
            <p class="text-sm leading-relaxed text-gray-500 text-left max-w-xs mt-2">
                Comprar, vender ou alugar, procure a {SITE_INFO.nome}!
            </p>
        </div>

        <!-- Navegação -->
        <div>
            <h4 class="text-brand-dark font-bold mb-4 uppercase text-sm tracking-wider">Navegação</h4>
            <ul class="space-y-2 text-sm">
                {#each SITE_ROUTES as link}
                    <li>
                        <a
                            href={link.href}
                            class="relative inline-block group hover:text-brand transition-colors
                                 {isActive(link.href) ? 'text-brand font-semibold' : ''}"
                            aria-current={isActive(link.href) ? 'page' : undefined}
                        >
                            {link.name}
                            {#if !isActive(link.href)}
                                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                            {:else}
                                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand"></span>
                            {/if}
                        </a>
                    </li>
                {/each}
                <!-- Adicionando rotas extras comentadas -->
                {#if false} <!-- Remova esse bloco if quando quiser ativar -->
                    <li>
                        <a href="/sobre" class="relative inline-block group hover:text-brand transition-colors">
                            Sobre Nós
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/contato" class="relative inline-block group hover:text-brand transition-colors">
                            Contato
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                {/if}
            </ul>
        </div>

        <!-- Contato -->
        <div>
            <h4 class="text-brand-dark font-bold mb-4 uppercase text-sm tracking-wider">Contato</h4>
            <ul class="space-y-3 text-sm">
                <li class="flex items-center gap-2">
                    <svg class="text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <a href={`https://wa.me/${SITE_INFO.whatsapp}`} target="_blank" class="hover:text-brand transition-colors">
                        {SITE_INFO.whatsapp}
                    </a>
                </li>
                <li class="flex items-center gap-2">
                    <svg class="text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <a href="mailto:contato@lupar.com.br" class="hover:text-brand transition-colors">
                        contato@lupar.com.br
                    </a>
                </li>
                <li class="flex items-start gap-2">
                    <svg class="text-brand mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Av. Exemplo, 123<br/>Três Lagoas - MS</span>
                </li>
            </ul>
        </div>

        <!-- Redes Sociais -->
        <div>
            <h4 class="text-brand-dark font-bold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
            <div class="flex gap-4">
                {#each SITE_INFO.redesSociais as rede}
                    <a
                        href={rede.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={rede.nome}
                        class="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-brand hover:text-white transition-all shadow-sm transform hover:-translate-y-1"
                    >
                        {@html rede.icone}
                    </a>
                {/each}
            </div>
        </div>

    </div>

    <div class="container mx-auto px-4 mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} {SITE_INFO.nome}. Todos os direitos reservados.
    </div>
</footer>
