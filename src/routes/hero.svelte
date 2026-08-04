<svelte:options runes />

<script lang="ts">
	import { resolve } from "$app/paths";
	import CenterContainer from "$lib/components/center-container.svelte";
	import feria from "$lib/assets/images/portada.jpg";
	import { reveal, REVEAL_CLASS } from "$lib/actions/reveal.js";
</script>

<CenterContainer
	tag="section"
	class="flex flex-col items-center justify-between gap-8 py-10 md:flex-row"
>
	<div use:reveal class="max-w-xs md:max-w-none md:flex-[2_2_0%] {REVEAL_CLASS}">
		<div class="relative mx-auto w-4/5">
			<div class="absolute -top-5 -left-5 size-24 bg-kokoa-lime1"></div>
			<div class="absolute -right-5 -bottom-5 size-24 border border-kokoa-lime1"></div>
			<img
				src={feria}
				alt="Feria de Proyectos Kokoa 2024 2S"
				class="relative aspect-3/2 h-full object-cover"
				width="378.88"
				height="252.59"
			/>
		</div>
	</div>
	<div
		use:reveal={{ delay: 150 }}
		class="flex flex-col items-center gap-y-5 text-center md:flex-[3_3_0%] {REVEAL_CLASS}"
	>
		<h1 class="font-fira text-lg font-bold lg:text-2xl">
			<span class="text-kokoa-lime2">Kokoa</span>
			<span class="text-blue-100">- Vive el software libre</span>
		</h1>
		<p class="max-w-prose text-sm text-blue-100 lg:text-base">
			Club estudiantil politécnico promotor del uso, modificación, distribución y aprendizaje de
			software libre
		</p>
		<a
			href={resolve("/join")}
			class="inline-block rounded-full bg-lime-500 px-14 py-2 text-base font-semibold text-gray-900 shadow-xs transition-colors duration-150 hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
		>
			Unirse
		</a>
	</div>
</CenterContainer>
