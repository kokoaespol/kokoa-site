<svelte:options runes />

<script>
	import CenterContainer from "$lib/components/center-container.svelte";
</script>

<CenterContainer class="flex flex-wrap justify-center py-6 sm:py-10">
	<!-- Texto encima del formulario -->
	<div class="mb-6 text-center">
		<p class="font-fira font-medium text-wrap">
			Te estás inscribiendo al proceso de admisión correspondiente al 1PAO 2025, nos comunicaremos
			contigo para darte a conocer las fechas y los siguientes pasos.
		</p>
	</div>
	<div class="w-full max-w-3xl" style="filter: invert(1) hue-rotate(180deg);">
		<iframe
			src="https://docs.google.com/forms/d/e/1FAIpQLSfzN8pn4GiUL_eVLvxNxlvC8yvabQ2mTsHFepxSj3rEK5fn7w/viewform?embedded=true"
			height="1585"
			frameborder="0"
			marginheight="0"
			marginwidth="0"
			title="Google Form for Join Kokoa"
			class="w-full"
		>
			Cargando…
		</iframe>
	</div>
</CenterContainer>
