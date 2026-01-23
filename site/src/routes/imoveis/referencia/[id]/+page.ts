import { error } from '@sveltejs/kit';
import { imoveis } from '$lib/data/imoveis';
import type { PageLoad } from './$types'; // Adicione esta linha

export const load: PageLoad = ({ params }) => {
    const idParam = Number(params.id);

    const imovel = imoveis.find((i) => i.id === idParam);

    if (!imovel) {
        throw error(404, 'Imóvel não encontrado');
    }

    return { imovel };
};
