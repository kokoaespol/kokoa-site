<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import gecko_text from "$lib/assets/logos/gecko-text.png";
	import { Bot, Cpu, SquareCode, SquareTerminal } from "lucide-svelte";
	import Member from "$lib/components/member.svelte";
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
				KOKOA es un club de software libre de ESPOL que fomenta la equidad, la colaboración y el
				aprendizaje de software y tecnologías libres. Realizamos y colaboramos con múltiples
				departamentos dentro y fuera de la ESPOL para desarrollar proyectos de índole académico y
				profesional. Participamos en diferentes eventos a nivel local y nacional para la innovación
				de tecnologías, elaboramos talleres y capacitaciones para ayudar a la comunidad en múltiples
				necesidades académicas.
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
				Esta comunidad nació en el año de 1996, gracias a la ideología que tenían en común algunas
				mentes politécnicas, que hasta la actualidad se desempeñan en áreas donde promueven el uso
				de tecnologías libres. El club se ha consolidado como un espacio donde los miembros más
				experimentados guían a los nuevos integrantes, compartiendo conocimientos sobre GNU/Linux,
				distribuciones y desarrollo de software. No se requieren habilidades previas debido a que se
				valora la curiosidad, la autodisciplina y el compromiso con el aprendizaje continuo. KOKOA
				es una experiencia formativa, que comienza como un espacio de aprendizaje y se convierte en
				una red de apoyo mutuo, donde cada miembro tiene la oportunidad de crecer, aprender y ser
				parte de una comunidad inclusiva que trasciende los límites de ESPOL y se proyecta al mundo.
			</p>
		</div>
	</CenterContainer>
</section>
<section>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle("Chocomisión")}
			<p class="mt-4 pl-7">
				Promover y democratizar el uso de tecnologías libres y de código abierto, fomentando el aprendizaje colaborativo, el desarrollo de proyectos innovadores y la implementación de soluciones tecnológicas que beneficien a la comunidad académica y profesional.

			</p>
		</div>
	</CenterContainer>
</section>
<section>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle("Chocovisión")}
			<p class="mt-4 pl-7">
				Ser un referente nacional en la adopción y desarrollo de software libre, reconocidos por nuestra contribución a la innovación tecnológica, la formación de profesionales comprometidos con el conocimiento libre y el impacto positivo en la sociedad a través de soluciones tecnológicas accesibles y éticas.

			</p>
		</div>
	</CenterContainer>
</section>
