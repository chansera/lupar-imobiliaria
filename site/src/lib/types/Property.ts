export interface Imovel {
    id: number;
    titulo: string;
    preco: string;
    tipo: string; // 'Casa', 'Apartamento', 'Comercial', 'Terreno'
    cidade: string;
    bairro: string;
    descricao: string;
    regiao?: string;

    // Detalhes Residencial
    quartos?: number;
    suites?: number;     // Novo
    banheiros?: number;
    vagas?: number;
    areaConstruida?: number; // Novo (m²)

    // Detalhes Terreno/Comercial
    areaTotal?: number;       // Novo (m²) - Essencial para terrenos
    dimensao?: string;       // Ex: "10x40"

    capa : string;
    galeria?: string[];
    finalidade: 'venda' | 'aluguel';
    destaque?: boolean;
}
