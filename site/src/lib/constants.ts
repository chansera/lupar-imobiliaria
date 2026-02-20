export const SITE_INFO = {
    nome: 'Lupar Imobiliária',
    instagram: 'https://www.instagram.com/luparimobiliaria/',
    whatsapp: '5567984679017', // Número para a API (sem espaços)
    whatsappLabel: '(67) 984679017',
    telefoneFixo: '(67) 3521-3520',
    creci: 'MS-5430J',
    celularVisual: '(67) 98467-9017', // Para mostrar na tela
    endereco: 'Rua Dr. Oscar Guimarães, 1067, Centro, Três Lagoas 79600-020',
    email: 'administrativolupar@terra.com.br' // Ajuste se tiver o real
};

interface NavLink {
    name: string;
    href: string;
}
export const SITE_ROUTES: NavLink[] = [
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
