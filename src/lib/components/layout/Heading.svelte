<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();
</script>

<section class="heading-section my-8 flex h-[10rem] items-center">
	<div class="heading-container">
		<h1 class="ml-[5rem] flex items-center font-fira text-[2.5rem] font-bold text-black">
			{@render children()}
		</h1>
	</div>
</section>

<style>
	.heading-section {
		background-image: url("$lib/assets/forms/frame.svg");
		background-size: 100%;
	}
</style>
