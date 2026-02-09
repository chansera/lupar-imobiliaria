// src/lib/data/images.ts

const todasImagens = import.meta.glob('$lib/assets/images/imoveis/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: { enhanced: true  }
});

export function getCapa(pasta: string) {
  // Procura por 'capa' dentro do caminho da pasta
  const path = Object.keys(todasImagens).find(path => path.includes(`${pasta}/capa.`));

  if (!path) {
    console.warn(`⚠️ Capa não encontrada para a pasta: ${pasta}`);
    return null;
  }

  return (todasImagens[path] as any).default;
}

export function getGaleria(pasta: string) {
  const busca = `/${pasta}/`.toLowerCase();

  return Object.keys(todasImagens)
    .filter(path => path.toLowerCase().includes(busca))
    .sort((a, b) => {
      const pathA = a.toLowerCase();
      const pathB = b.toLowerCase();

      // REGRA DE OURO: Se tiver "capa" no nome, joga para o início (-1)
      if (pathA.includes('capa.')) return -1;
      if (pathB.includes('capa.')) return 1;

      // Opcional: Se quiser que 'sala' venha logo depois da capa, pode adicionar:
      // if (pathA.includes('sala.')) return -1;
      // if (pathB.includes('sala.')) return 1;

      // Para o resto, usa ordem alfabética normal
      return pathA.localeCompare(pathB);
    })
    .map(path => (todasImagens[path] as any).default);
}
