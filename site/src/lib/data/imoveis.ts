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
                url: '/assets/images/imoveis/paranapunga/casa1/exterior.jpeg',
                alt: 'Vista externa da casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/entrada.jpeg',
                alt: 'Entrada da casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/sala1.jpeg',
                alt: 'Sala 1',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/sala2.jpeg',
                alt: 'Sala 2',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/cozinha.jpeg',
                alt: 'Cozinha da Casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/lavanderia.jpeg',
                alt: 'Lavanderia',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/interior.jpeg',
                alt: 'Primeiro quarto',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/quarto2.jpeg',
                alt: 'Segundo quarto',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/suite.jpeg',
                alt: 'Suíte',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/banheiro.jpeg',
                alt: 'Banheiro social',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/banheiro2.jpeg',
                alt: 'Segundo banheiro',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/garagem.jpeg',
                alt: 'Garagem coberta',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/corredor.jpeg',
                alt: 'Corredor',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/fundo.jpeg',
                alt: 'Fundo da Casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/paranapunga/casa1/area.jpeg',
                alt: 'Área externa',
                isCover: false
            },
        ]
    },
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
    },
    {
        cod: 'salao-comercial-centro',
        titulo: 'Salão Comercial no Centro',
        slug: 'salao-comercial-centro',
        preco: 3_000,
        tipo: 'Salão Comercial',
        finalidade: 'Aluguel',
        bairro: 'Centro',
        cidade: 'Três Lagoas',
        banheiros: 1,
        areaTotal: 100,
        areaConstruida: 100,
        descricao: `• 03 salas amplas\n• 01 Banheiro\n• Ao lado da Caixa Econômica Federal\n• Ótima localização`,
        imagens: [
            {
                url: '/assets/images/imoveis/salao-centro/capa.jpeg',
                alt: 'Salão Comercial no Centro - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/salao-centro/sala1.jpeg',
                alt: 'Sala 1 do salão comercial',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/salao-centro/sala2.jpeg',
                alt: 'Sala 2 do salão comercial',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/salao-centro/sala3.jpeg',
                alt: 'Sala 3 do salão comercial',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/salao-centro/banheiro.jpeg',
                alt: 'Banheiro do salão',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/salao-centro/escada.jpeg',
                alt: 'Escada de acesso',
                isCover: false
            }
        ]
    },
    {
        cod: 'casa-santo-andre',
        titulo: 'Casa à Venda no Santo André',
        slug: 'casa-santo-andre',
        preco: 290_000,
        tipo: 'Casa',
        finalidade: 'Venda',
        bairro: 'Santo André',
        cidade: 'Três Lagoas',
        quartos: 3,
        suites: 1,
        banheiros: 2,
        areaTotal: 500,
        areaConstruida: 120,
        descricao: `• 03 quartos, sendo 01 suíte\n• 02 Banheiros social\n• Sala\n• Cozinha\n• Lavanderia\n• Quintal amplo\n• Terreno 10x50 (500m²)`,
        imagens: [
            {
                url: '/assets/images/imoveis/casa-santo-andre/capa.jpeg',
                alt: 'Casa no Santo André - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/sala.jpeg',
                alt: 'Sala da casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/cozinha.jpeg',
                alt: 'Cozinha da casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/quarto.jpeg',
                alt: 'Quarto principal',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/quarto1.jpeg',
                alt: 'Quarto 1',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/quarto2.jpeg',
                alt: 'Quarto 2',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/quarto3.jpeg',
                alt: 'Quarto 3',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/banheiro.jpeg',
                alt: 'Banheiro',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/garagem.jpeg',
                alt: 'Garagem',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/corredor.jpeg',
                alt: 'Corredor',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/casa-santo-andre/fundo.jpeg',
                alt: 'Fundo da casa',
                isCover: false
            }
        ]
    },
    {
        cod: 'casa-vila-nova-150k',
        titulo: 'Casa à Venda na Vila Nova (150k)',
        slug: 'casa-vila-nova-150k',
        preco: 150_000,
        tipo: 'Casa',
        finalidade: 'Venda',
        bairro: 'Vila Nova',
        cidade: 'Três Lagoas',
        quartos: 1,
        banheiros: 1,
        areaTotal: 250,
        areaConstruida: 70,
        descricao: `• 01 sala conjugada com cozinha\n• 01 quarto\n• 01 Banheiro\n• Área com churrasqueira\n• Terreno 10x25 (250m²)`,
        imagens: [
            {
                url: '/assets/images/imoveis/vila-nova/casa1/capa.jpeg',
                alt: 'Casa na Vila Nova - Vista frontal',
                isCover: true
            }
        ]
    },
    {
        cod: 'casa-vila-nova-300k',
        titulo: 'Casa à Venda na Vila Nova (300k)',
        slug: 'casa-vila-nova-300k',
        preco: 300_000,
        tipo: 'Casa',
        finalidade: 'Venda',
        bairro: 'Vila Nova',
        cidade: 'Três Lagoas',
        quartos: 3,
        banheiros: 2,
        vagas: 1,
        areaTotal: 250,
        areaConstruida: 100,
        descricao: `• 03 quartos\n• 02 Banheiros\n• 01 Cozinha\n• Sala\n• Lavanderia\n• Garagem coberta`,
        imagens: [
            {
                url: '/assets/images/imoveis/vila-nova/casa2/capa.jpeg',
                alt: 'Casa na Vila Nova 300k - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/sala.jpeg',
                alt: 'Sala da casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/cozinha.jpeg',
                alt: 'Cozinha da casa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/cozinha2.jpeg',
                alt: 'Cozinha - ângulo alternativo',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/quarto.jpeg',
                alt: 'Quarto principal',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/quarto2.jpeg',
                alt: 'Segundo quarto',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/banheiro.jpeg',
                alt: 'Banheiro',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/quintal.jpeg',
                alt: 'Quintal',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/areaExterna.jpeg',
                alt: 'Área externa',
                isCover: false
            }
        ]
    }
];
