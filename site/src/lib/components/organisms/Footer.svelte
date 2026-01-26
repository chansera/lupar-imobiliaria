<script>
 import { SITE_INFO } from '$lib/constants';
 import logoImg from '$lib/assets/logo.jpg';
</script>

<footer class="bg-white text-gray-600 py-12 border-t border-gray-100 mt-auto font-sans">
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

    <div class="flex flex-col items-start">
      <img src={logoImg} alt="Lupar" class="h-16 w-auto mb-5 object-contain" />

      <p class="text-sm leading-relaxed text-gray-500 text-left max-w-xs">
         Comprar, vender ou alugar, procure a Lupar!
      </p>
    </div>

    <div>
      <h4 class="text-brand-dark font-bold mb-4 uppercase text-sm tracking-wider">Navegação</h4>
      <ul class="space-y-2 text-sm">
        <li>
          <a href="/" class="relative inline-block group hover:text-brand transition-colors">
            Início
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="/imoveis" class="relative inline-block group hover:text-brand transition-colors">
            Imóveis
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
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
      </ul>
    </div>

    <div>
      <h4 class="text-brand-dark font-bold mb-4 uppercase text-sm tracking-wider">Contato</h4>
      <ul class="space-y-3 text-sm">
        <li class="flex items-center gap-2">
          <svg class="text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>{SITE_INFO.whatsapp}</span>
        </li>
        <li class="flex items-center gap-2">
          <svg class="text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>contato@lupar.com.br</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="text-brand mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Av. Exemplo, 123<br/>Birigui - SP</span>
        </li>
      </ul>
    </div>

    <div>
      <h4 class="text-brand-dark font-bold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
      <div class="flex gap-4">
        <a href="/" title="Instagram" class="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-brand hover:text-white transition-all shadow-sm transform hover:-translate-y-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="/" title= "Facebook" class="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-brand hover:text-white transition-all shadow-sm transform hover:-translate-y-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
      </div>
    </div>

  </div>

  <div class="container mx-auto px-4 mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
    &copy; {new Date().getFullYear()} Lupar Imobiliária. Todos os direitos reservados.
  </div>
</footer>
