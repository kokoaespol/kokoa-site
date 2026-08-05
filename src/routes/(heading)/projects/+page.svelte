<script lang="ts">
	import Card from "$lib/components/card.svelte";
	import CenterContainer from "$lib/components/center-container.svelte";
	import { use_i18n } from "$lib/i18n/use.js";

	const { t } = use_i18n();

	let { data } = $props();
</script>

<CenterContainer class="py-12">
	<p class="font-fira font-medium">{t("projects.lead")}</p>
	<ul
		role="list"
		class="mx-auto mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each data.projects as project, i (project.id)}
			<Card
				route="/projects/{project.id}"
				date={project.term}
				name={project.name}
				categories={project.categories}
				description={project.description}
				delay={i * 60}
			/>
		{/each}
	</ul>
</CenterContainer>
