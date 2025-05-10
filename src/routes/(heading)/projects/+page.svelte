<script lang="ts">
	import Card from "$lib/components/card.svelte";
	import CenterContainer from "$lib/components/center-container.svelte";

	let { data } = $props();
</script>

<CenterContainer class="py-12">
	<p class="font-fira font-medium">
		Estos son algunos de los proyectos que hemos realizado en conjunto.
	</p>
	<p class="font-fira font-medium">
		Nuestra meta es utlizar nuestras habilidades digitales para crear un impacto positivo en la
		sociedad.
	</p>
	<ul
		role="list"
		class="mx-auto mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each data.projects as project (project.id)}
			<Card
				route="/projects/{project.id}"
				date={project.term}
				name={project.name}
				categories={project.categories}
				description={project.description}
			/>
		{/each}
	</ul>
</CenterContainer>
