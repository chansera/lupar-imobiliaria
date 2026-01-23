<script lang="ts">
  export let href: string = '#';
  export let variant: 'primary' | 'outline' = 'primary';

  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-colors inline-block";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-50"
  };
</script>

<a {href} class="{baseClasses} {variants[variant]}">
  <slot />
</a>
