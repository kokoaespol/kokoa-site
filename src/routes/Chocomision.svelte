<script>
	import Title from "$lib/components/Title.svelte";
	import logoKokoa from "$lib/assets/logos/logo-semib.png";
</script>

<section
	class="mt-10 flex flex-col items-center sm:flex-row md:flex-row lg:mt-16 lg:flex-row lg:items-center"
>
	<div
		class="flex w-full flex-col items-center sm:flex-col md:flex-col lg:flex-col lg:items-start lg:justify-between"
	>
		<Title title="Chocomisión" />
		<p
			id="mision"
			class="mt-4 max-w-[21rem] text-center text-sm sm:max-w-[28rem] sm:text-left md:max-w-[28rem] md:text-left md:text-base lg:ml-3 lg:mt-5 lg:max-w-[25rem] lg:text-left lg:text-[1rem]"
		>
			Compartir, difundir e implementar, conocimiento y herramientas, para el desarrollo académico y
			tecnológico de la sociedad Ecuatoriana.
		</p>
	</div>
	<img
		id="logo_kokoa"
		src={logoKokoa}
		alt="Logo de KOKOA"
		class="md:mr-15 mt-4 w-44 sm:mt-0 sm:w-44 md:mr-[7rem] md:w-48 lg:w-72"
	/>
</section>
