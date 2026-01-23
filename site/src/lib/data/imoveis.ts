import type { Imovel } from '$lib/types/Property';

export const imoveis: Imovel[] = [
  {
    id: 1,
    titulo: 'Casa à Venda no Paranapunga',
    preco: 'R$ 370.000,00',
    tipo: 'Casa',
    cidade: 'Três Lagoas',
    bairros: 'Paranapunga',

    // Dados do seu exemplo
    areaTotal: 400,
    dimensao: '10 x 40',
    areaConstruida: 167,
    quartos: 3,
    suites: 1,
    banheiros: 2,
    vagas: 2, // Garagem coberta

    finalidade: 'venda',
    destaque: true,
    imagem: 'https://images.unsplash.com/photo-1600596542815-9ad4dc7553e3?ixlib=rb-4.0.3&w=800&q=80'
  },
  {
    id: 2,
    titulo: 'Salão Comercial Centro',
    preco: 'R$ 3.500/mês',
    tipo: 'Comercial',
    cidade: 'Três Lagoas',
    bairros: 'Centro',

    areaTotal: 200,
    areaConstruida: 200,
    banheiros: 2,

    finalidade: 'aluguel',
    destaque: true,
    imagem: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=800&q=80'
  },
  {
    id: 3,
    titulo: 'Terreno de Esquina',
    preco: 'R$ 180.000,00',
    tipo: 'Terreno',
    cidade: 'Três Lagoas',
    bairros: 'Jardim Alvorada',

    areaTotal: 360,
    dimensao: '12 x 30',

    finalidade: 'venda',
    destaque: false,
    imagem: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&w=800&q=80'
  },
  {
    id: 4,
    titulo: 'Apartamento Mobiliado',
    preco: 'R$ 2.200/mês',
    tipo: 'Apartamento',
    cidade: 'Três Lagoas',
    bairros: 'Lapa',

    areaTotal: 80,
    areaConstruida: 80,
    quartos: 2,
    suites: 0,
    banheiros: 1,
    vagas: 1,

    finalidade: 'aluguel',
    destaque: true,
    imagem: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&w=800&q=80'
  }
];
