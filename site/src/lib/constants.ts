export const SITE_INFO = {
  nome: 'Lupar Imobiliária',
  whatsapp: '5567984679017', // Número para a API (sem espaços)
  telefoneFixo: '(67) 3521-3520',
  celularVisual: '(67) 98467-9017', // Para mostrar na tela
  endereco: 'Rua Oscar Guimarães, 1067, Centro',
  email: 'contato@lupar.com.br' // Ajuste se tiver o real
};

 export const SITE_ROUTES: NavLInk[] = [
     { name: 'Início', href: '/' },
     { name: 'Imóveis', href: '/imoveis' },
//   { name: 'Sobre', href: '/sobre' },
//   { name: 'Contato', href: '/contato' }
 ] as const;

export const ACTIVE_PATH_PATTERNS: Record<string, RegExp[]> = {
  '/imoveis': [
    /^\/imoveis$/,
    /^\/imoveis\/.*/ // Para capturar subrotas como /imoveis/123
  ],
  '/': [/^\/$/]
};
