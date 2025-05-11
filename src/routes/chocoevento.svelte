<script lang="ts">
	import { CalendarDays, Clock3, MapPin, MoveRight } from "lucide-svelte";

	type Props = {
		event: {
			id: number;
			name: string;
			description: string;
			date: string;
			time: string;
			place: string;
			// TODO: use this value
			// active: string;
			image: string;
		};
	};
	let { event }: Props = $props();
</script>

<article class="overflow-hidden rounded-3xl border border-kokoa-lime1 bg-primary">
	<div
		class="grid gap-6 p-6 sm:grid-cols-[minmax(0px,2fr)_minmax(0px,1fr)] md:grid-cols-[minmax(0px,1fr)_minmax(0px,2fr)_minmax(0px,1fr)]"
	>
		<img
			class="h-32 w-full rounded-3xl object-cover object-center sm:col-span-2 md:col-span-1"
			src={event.image}
			alt="Imagen de evento"
		/>
		<div class="max-w-prose">
			<h3 class="font-fira text-2xl font-semibold">{event.name}</h3>
			<p class="mt-2">{event.description}</p>
		</div>
		<dl class="flex flex-col gap-y-2">
			<div class="grid grid-cols-[24px_minmax(0px,1fr)] items-center gap-x-3 text-kokoa-lime1">
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
	<div class="flex justify-end bg-kokoa-lime1 px-6 py-2 font-fira font-semibold text-primary">
		<button class="flex items-center gap-2 gap-x-3">
			<a href="/events/{event.id}">
				<span>Información</span>
			</a>
			<MoveRight />
		</button>
	</div>
</article>
