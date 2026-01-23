<!-- src/lib/components/ui/Button.svelte -->
<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled = false;

  $: baseClasses = 'font-semibold rounded transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  $: sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }[size];

  $: variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 focus:ring-gray-500'
  }[variant];
</script>

<button
  class="{baseClasses} {sizeClasses} {variantClasses}"
  disabled={disabled}
>
  <slot />
</button>
