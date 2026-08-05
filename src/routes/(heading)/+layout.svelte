<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/state";
	import CenterContainer from "$lib/components/center-container.svelte";
	import { use_i18n } from "$lib/i18n/use.js";
	import { fly } from "svelte/transition";

	let { children } = $props();

	const { t } = use_i18n();

	const heading = $derived(page.data.title_key ? t(page.data.title_key) : page.data.title);

	/** Arranca en false para que las barras decorativas entren animadas al montar. */
	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<div class="bg-linear-to-r/oklch from-kokoa-lime4 to-kokoa-lime3">
	<CenterContainer class="relative py-10 sm:py-12">
		<h1 class="flex text-3xl font-bold text-gray-950 uppercase sm:px-10 sm:text-4xl">
			{heading}
			<span class="ml-auto w-24 sm:w-56"></span>
		</h1>
		{#if mounted}
			<div
				class="absolute inset-y-0 right-10 w-5 bg-gray-950 sm:w-7"
				in:fly={{ x: 30, duration: 300, delay: 0 }}
			></div>
			<div
				class="absolute inset-y-0 right-16 w-5 bg-gray-950 sm:right-19 sm:w-7"
				in:fly={{ x: 30, duration: 300, delay: 40 }}
			></div>
			<div
				class="absolute inset-y-0 right-22 w-5 bg-gray-950 sm:right-28 sm:w-7"
				in:fly={{ x: 30, duration: 300, delay: 80 }}
			></div>
			<div
				class="absolute inset-y-0 right-37 hidden w-7 bg-gray-950 sm:block"
				in:fly={{ x: 30, duration: 300, delay: 120 }}
			></div>
			<div
				class="absolute inset-y-0 right-46 hidden w-7 bg-gray-950 sm:block"
				in:fly={{ x: 30, duration: 300, delay: 160 }}
			></div>
			<div
				class="absolute inset-y-0 right-55 hidden w-7 bg-gray-950 sm:block"
				in:fly={{ x: 30, duration: 300, delay: 200 }}
			></div>
			<div
				class="absolute inset-y-0 right-64 hidden w-7 bg-gray-950 sm:block"
				in:fly={{ x: 30, duration: 300, delay: 240 }}
			></div>
		{/if}
	</CenterContainer>
</div>
{@render children()}
