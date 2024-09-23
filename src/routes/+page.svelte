<script lang="ts">
	import Hero from "./Hero.svelte";
	import Members_home from "$lib/components/Members_home.svelte";
	import Chocoareas from "./Chocoareas.svelte";
	import Chocomision from "./Chocomision.svelte";
	import Title from "$lib/components/Title.svelte";
	import Event from "$lib/components/HomeEvent.svelte";

	let { data } = $props();
</script>

<main class="px-8 md:mx-20 lg:mx-20">
	<Hero />
	<Chocomision />
	<Chocoareas />
	<section class="my-8">
		<Title title="Chocoeventos" />
		<div class="flex flex-col items-center px-8">
			{#each data.events as event}
				<Event
					name={event.name}
					description={event.description}
					date={event.date}
					time={event.time}
					place={event.place}
				/>
			{/each}
			<button class="py mt-4 rounded-full bg-lime-500 px-8 font-fira font-semibold text-black">
				<a href="/events"> Ver más </a>
			</button>
		</div>
	</section>
  <Members_home />
</main>