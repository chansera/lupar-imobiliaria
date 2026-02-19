<script lang="ts">
	import { SITE_INFO, SITE_ROUTES } from '$lib/constants';
	import { page } from '$app/state';

	import logoImg from '$lib/assets/logo.png?enhanced';

	let currentPath = $derived(page.url.pathname);

	function isActive(href: string): boolean {
		if (href === '/' && currentPath === '/') return true;
		if (href !== '/' && currentPath.startsWith(href)) return true;
		return false;
	}
</script>

<footer class="mt-auto border-t border-gray-100 bg-white pt-16 font-sans text-gray-600">
	<div class="container mx-auto grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

		<div class="flex flex-col items-start">
			<a href="/" title="Hero Banner with Lupar logo " class="mb-4 inline-block transition-transform hover:scale-105">
				<enhanced:img src={logoImg} alt={SITE_INFO.nome} class="h-16 w-auto object-contain" />
			</a>
			<p class="mb-4 max-w-xs text-left text-sm leading-relaxed text-gray-500">
				Comprar, vender ou alugar, encontre o negócio ideal com a {SITE_INFO.nome}.
			</p>

			<div class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700 shadow-sm">
				<svg class="h-4 w-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
				</svg>
				<span>CRECI: {SITE_INFO.creci || '00000-J'}</span>
			</div>
		</div>

		<div>
			<h4 class="mb-5 text-sm font-bold uppercase tracking-wider text-violet-900">Navegação</h4>
			<ul class="space-y-3 text-sm">
				{#each SITE_ROUTES as link}
					<li>
						<a
							href={link.href}
							class="group relative inline-block transition-colors hover:text-violet-600
								{isActive(link.href) ? 'font-semibold text-violet-600' : ''}"
							aria-current={isActive(link.href) ? 'page' : undefined}
						>
							{link.name}
							{#if !isActive(link.href)}
								<span class="absolute bottom-0 left-0 h-0.5 w-0 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
							{:else}
								<span class="absolute bottom-0 left-0 h-0.5 w-full bg-violet-600"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h4 class="mb-5 text-sm font-bold uppercase tracking-wider text-violet-900">Contato</h4>
			<ul class="space-y-4 text-sm text-gray-500">
				<li class="flex items-center gap-3">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
						</svg>
					</div>
					<a href={`https://wa.me/55${SITE_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" class="font-medium hover:text-violet-600 transition-colors">
						{SITE_INFO.whatsapp}
					</a>
				</li>

				<li class="flex items-center gap-3">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect width="20" height="16" x="2" y="4" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<a href="mailto:{SITE_INFO.email || 'contato@lupar.com.br'}" class="hover:text-violet-600 transition-colors">
						{SITE_INFO.email || 'contato@lupar.com.br'}
					</a>
				</li>

				<li class="flex items-start gap-3">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
							<circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<span class="mt-1 leading-snug">Av. Exemplo, 123<br/>Três Lagoas - MS</span>
				</li>
			</ul>
		</div>

		<div>
			<h4 class="mb-5 text-sm font-bold uppercase tracking-wider text-violet-900">Siga-nos</h4>
			<a
				href="https://instagram.com/suaimobiliaria"
				target="_blank"
				rel="noopener noreferrer"
				title="Instagram da {SITE_INFO.nome}"
				class="group flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-violet-600"
			>
				<div class="flex h-10 w-10 shrink-0 transform items-center justify-center rounded-lg bg-gray-100 shadow-sm transition-all group-hover:-translate-y-1 group-hover:bg-violet-600 group-hover:text-white">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
					</svg>
				</div>
				<span class="font-medium">@suaimobiliaria</span>
			</a>
		</div>
	</div>

	<div class="mt-16 border-t border-gray-100 bg-gray-50 py-6">
		<div class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center text-xs text-gray-500 md:flex-row md:text-left">
			<p>&copy; {new Date().getFullYear()} {SITE_INFO.nome}. Todos os direitos reservados.</p>

			<div class="flex items-center gap-1 font-medium">
				Desenvolvido por <span class="font-bold text-gray-900">Você</span> 🚀
			</div>
		</div>
	</div>
</footer>
