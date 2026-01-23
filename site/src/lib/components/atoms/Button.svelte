<script lang="ts">
  // Permite que você passe classes extras (ex: w-full, mt-4) quando usar o botão
  let className = '';
  export { className as class };

  export let href: string = '#';
  export let variant: 'primary' | 'outline' = 'primary';

  // Base: Flexbox (alinha ícones), Fonte Bold, Transição suave
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-200";

  const variants = {
    // Primary: Cor da marca + Sombra + Leve subida no hover
    primary: "bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",

    // Outline: Borda da marca + Fundo sutil no hover
    outline: "border-2 border-brand text-brand hover:bg-brand/5 hover:text-brand-dark"
  };
</script>

<a
  {href}
  class="{baseClasses} {variants[variant]} {className}"
  {...$$restProps}
>
  <slot />
</a>
