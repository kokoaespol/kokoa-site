<script lang="ts">
	import { page } from "$app/state";
	import CenterContainer from "$lib/components/center-container.svelte";

	let { children } = $props();
</script>

<div class="bg-linear-to-r/oklch from-kokoa-lime4 to-kokoa-lime3">
	<CenterContainer class="relative py-10 sm:py-12">
		<h1 class="flex text-3xl font-bold text-gray-950 uppercase sm:px-10 sm:text-4xl">
			{page.data.title}
			<span class="ml-auto w-24 sm:w-56"></span>
		</h1>
		<div class="absolute inset-y-0 right-10 w-5 bg-gray-950 sm:w-7"></div>
		<div class="absolute inset-y-0 right-16 w-5 bg-gray-950 sm:right-19 sm:w-7"></div>
		<div class="absolute inset-y-0 right-22 w-5 bg-gray-950 sm:right-28 sm:w-7"></div>
		<div class="absolute inset-y-0 right-37 hidden w-7 bg-gray-950 sm:block"></div>
		<div class="absolute inset-y-0 right-46 hidden w-7 bg-gray-950 sm:block"></div>
		<div class="absolute inset-y-0 right-55 hidden w-7 bg-gray-950 sm:block"></div>
		<div class="absolute inset-y-0 right-64 hidden w-7 bg-gray-950 sm:block"></div>
	</CenterContainer>
</div>
{@render children()}
