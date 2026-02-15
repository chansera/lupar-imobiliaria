import type { ImovelImage } from "./Image";
type Finalidade = 'Venda' | 'Aluguel'
type Tipos = 'Casa' | 'Apartamento'| 'Salão Comercial' | 'Barracão' | 'Terreno'

export interface Imovel {
    // Detalhes ímoveis
    id: string;
    titulo: string;
    preco: number;
    tipo: Tipos; // 'Casa', 'Apartamento', 'Comercial', 'Terreno'
    finalidade: Finalidade;
    cidade: string;
    bairro: string;
    descricao: string;
    regiao?: string;

    //Detalhes Fotos
    imagens: ImovelImage[];

    // Detalhes Residencial
    quartos?: number;
    suites?: number;     
    banheiros?: number;
    vagas?: number;
    areaConstruida?: number; // Novo (m²)

    // Detalhes Terreno/Comercial
    areaTotal?: number;       // Novo (m²) - Essencial para terrenos /
    dimensao?: string;       // Ex: "10x40"
    destaque?: boolean;
}
