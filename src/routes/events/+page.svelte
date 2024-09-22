<script lang="ts">
	import Event from "$lib/components/Event.svelte";
	import Heading from "$lib/components/layout/Heading.svelte";

	let { data } = $props();
</script>

<Heading title="EVENTOS" />
<div class="flex flex-col items-center px-8">
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
