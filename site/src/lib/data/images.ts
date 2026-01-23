// 1. Importa TODAS as imagens JPG da pasta imoveis de forma otimizada (?enhanced)
// O parâmetro 'eager: true' carrega elas no build, e não só quando clica (bom para SEO)
const todasImagens = import.meta.glob('$lib/assets/imoveis/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: { enhanced: true }
});

// 2. Função auxiliar para pegar a capa
export function getCapa(pasta: string) {
  // Procura por algo como .../1-paranapunga/capa.jpg
  const path = Object.keys(todasImagens).find(path => path.includes(`${pasta}/capa`));
  return path ? todasImagens[path].default : null;
}

// 3. Função auxiliar para pegar a galeria completa
export function getGaleria(pasta: string) {
  // Filtra todas as imagens que estão dentro daquela pasta específica
  return Object.keys(todasImagens)
    .filter(path => path.includes(`/${pasta}/`))
    .map(path => todasImagens[path].default);
}
