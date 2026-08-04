<svelte:options runes />

<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import gecko_text from "$lib/assets/logos/gecko-text.png";
</script>

{#snippet subtitle(text: string)}
	<h2 class="flex-1 text-left font-fira text-2xl font-semibold">
		<span class="text-lime-500">&gt;&nbsp;</span>{text}
	</h2>
{/snippet}

<section>
	<CenterContainer class="py-6 sm:grid sm:grid-cols-3 sm:items-center sm:gap-x-8 sm:py-10">
		<div class="col-span-2">
			{@render subtitle("La Comunidad")}
			<p class="mt-4 max-w-prose pl-7">
				KOKOA es el club de software libre de ESPOL: fomentamos la equidad, la colaboración y el
				aprendizaje de tecnologías libres. Junto a distintos departamentos dentro y fuera de la
				ESPOL, desarrollamos proyectos, organizamos eventos y dictamos talleres para la comunidad
				académica.
			</p>
		</div>
		<div class="mt-6 sm:mt-0">
			<img
				class="mx-auto pl-7 sm:mx-0 sm:w-4/5 sm:pl-0 lg:w-3/5"
				src={gecko_text}
				width="230.4"
				height="153.14"
				alt="Logo de Kokoa"
			/>
		</div>
	</CenterContainer>
</section>
<section>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle("Historia")}
			<p class="mt-4 pl-7">
				KOKOA nació en 1996 de la mano de un grupo de politécnicos que compartían una misma pasión
				por el software libre. Hoy es un espacio donde los miembros con más experiencia guían a los
				nuevos en GNU/Linux y desarrollo de software — no se requiere experiencia previa, solo
				curiosidad y ganas de aprender.
			</p>
		</div>
	</CenterContainer>
</section>
<section>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle("Chocomisión")}
			<p class="mt-4 pl-7">
				Promover y democratizar el uso de tecnologías libres y de código abierto, fomentando el
				aprendizaje colaborativo, el desarrollo de proyectos innovadores y la implementación de
				soluciones tecnológicas que beneficien a la comunidad académica y profesional.
			</p>
		</div>
	</CenterContainer>
</section>
<section>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle("Chocovisión")}
			<p class="mt-4 pl-7">
				Ser un referente nacional en la adopción y desarrollo de software libre, reconocidos por
				nuestra contribución a la innovación tecnológica, la formación de profesionales
				comprometidos con el conocimiento libre y el impacto positivo en la sociedad a través de
				soluciones tecnológicas accesibles y éticas.
			</p>
		</div>
	</CenterContainer>
</section>
