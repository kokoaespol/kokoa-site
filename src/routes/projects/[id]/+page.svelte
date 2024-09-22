<script lang="ts">
	import MemberAvatar from "$lib/components/MemberAvatar.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import { Dot, Github, Smartphone, Globe } from "lucide-svelte";
	import Heading from "$lib/components/layout/Heading.svelte";

	export let data;
</script>

<Heading>
	PROYECTOS
	<span class="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-[3rem] text-transparent">
		{">"}
	</span>
	{data.project.name}
</Heading>

<div class="p-8">
	<div class="mb-10">
		<span class="font-fire mb-2 block text-xl text-lime-400">Autores</span>
		<div class="flex gap-8">
			{#each data.project.authors as author}
				<MemberAvatar name={author.name} url_image={author.url_image} />
			{/each}
		</div>
	</div>
	<div class="rounded-2xl bg-gray-800 p-8">
		<div class="mb-8 flex items-center gap-1 font-fira">
			<span class="text-lime-400">{data.project.term}</span>
			<Dot />
			{#each data.project.categories as category}
				<Tag {category} />
			{/each}
		</div>

		<h2 class="mb-2 flex items-center gap-1 text-3xl font-bold">
			<span class="italic text-lime-400">#</span>
			¿Qué es?
		</h2>
		<p class="mb-4 font-fira">
			{data.project.description}
		</p>

		<h2 class="mb-2 flex items-center gap-1 text-3xl font-bold">
			<span class="italic text-lime-400">#</span>
			¿Para qué sirve?
		</h2>
		<p class="mb-4 font-fira">
			{data.project.purpose}
		</p>

		<h2 class="mb-2 flex items-center gap-1 text-3xl font-bold">
			<span class="italic text-lime-400">#</span>
			¿Cómo lo hicimos?
		</h2>
		<p class="mb-8 font-fira">
			{data.project.how}
		</p>

		<div class="flex flex-col gap-4">
			{#if data.project.github_url}
				<a href={data.project.github_url} target="_blank" class="flex gap-1 hover:underline">
					<Github class="text-lime-400" />
					{data.project.github_url}
				</a>
			{/if}

			{#if data.project.apk_url}
				<a href={data.project.apk_url} target="_blank" class="flex gap-1 hover:underline">
					<Smartphone class="text-lime-400" />
					App Móvil
				</a>
			{/if}

			{#if data.project.web_url}
				<a href={data.project.web_url} target="_blank" class="flex gap-1 hover:underline">
					<Globe class="text-lime-400" />
					Página Web
				</a>
			{/if}
		</div>
	</div>
</div>
