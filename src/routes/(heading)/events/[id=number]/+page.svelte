<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import Tag from "$lib/components/tag.svelte";
	import github_green from "$lib/assets/icons/github-green.svg";
	import { Dot, Globe, Smartphone } from "lucide-svelte";

	let { data } = $props();
</script>

{#snippet subtitle(text: string)}
	<h2 class="mt-4 flex items-center gap-1 text-3xl font-bold">
		<span aria-hidden="true" class="text-lime-400 italic">#</span>
		{text}
	</h2>
{/snippet}

<CenterContainer class="py-12">
	<section>
		<h2 class="font-fira text-xl text-lime-400">Evento</h2>
		<div class="mt-2 flex flex-wrap gap-8">
			<span class="font-fira">{data.event.name}</span>
        </div>
	</section>
	<section class="mt-8 rounded-2xl bg-gray-800 p-8">
		<div class="flex flex-wrap items-center gap-1 font-fira">
			<span class="text-lime-400">{data.event.date}</span>
			<Dot />
			{#each data.event.categories as category}
				<Tag {category} />
			{/each}
		</div>

		{@render subtitle("¿De qué trata?")}
		<p class="mt-2 font-fira">
			{data.event.description}
		</p>

		{@render subtitle("¿Dondé es?")}
		<p class="mt-2 font-fira">
			{data.event.place}
		</p>

		<!-- {@render subtitle("¿Cómo lo hicimos?")}
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
					<Smartphone class="size-6 text-lime-400" />
					App Móvil
				</a>
			{/if}

			{#if data.project.web_url}
				<a class="flex gap-1 hover:underline" rel="external" href={data.project.web_url}>
					<Globe class="size-6 text-lime-400" />
					Página Web
				</a>
			{/if}
		</div> -->
	</section>
</CenterContainer>
