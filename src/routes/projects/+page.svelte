<script lang="ts">
	import CommonCard from "$lib/components/CommonCard.svelte";

	let { data } = $props();
</script>

<p class="font-medium">{data.description}</p>
<div class="mt-8 flex flex-col items-center sm:flex sm:flex-row sm:flex-wrap">
	{#each data.projects as project}
		<CommonCard
			term={project.term}
			name={project.name}
			category={project.category}
			description={project.description}
		/>
	{/each}
</div>
