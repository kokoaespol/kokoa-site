<script lang="ts">
	import { MapPin } from "lucide-svelte";
	import Tag from "$lib/components/Tag.svelte";

	type Props = {
		name: string;
		description: string;
		date: string;
		place: string;
		category: string;
	};

	let { name, description, date, place, category }: Props = $props();
</script>

<div class="m-4 max-w-80 rounded-2xl bg-neutral-800 px-6 py-4">
	<div class="mb-4">
		<span class="font-fira font-medium text-lime-500">{date.replaceAll("/", "-")}</span>
		<h2 class="font-fira text-xl font-medium text-white">{name}</h2>
	</div>
	<Tag {category} />
	<p class="my-4">{description}</p>
	<div class="flex w-full flex-row justify-between">
		<div class="flex flex-row items-center">
			<MapPin />
			<span class="ml-2">
				{place}
			</span>
		</div>
		<button class="rounded-full bg-lime-500 px-2 font-fira text-sm font-semibold text-black">
			Ver más
		</button>
	</div>
</div>
