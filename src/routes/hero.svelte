<svelte:options runes />

<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
</script>

<CenterContainer
	tag="section"
	class="flex flex-col items-center justify-between gap-8 py-10 md:flex-row"
>
	<div class="max-w-xs md:max-w-none md:flex-[2_2_0%]">
		<div class="relative mx-auto w-4/5">
			<div class="absolute -top-5 -left-5 size-24 bg-lime-500"></div>
			<div class="absolute -right-5 -bottom-5 size-24 border border-lime-500"></div>
			<img
				src="src/lib/assets/images/portada.jpg"
				alt="Imagen de amigos programando"
				class="relative aspect-3/2 h-full object-cover"
				width="378.88"
				height="252.59"
			/>
		</div>
	</div>
	<div class="flex flex-col items-center gap-y-5 text-center md:flex-[3_3_0%]">
		<h1 class="font-fira text-lg font-bold lg:text-2xl">
			<span class="text-lime-500">Kokoa</span>
			<span class="text-blue-100">- Vive el software libre</span>
		</h1>
		<p class="max-w-prose text-sm text-blue-100 lg:text-base">
			Club estudiantil politécnico promotor del uso, modificación, distribución y aprendizaje de
			software libre
		</p>
		<a
			href="/join"
			class="inline-block rounded-full bg-lime-500 px-14 py-2 text-base font-semibold text-gray-900 shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
		>
			Unirse
		</a>
	</div>
</CenterContainer>
