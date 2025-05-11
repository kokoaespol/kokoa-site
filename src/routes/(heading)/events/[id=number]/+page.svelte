<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import Tag from "$lib/components/tag.svelte";
	import instagram from "$lib/assets/icons/instagram-green.svg";
	import { Dot, Globe } from "lucide-svelte";

	let { data } = $props();

	const images = import.meta.glob("$lib/assets/events/*", {
		eager: true,
		import: "default",
	});

	function get_image(path: string) {
		if (path.startsWith("http")) {
			return path;
		}
		const image = images[`/src/lib/assets${path}`];
		if (typeof image !== "string") throw new Error("Invalid event image path");
		return image;
	}
</script>

{#snippet subtitle(text: string)}
	<h2 class="mt-4 flex items-center gap-1 text-3xl font-bold">
		<span aria-hidden="true" class="text-kokoa-lime1 italic">#</span>
		{text}
	</h2>
{/snippet}

<CenterContainer class="py-12">
	<section>
		<h2 class="font-fira text-xl text-kokoa-lime1">Evento</h2>
		<div class="mt-2 flex flex-wrap gap-8">
			<span class="font-fira">{data.event.name}</span>
		</div>
	</section>
	<section class="mt-8 rounded-2xl bg-neutral-800 p-8">
		<div class="flex flex-wrap items-center gap-1 font-fira">
			<span class="text-kokoa-lime1">{data.event.date}</span>
			<Dot />
			{#each data.event.categories as category (category)}
				<Tag {category} />
			{/each}
		</div>

		<img
			src={get_image(data.event.image)}
			alt={`Imagen del evento ${data.event.name}`}
			class="mt-4 max-h-50 rounded-lg shadow-lg shadow-gray-900"
		/>

		{@render subtitle("¿De qué trata?")}
		<p class="mt-2 font-fira">
			{data.event.description}
		</p>

		{@render subtitle("¿Dondé es?")}
		<p class="mt-2 font-fira">
			{data.event.place}
		</p>

		{@render subtitle("¿Más información?")}
		<p class="mt-2 font-fira">
			Si quieres saber más sobre el evento, puedes seguir a los organizadores en sus redes sociales.
			<br />
		</p>

		<div class="mt-6 flex flex-col gap-4">
			{#if data.event.web_url}
				<a class="flex gap-1 font-fira hover:underline" rel="external" href={data.event.web_url}>
					<Globe class="size-6 text-kokoa-lime1" />
					{data.event.web_page}
				</a>
			{/if}

			{#if data.event.instagram_url}
				<a
					class="flex gap-1 font-fira hover:underline"
					rel="external"
					href={data.event.instagram_url}
				>
					<img src={instagram} alt="Instagram" class="size-6" width="24" height="24" />
					{data.event.instagram_username}
				</a>
			{/if}
		</div>
	</section>
</CenterContainer>
