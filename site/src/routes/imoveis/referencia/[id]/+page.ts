// src/routes/imoveis/referencia/[id]/+page.ts
import { error } from '@sveltejs/kit';
import { imoveis } from '$lib/data/imoveis';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	// Procura o imóvel pelo "cod" ou "slug" que vier na URL
	const imovel = imoveis.find((i) => i.cod === params.id || i.slug === params.id);

	if (!imovel) {
		throw error(404, 'Imóvel não encontrado');
	}

	return { imovel };
};
