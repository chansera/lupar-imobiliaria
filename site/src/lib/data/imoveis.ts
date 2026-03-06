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
                alt: 'primeiro quarto ',
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
        cod: 'casa-vila-nova',
        titulo: 'Casa à Venda na Vila Nova',
        slug: 'casa-vila-nova',
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
        cod: 'casa-interlagos',
        titulo: 'Casa à Venda no Interlagos',
        slug: 'casa-interlagos',
        preco: 220_000,
        tipo: 'Casa',
        finalidade: 'Venda',
        cidade: 'Três Lagoas',
        bairro: 'Interlagos',
        quartos: 2,
        banheiros: 2,
        descricao: `• 01 sala\n• 02 quartos\n• 02 Banheiros\n• 01 Cozinha`,
        imagens: [
            {
                url: '/assets/images/imoveis/interlagos/casa1/capa.jpg',
                alt: 'Casa no Interlagos - Vista frontal',
                isCover: true
            }
        ]
    },
    {
        cod: 'terreno-santos-dumont',
        titulo: 'Terreno à Venda no Santos Dumont',
        slug: 'terreno-santos-dumont',
        preco: 320_000,
        tipo: 'Terreno',
        finalidade: 'Venda',
        cidade: 'Três Lagoas',
        bairro: 'Santos Dumont',
        areaTotal: 625,
        dimensao: '12,5 x 50',
        descricao: `• Terreno medindo 12,5 x 50\n• Área total de 625 m²`,
        imagens: [
            {
                url: '/assets/images/imoveis/santos-dumont/terrenos/terreno-1/capa.jpg',
                alt: 'Terreno no Santos Dumont - Vista do local',
                isCover: true
            }
        ]
    },
    {
        cod: 'apt-centro',
        titulo: 'Apartamento à Venda no Centro',
        slug: 'apt-centro',
        preco: 750_000,
        tipo: 'Apartamento',
        finalidade: 'Venda',
        cidade: 'Três Lagoas',
        bairro: 'Centro',
        quartos: 3,
        suites: 1,
        banheiros: 1,
        vagas: 2,
        descricao: `• 03 quartos, sendo 01 suíte\n• 01 Banheiro social\n• 01 lavabo\n• Sala\n• Cozinha\n• Sala de jantar\n• Lavanderia\n• 2 Vagas de garagem`,
        imagens: [
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/capa.jpg',
                alt: 'Apartamento no Centro - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/sala.jpeg',
                alt: 'Sala de estar',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/cozinha.jpeg',
                alt: 'Cozinha',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/quarto.jpeg',
                alt: 'Quarto principal',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/quarto2.jpeg',
                alt: 'Segundo quarto',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/suite.jpeg',
                alt: 'Suíte',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/banheiro.jpeg',
                alt: 'Banheiro social',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/banheiro suite.jpeg',
                alt: 'Banheiro da suíte',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/centro/apartamentos/apt-1/piscina.jpeg',
                alt: 'Área de piscina',
                isCover: false
            }
        ]
    },
    {
        cod: 'rancho-retiro-palmeiras',
        titulo: 'Rancho à Venda no Retiro das Palmeiras',
        slug: 'rancho-retiro-palmeiras',
        preco: 1_200_000, // TODO: preço não informado na mensagem do WhatsApp
        tipo: 'Rancho', // ⚠️ Ver observação abaixo sobre tipagem
        finalidade: 'Venda',
        cidade: 'Três Lagoas',
        bairro: 'Retiro das Palmeiras',
        quartos: 1, // TODO: confirmar se há mais quartos além da suíte
        suites: 1,
        banheiros: 2,
        areaConstruida: 200,
        areaTotal: 2000,
        dimensao: '20 x 100',
        descricao: `• 01 Suíte\n• 02 Banheiros Externos\n• Sala\n• Cozinha\n• Área Gourmet\n• Piscina\n• Portaria 24h`,
        imagens: [
            {
                url: '/assets/images/imoveis/ranchos/rancho-retiro-palmeiras/capa.jpg',
                alt: 'Rancho Retiro das Palmeiras - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/ranchos/rancho-retiro-palmeiras/churrasqueira.jpg',
                alt: 'Área gourmet com churrasqueira',
                isCover: false
            }
        ]
    },
    {
        cod: 'casa-sao-carlos',
        titulo: 'Casa para Venda no São Carlos',
        slug: 'casa-sao-carlos',
        preco: 280_000,
        tipo: 'Casa',
        finalidade: 'Venda', // ⚠️ Ver observação sobre "Locação e Venda" abaixo
        cidade: 'Três Lagoas',
        bairro: 'São Carlos',
        quartos: 4,
        suites: 1,
        banheiros: 2,
        vagas: 1, // Inferido da "Garagem coberta"
        areaConstruida: 0, // TODO: informar quando disponível
        descricao: `• 01 sala\n• 04 quartos, sendo uma suíte\n• 02 Banheiros\n• 01 Cozinha\n• Garagem coberta\n• Disponível para locação e venda`,
        imagens: [
            {
                url: '/assets/images/imoveis/sao-carlos/casa1/capa.jpg',
                alt: 'Casa no São Carlos - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/sao-carlos/casa1/suite.jpeg',
                alt: 'Suíte',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/sao-carlos/casa1/quarto.jpeg',
                alt: 'Quarto',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/sao-carlos/casa1/cozinha.jpeg',
                alt: 'Cozinha',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/sao-carlos/casa1/cozinha-angulo2.jpeg',
                alt: 'Cozinha - ângulo 2',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/sao-carlos/casa1/area-lazer.jpeg',
                alt: 'Área de lazer',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/sao-carlos/casa1/fundos-quintal.jpeg',
                alt: 'Fundos e quintal',
                isCover: false
            }
        ]
    },
    {
        cod: 'terrenos-vila-haro',
        titulo: '5 Terrenos à Venda na Vila Haro',
        slug: 'terrenos-vila-haro',
        preco: 55_000,
        tipo: 'Terreno',
        finalidade: 'Venda',
        cidade: 'Três Lagoas',
        bairro: 'Vila Haro',
        areaTotal: 324, // Valor base (padrão)
        dimensao: '12 x 27 (324m²) ou 14 x 27 (378m² esquina)',
        descricao: `• 5 terrenos disponíveis\n• 12 x 27 = 324m² (padrão)\n• 14 x 27 = 378m² (esquina)\n• Valor: R$ 55.000,00 cada`,
        imagens: [
            {
                url: '/assets/images/imoveis/vila-haro/terrenos/5-terrenos/5-terrenos-capa.jpeg',
                alt: 'Terrenos na Vila Haro - Vista do local',
                isCover: true
            }
        ]
    },
    {
        cod: 'terreno-village-do-lago',
        titulo: 'Terreno à Venda no Village do Lago',
        slug: 'terreno-village-do-lago',
        preco: 230_000,
        tipo: 'Terreno',
        finalidade: 'Venda',
        cidade: 'Três Lagoas',
        bairro: 'Village do Lago',
        areaTotal: 366,
        descricao: `• Terreno medindo 366 m²\n• Condomínio Village do Lago`,
        imagens: [
            {
                url: '/assets/images/imoveis/condominios/village-de-lago/terreno-venda/capa.jpg',
                alt: 'Terreno no Village do Lago - Vista do local',
                isCover: true
            }
        ]
    },
    {
        cod: 'casa-vila-nova-aluguel',
        titulo: 'Casa para Locação na Vila Nova',
        slug: 'casa-vila-nova-aluguel',
        preco: 1_500,
        tipo: 'Casa',
        finalidade: 'Aluguel',
        cidade: 'Três Lagoas',
        bairro: 'Vila Nova',
        quartos: 3,
        banheiros: 2,
        vagas: 1, // Inferido de "Garagem coberta"
        descricao: `• 03 quartos\n• 02 Banheiros\n• 01 Cozinha\n• Sala\n• Lavanderia\n• Garagem coberta\n\n🔑 Lupar Imobiliária\n📱 (67) 98467-9017 | ☎️ (67) 3521-3520\n📍 Rua Oscar Guimarães, 1067, Centro`,
        imagens: [
            {
                url: '/assets/images/imoveis/vila-nova/casa2/capa.jpeg',
                alt: 'Casa na Vila Nova para Aluguel - Vista frontal',
                isCover: true
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/sala.jpeg',
                alt: 'Sala de estar',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/cozinha.jpeg',
                alt: 'Cozinha',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/cozinha2.jpeg',
                alt: 'Cozinha - ângulo 2',
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
                url: '/assets/images/imoveis/vila-nova/casa2/areaExterna.jpeg',
                alt: 'Área externa',
                isCover: false
            },
            {
                url: '/assets/images/imoveis/vila-nova/casa2/quintal.jpeg',
                alt: 'Quintal',
                isCover: false
            }
        ]
    },
];
