<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
</script>

<Header />
<main class="flex-1">
  <slot />
</main>
<Footer />
