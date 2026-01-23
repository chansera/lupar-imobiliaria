<script lang="ts">
  // Permite passar classes extras (ex: pb-20 para a última seção)
  let className = '';
  export { className as class };
</script>

<section class="bg-white py-12 {className}">
  <slot />
</section>
