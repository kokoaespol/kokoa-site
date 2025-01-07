<script lang="ts">
	import type { Snippet } from "svelte";
	import { twMerge } from "tailwind-merge";

	type Props = {
		class?: string;
		tag?: "div" | "section" | "article" | "main" | "nav";
		children: Snippet;
	};
	let { class: class_name, children, tag = "div" }: Props = $props();
</script>

<svelte:element this={tag} class={twMerge("mx-auto max-w-7xl px-6 md:px-8", class_name)}>
	{@render children()}
</svelte:element>
