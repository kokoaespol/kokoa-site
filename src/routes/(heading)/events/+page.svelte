<script lang="ts">
	import Card from "$lib/components/card.svelte";
	import CenterContainer from "$lib/components/center-container.svelte";

	let { data } = $props();
</script>

<CenterContainer class="py-12">
	<ul
		role="list"
		class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each data.events as event}
			<Card
				route={event.route}
				date={event.date}
				name={event.name}
				categories={[event.category]}
				description={event.description}
				place={event.place}
			/>
		{/each}
	</ul>
</CenterContainer>
