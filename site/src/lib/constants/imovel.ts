// src/lib/constants/imovel.ts

// Definição dos valores em runtime (para usar em loops, filtros, selects)
export const TIPOS_IMOVEL = ['Casa', 'Apartamento', 'Salão Comercial', 'Barracão', 'Terreno'] as const;
export const FINALIDADES = ['Venda', 'Aluguel'] as const;

// Inferência dos tipos TypeScript a partir dos arrays (para tipagem segura)
export type TipoImovel = typeof TIPOS_IMOVEL[number];
export type FinalidadeImovel = typeof FINALIDADES[number];

// Helper opcional para verificar se um valor é válido
export function isValidTipo(value: string): value is TipoImovel {
    return TIPOS_IMOVEL.includes(value as TipoImovel);
}
export function isValidFinalidade(value: string): value is FinalidadeImovel {
    return FINALIDADES.includes(value as FinalidadeImovel);
}
