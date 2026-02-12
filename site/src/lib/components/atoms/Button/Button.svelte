<script lang="ts">
    import type { ButtonProps } from './Button.type';

    let {
        href,
        variant,
        arialabel,
        className = '',
        children,
        ...rest              // Captura onclick, type="submit", id, etc.
    }: ButtonProps = $props();

    // Lógica de classes unificada (Tailwind friendly)
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700', // Exemplo
        outline: 'border-2 border-blue-600 text-blue-600',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
    };

    // Derivação de estado (Svelte 5 Runes)
const fixedBase = "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg focus:outline-none focus:ring-4 transition-colors duration-200";
const finalClass = $derived(`${fixedBase} ${variants[variant]} ${className}`.trim());
</script>

{#if href}
    <a
        {href}
        class={finalClass}
        aria-label={arialabel}
        {...rest}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        class={finalClass}
        aria-label={arialabel}
        {...rest}
    >
        {@render children?.()}
    </button>
{/if}
