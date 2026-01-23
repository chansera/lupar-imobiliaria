import type { Imovel } from '$lib/types/Property';

export const imoveis: Imovel[] = [
  {
    id: 1,
    titulo: 'Casa Moderna no Centro',     // Antes era 'title'
    preco: 'R$ 450.000',                  // Antes era 'price'
    tipo: 'Casa',                         // Novo campo obrigatório
    cidade: 'Três Lagoas',                // Novo campo (era 'location')
    bairros: 'Centro',
    area: 150,
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    finalidade: 'venda',
    imagem: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&w=800&q=80'
  },
  {
    id: 2,
    titulo: 'Apartamento de Luxo',
    preco: 'R$ 2.500/mês',
    tipo: 'Apartamento',
    cidade: 'Birigui',
    bairros: 'Jardins',
    area: 90,
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    finalidade: 'aluguel',
    imagem: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=800&q=80'
  },
  {
    id: 3,
    titulo: 'Terreno Comercial',
    preco: 'R$ 180.000',
    tipo: 'Terreno',
    cidade: 'Araçatuba',
    bairros: 'Distrito Industrial',
    area: 500,
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    finalidade: 'venda',
    imagem: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&w=800&q=80'
  }
];
