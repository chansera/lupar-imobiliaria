// src/lib/types/Imovel.ts
import type { ImovelImage } from "./Image";

export type Finalidade = 'Venda' | 'Aluguel';

// 1. Fragmentamos os tipos por domínio
export type TipoResidencial = 'Casa' | 'Apartamento';
export type TipoComercial = 'Salão Comercial' | 'Barracão';
export type TipoTerreno = 'Terreno';

// 2. O TipoImovel passa a ser a composição deles (agora ele tem utilidade!)
export type TipoImovel = TipoResidencial | TipoComercial | TipoTerreno;

interface ImovelBase {
    cod: string;
    slug: string;
    titulo: string;
    preco: number;
    finalidade: Finalidade;
    cidade: string;
    bairro: string;
    descricao: string;
    regiao?: string;
    imagens?: ImovelImage[];
    devImagens?: string;
    destaque?: boolean;
}

export interface ImovelResidencial extends ImovelBase {
    tipo: TipoResidencial; // Usando o tipo fragmentado aqui
    quartos: number;
    suites?: number;
    banheiros: number;
    vagas?: number;
    areaConstruida: number;
    areaTotal?: number;
}

export interface ImovelComercial extends ImovelBase {
    tipo: TipoComercial; // Usando o tipo fragmentado aqui
    banheiros?: number;
    vagas?: number;
    areaConstruida: number;
    areaTotal: number;
}

export interface ImovelTerreno extends ImovelBase {
    tipo: TipoTerreno; // Usando o tipo fragmentado aqui
    areaTotal: number;
    dimensao?: string;
}

export type Imovel = ImovelResidencial | ImovelComercial | ImovelTerreno;
