<script lang="ts">
	import { page } from "$app/state";
	import Footer from "$lib/components/layout/footer.svelte";
	import Navbar from "$lib/components/layout/navbar.svelte";
	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title || page.status} - KOKOA</title>
	<meta name="description" content={page.data.description} />
</svelte:head>

<Navbar />
<main class="flex-1">
	{@render children()}
</main>
<Footer />
