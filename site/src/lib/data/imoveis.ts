// src/lib/data/imoveis.ts
import type { Imovel } from '$lib/types/Imovel';

export const imoveis: Imovel[] = [
    {
        cod: 'casa-paranapunga',
        titulo: 'Casa à Venda no Paranapungá',
        slug: 'casa-paranapunga',
        preco: 370_000,
        tipo: 'Casa',
        finalidade: 'Venda',
        bairro: 'Paranapungá',
        cidade: 'Três Lagoas',
        quartos: 3,
        suites: 1,
        banheiros: 2,
        vagas: 2,
        areaTotal: 400,
        areaConstruida: 167,
        descricao: `• 03 quartos, sendo 01 suíte\n• 02 Banheiros social\n• Sala\n• Cozinha\n• Lavanderia\n• Garagem coberta`,
        imagens: [
            {
                url: '/assets/images/imoveis/paranapunga/casa1/capa.jpeg',
                alt: 'Casa no Paranapungá - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/quarto1.jpeg',
                alt: 'Quarto 1 da casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/sala.jpeg',
                alt: 'Sala ampla com móveis',
                isCover: false
            },
            // Adicione todas as outras imagens seguindo o mesmo padrão
            {
                url: '/assets/images/imoveis/paranapunga/casa1/garagem.jpeg',
                alt: 'Garagem coberta',
                isCover: false
            }
        ]
    },
    // Repita o padrão para os outros imóveis
    {
        cod: 'barracao-br',
        titulo: 'Barracões em frente a BR-262',
        slug: 'barracao-br',
        preco: 8_000,
        tipo: 'Barracão',
        finalidade: 'Aluguel',
        bairro: 'Nova Três Lagoas',
        cidade: 'Três Lagoas',
        banheiros: 2,
        areaTotal: 442,
        descricao: `• 02 banheiros\n• 01 Copa\n• Espaço amplo\n• Portão basculante de 5,5m de altura\n• Ótima localização em frente a BR-262`,
        imagens: [
            {
                url: '/assets/images/imoveis/barracao-br/capa.jpeg',
                alt: 'Barracão em frente à BR-262',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/barracao-br/barracao.jpeg',
                alt: 'Interior do barracão',
                isCover: false
            }
        ]
    }
];
