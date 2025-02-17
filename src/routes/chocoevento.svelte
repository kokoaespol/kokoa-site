<script lang="ts">
	import { CalendarDays, CircleSlash, Clock3, MapPin, MoveRight } from "lucide-svelte";

	type Props = {
		event: {
			name: string;
			description: string;
			date: string;
			time: string;
			place: string;
		};
	};
	let { event }: Props = $props();
</script>

<article class="overflow-hidden rounded-3xl border border-lime-500 bg-neutral-800">
	<div
		class="grid gap-6 p-6 sm:grid-cols-[minmax(0px,2fr)_minmax(0px,1fr)] md:grid-cols-[minmax(0px,1fr)_minmax(0px,2fr)_minmax(0px,1fr)]"
	>
		<!-- TODO: change to image -->
		<CircleSlash class="hidden size-16 place-self-center md:block" />
		<div class="max-w-prose">
			<h3 class="font-fira text-2xl font-semibold">{event.name}</h3>
			<p class="mt-2">{event.description}</p>
		</div>
		<dl class="flex flex-col gap-y-2">
			<div class="grid grid-cols-[24px_minmax(0px,1fr)] items-center gap-x-3 text-lime-500">
				<dt>
					<span class="sr-only">Fecha</span>
					<CalendarDays class="size-6" aria-hidden="true" />
				</dt>
				<dd class="text-lg">{event.date}</dd>
			</div>
			<div class="grid grid-cols-[24px_minmax(0px,1fr)] items-center gap-x-3">
				<dt>
					<span class="sr-only">Hora</span>
					<Clock3 class="size-6" aria-hidden="true" />
				</dt>
				<dd>{event.time}</dd>
			</div>
			<div class="grid grid-cols-[24px_minmax(0px,1fr)] items-center gap-x-3">
				<dt>
					<span class="sr-only">Lugar</span>
					<MapPin class="size-6" aria-hidden="true" />
				</dt>
				<dd>{event.place}</dd>
			</div>
		</dl>
	</div>
	<div class="font-fira flex justify-end bg-lime-500 px-6 py-2 font-semibold text-gray-950">
		<!-- TODO: change to anchor tag -->
		<button class="flex items-center gap-2 gap-x-3">
			<span>Registrarse</span>
			<MoveRight />
		</button>
	</div>
</article>
