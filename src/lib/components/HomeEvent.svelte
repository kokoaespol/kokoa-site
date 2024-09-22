<script lang="ts">
	import { CalendarDays, Clock3, MapPin, MoveRight } from "lucide-svelte";
	import rust from "$lib/assets/rust.webp";

	type Props = {
		name: string;
		description: string;
		date: string;
		time: string;
		place: string;
	};

	let { name, description, date, time, place }: Props = $props();
</script>

<div class="my-4 overflow-hidden rounded-3xl border border-lime-500">
	<div
		class="flex flex-col justify-center bg-neutral-800 p-8 sm:grid sm:grid-cols-[1fr,2fr,1fr] sm:gap-x-4"
	>
		<div class="h-fit">
			<img src={rust} alt="rust" class="mx-auto my-auto h-1/3 w-1/3 rounded-3xl" />
		</div>
		<div>
			<h3 class="font-fira text-2xl font-semibold text-white">
				{name}
			</h3>
			<p>
				{description}
			</p>
		</div>
		<div class="flex flex-col justify-center">
			<p class="flex flex-row text-lg text-lime-500">
				<CalendarDays /><span class="ml-2">{date}</span>
			</p>
			<p class="my-2 flex flex-row"><Clock3 /><span class="ml-2">{time}</span></p>
			<p class="flex flex-row"><MapPin /><span class="ml-2">{place}</span></p>
		</div>
	</div>
	<div class="flex flex-row justify-end bg-lime-500 py-2 pr-6 font-fira font-semibold text-black">
		<button class="flex flex-row">
			<span class="mr-4">Registrarse</span>
			<MoveRight />
		</button>
	</div>
</div>
