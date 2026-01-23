<script lang="ts">
  import Header from '$lib/components/organisms/Header.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import './layout.css'; // Geralmente o Tailwind é importado aqui como app.css, mas se o seu for layout.css, mantenha.
</script>

<div class="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">

  <Header />

  <main class="flex-grow">
    <slot />
  </main>

  <Footer />

</div>
