<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import Tag from "$lib/components/tag.svelte";
	import github_green from "$lib/assets/icons/github-green.svg";
	import { Dot, Globe, Smartphone } from "lucide-svelte";

	let { data } = $props();

	const photos = import.meta.glob("$lib/assets/members/*", {
		eager: true,
		import: "default",
	});

	function get_photo(path: string) {
		const photo = photos[`/src/lib/assets${path}`];
		if (typeof photo !== "string") throw new Error("Invalid member photo path");
		return photo;
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
		<h2 class="font-fira text-xl text-kokoa-lime1">Autores</h2>
		<ul class="mt-2 flex flex-wrap gap-8">
			{#each data.project.authors as author (author.url_image)}
				<li class="flex items-center gap-1">
					<a href="../members/{author.slug}">
						<img
							class="size-8 rounded-full object-cover"
							src={get_photo(author.url_image)}
							alt={author.name}
							width="32"
							height="32"
						/>
					</a>
					<span class="font-fira">{author.name}</span>
				</li>
			{/each}
		</ul>
	</section>
	<section class="mt-8 rounded-2xl bg-neutral-800 p-8">
		<div class="flex flex-wrap items-center gap-1 font-fira">
			<span class="text-kokoa-lime1">{data.project.term}</span>
			<Dot />
			{#each data.project.categories as category (category)}
				<Tag {category} />
			{/each}
		</div>

		{@render subtitle("¿Qué es?")}
		<p class="mt-2 font-fira">
			{data.project.description}
		</p>

		{@render subtitle("¿Para qué sirve?")}
		<p class="mt-2 font-fira">
			{data.project.purpose}
		</p>

		{@render subtitle("¿Cómo lo hicimos?")}
		<p class="mt-2 font-fira">
			{data.project.how}
		</p>

		<div class="mt-6 flex flex-col gap-4">
			{#if data.project.github_url}
				<a class="flex gap-1 hover:underline" rel="external" href={data.project.github_url}>
					<img class="size-6" src={github_green} alt="" width="24" height="24" />
					{data.project.github_url}
				</a>
			{/if}

			{#if data.project.apk_url}
				<a class="flex gap-1 hover:underline" rel="external" href={data.project.apk_url}>
					<Smartphone class="size-6 text-kokoa-lime1" />
					App Móvil
				</a>
			{/if}

			{#if data.project.web_url}
				<a class="flex gap-1 hover:underline" rel="external" href={data.project.web_url}>
					<Globe class="size-6 text-kokoa-lime1" />
					Página Web
				</a>
			{/if}
		</div>
	</section>
</CenterContainer>
