<script lang="ts">
	import "./layout.css";
	import { page } from "$app/state";
	import Footer from "$lib/components/layout/footer.svelte";
	import Navbar from "$lib/components/layout/navbar.svelte";
	import { fade } from "svelte/transition";

	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title || page.status} - KOKOA</title>
	<meta name="description" content={page.data.description} />
</svelte:head>

<Navbar />
<main class="flex-1">
	{#key page.url.pathname}
		<div in:fade={{ duration: 150 }}>
			{@render children()}
		</div>
	{/key}
</main>
<Footer />
