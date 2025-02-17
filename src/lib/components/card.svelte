<script lang="ts">
	import { MapPin } from "lucide-svelte";
	import Tag from "./tag.svelte";

	type Props = {
		route: string;
		date: string;
		name: string;
		categories: string[];
		description: string;
		place?: string;
	};

	let { route, date, name, categories, description, place }: Props = $props();
</script>

<li class="rounded-2xl bg-neutral-800 px-6 py-5">
	<article class="flex h-full flex-col">
		<span class="font-fira font-medium text-lime-500">{date}</span>
		<h2 class="font-fira text-xl font-medium">{name}</h2>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each categories as category}
				<Tag {category} />
			{/each}
		</div>
		<p class="mt-4 flex-1">{description}</p>
		<div class="mt-4 grid grid-flow-col items-center">
			<!-- TODO: Implement author's avatars -->
			<!-- {#each authors as author}
				<img src="https://via.placeholder.com/150" alt={author} class="h-4 w-4 rounded-full" />
			{/each} -->
			<div class="flex items-center gap-2">
				{#if place}
					<MapPin class="size-6" />
					<span class="flex-1">{place}</span>
				{/if}
			</div>
			<a
				href={route}
				class="inline-block w-fit justify-self-end rounded-full bg-lime-500 px-3 py-1 text-sm font-semibold text-gray-900 shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
			>
				Ver más
			</a>
		</div>
	</article>
</li>
