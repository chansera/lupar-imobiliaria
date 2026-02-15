import type { Imovel } from '$lib/types/Property';

export const imoveis: Imovel[] = [
    {
        id: 'casa-paranapunga',
        titulo: 'Casa à Venda no Paranapungá',
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
        devImagens: 'paranapunga/casa1'
    },
    {
        id: 'barracao-br',
        titulo: 'Barracões em frente a BR-262',
        preco: 8_000 ,
        tipo: 'Barracão',
        finalidade: 'Aluguel',
        bairro: 'Nova Três Lagoas',
        cidade: 'Três Lagoas',
        banheiros: 2,
        areaTotal: 442,
        descricao: `• 02 banheiros\n• 01 Copa\n• Espaço amplo\n• Portão basculante de 5,5m de altura\n• Ótima localização em frente a BR-262`,
        devImagens: 'barracao-br',
    },
    {
        id: 'apt-don-el-chall',
        titulo: 'Apartamento Don El Chall',
        preco:  2_500 ,
        tipo: 'Apartamento',
        finalidade: 'Aluguel',
        bairro: 'Jardim Alvorada',
        cidade: 'Três Lagoas',
        quartos: 3,
        suites: 1,
        banheiros: 1,
        descricao: `• 03 quartos, sendo 01 suíte\n• 01 banheiro social\n• Sala e Cozinha\n• Lavanderia\n• Sacada com churrasqueira\n Incluso condomínio e IPTU`,
        devImagens: 'apt-jdAlvorada',
    }
];
