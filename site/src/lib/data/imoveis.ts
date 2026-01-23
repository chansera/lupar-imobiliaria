import { getCapa, getGaleria } from './images';

export const imoveis = [
  {
    id: 1,
    titulo: 'Casa à Venda no Paranapungá',
    preco: 'R$ 370.000,00',
    tipo: 'Casa',
    finalidade: 'venda',
    categoria: 'residencial',
    bairros: 'Paranapungá',
    cidade: 'Três Lagoas',
    quartos: 3,
    suites: 1,
    banheiros: 2,
    vagas: 2,
    areaTotal: 400,
    areaConstruida: 167,
    descricao: `• 03 quartos, sendo 01 suíte\n• 02 Banheiros social\n• Sala\n• Cozinha\n• Lavanderia\n• Garagem coberta`,
    imagem: getCapa('paranapunga/casa1'),
    galeria: getGaleria('paranapunga/casa1')
  },
  {
    id: 2,
    titulo: 'Barracões em frente a BR-262',
    preco: 'R$ 8.000,00 (cada)',
    tipo: 'Barracão',
    finalidade: 'aluguel',
    categoria: 'comercial',
    bairros: 'Nova Três Lagoas',
    cidade: 'Três Lagoas',
    banheiros: 2,
    areaTotal: 442,
    descricao: `• 02 banheiros\n• 01 Copa\n• Espaço amplo\n• Portão basculante de 5,5m de altura\n• Ótima localização em frente a BR-262`,
    imagem: getCapa('barracao-br'),
    galeria: getGaleria('barracao-br')
  },
  {
    id: 3,
    titulo: 'Apartamento Don El Chall',
    preco: 'R$ 2.500,00',
    tipo: 'Apartamento',
    finalidade: 'aluguel',
    categoria: 'residencial',
    complementoPreco: 'Incluso condomínio e IPTU',
    bairros: 'Jardim Alvorada',
    cidade: 'Três Lagoas',
    quartos: 3,
    suites: 1,
    banheiros: 1,
    descricao: `• 03 quartos, sendo 01 suíte\n• 01 banheiro social\n• Sala e Cozinha\n• Lavanderia\n• Sacada com churrasqueira`,
    imagem: getCapa('apt-jdAlvorada'),
    galeria: getGaleria('apt-jdAlvorada')
  }
];
