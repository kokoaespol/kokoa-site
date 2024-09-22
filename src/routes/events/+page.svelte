<script lang="ts">
	import Event from "$lib/components/Event.svelte";

	let { data } = $props();
</script>

<div class="flex flex-wrap items-center px-8">
	{#each data.events as event}
		<Event
			name={event.name}
			description={event.description}
			date={event.date}
			place={event.place}
			category={event.category}
		/>
	{/each}
</div>
