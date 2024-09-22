<script lang="ts">
	import Project from "$lib/components/Project.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>Proyectos | KOKOA</title>
</svelte:head>

<div class="p-8">
	<h1 class="mb-2 font-fira text-xl text-lime-400">Proyectos</h1>
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
