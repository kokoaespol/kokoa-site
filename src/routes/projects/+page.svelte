<script lang="ts">
	import Heading from "$lib/components/layout/Heading.svelte";
	import Project from "$lib/components/Project.svelte";
	let { data } = $props();
</script>

<svelte:head>
	<title>Proyectos | KOKOA</title>
</svelte:head>

<Heading>PROYECTOS</Heading>

<div class="p-8">
	<p class="font-fira font-medium">
		Estos son algunos de los proyectos que hemos realizado en conjunto.
	</p>
	<p class="font-fira font-medium">
		Nuestra meta es utlizar nuestras habilidades digitales para crear un impacto positivo en la
		sociedad.
	</p>
	<div class="mt-8 flex flex-col items-center sm:flex sm:flex-row sm:flex-wrap">
		{#each data.projects as project}
			<Project
				id={project.id}
				term={project.term}
				name={project.name}
				categories={project.categories}
				description={project.description}
				authors={project.authors}
			/>
		{/each}
	</div>
</div>
