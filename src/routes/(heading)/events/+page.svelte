<script lang="ts">
	import Card from "$lib/components/card.svelte";
	import CenterContainer from "$lib/components/center-container.svelte";

	let { data } = $props();
	const sorted_events = data.events.toSorted((a, b) => {
		return (b.active === "true" ? 1 : 0) - (a.active === "true" ? 1 : 0);
	});
</script>

<CenterContainer class="py-12">
	<ul
		role="list"
		class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each sorted_events as event (event.id)}
			<Card
				route="/events/{event.id}"
				date={event.date}
				name={event.name}
				categories={event.categories}
				description={event.description}
				place={event.place}
			/>
		{/each}
	</ul>
</CenterContainer>
