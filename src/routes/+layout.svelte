<script lang="ts">
	import "../app.postcss";
	import { Toaster } from "svelte-sonner";
	import { page } from "$app/stores";

	let { children } = $props();
</script>

<svelte:head>
	<title>{$page.data.title} - KOKOA</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<Toaster richColors closeButton />
{@render children()}
