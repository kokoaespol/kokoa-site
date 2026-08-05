<script lang="ts">
	import type { Pathname } from "$app/types";
	import { MapPin } from "@lucide/svelte";
	import { reveal, REVEAL_CLASS } from "$lib/actions/reveal.js";
	import { use_i18n } from "$lib/i18n/use.js";
	import { CARD_LIFT_CLASS } from "$lib/styles.js";
	import Tag from "./tag.svelte";

	type Props = {
		route: Pathname;
		date: string;
		name: string;
		categories: string[];
		description: string;
		place?: string;
		delay?: number;
	};

	let { route, date, name, categories, description, place, delay = 0 }: Props = $props();

	const { href } = use_i18n();
</script>

<li use:reveal={{ delay }} class={REVEAL_CLASS}>
	<a href={href(route)} class="block h-full rounded-2xl bg-neutral-800 px-6 py-5 {CARD_LIFT_CLASS}">
		<article class="flex h-full flex-col">
			<span class="font-fira font-medium text-kokoa-lime1">{date}</span>
			<h2 class="font-fira text-xl font-medium">{name}</h2>
			<div class="mt-4 flex flex-wrap gap-2">
				{#each categories as category (category)}
					<Tag {category} />
				{/each}
			</div>
			<p class="mt-4 flex-1">{description}</p>
			{#if place}
				<div class="mt-4 flex items-center gap-2">
					<MapPin class="size-6" />
					<span class="flex-1">{place}</span>
				</div>
			{/if}
		</article>
	</a>
</li>
