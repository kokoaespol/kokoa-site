<script lang="ts">
	import { CalendarDays, Clock3, MapPin, MoveRight } from "@lucide/svelte";
	import { reveal, REVEAL_CLASS } from "$lib/actions/reveal.js";
	import { use_i18n } from "$lib/i18n/use.js";
	import { CARD_LIFT_CLASS } from "$lib/styles.js";

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
		delay?: number;
	};
	let { event, delay = 0 }: Props = $props();

	const { t, href } = use_i18n();
</script>

<div use:reveal={{ delay }} class={REVEAL_CLASS}>
	<a
		href={href(`/events/${event.id}`)}
		class="group block overflow-hidden rounded-3xl border border-kokoa-lime1 bg-primary {CARD_LIFT_CLASS}"
	>
		<div
			class="grid gap-6 p-6 sm:grid-cols-[minmax(0px,2fr)_minmax(0px,1fr)] md:grid-cols-[minmax(0px,1fr)_minmax(0px,2fr)_minmax(0px,1fr)]"
		>
			<img
				class="h-32 w-full rounded-3xl object-cover object-center sm:col-span-2 md:col-span-1"
				src={event.image}
				alt={t("events.card.image_alt")}
			/>
			<div class="max-w-prose">
				<h3 class="font-fira text-2xl font-semibold">{event.name}</h3>
				<p class="mt-2">{event.description}</p>
			</div>
			<dl class="flex flex-col gap-y-2">
				<div class="grid grid-cols-[24px_minmax(0px,1fr)] items-center gap-x-3 text-kokoa-lime1">
					<dt>
						<span class="sr-only">{t("events.card.date")}</span>
						<CalendarDays class="size-6" aria-hidden="true" />
					</dt>
					<dd class="text-lg">{event.date}</dd>
				</div>
				<div class="grid grid-cols-[24px_minmax(0px,1fr)] items-center gap-x-3">
					<dt>
						<span class="sr-only">{t("events.card.time")}</span>
						<Clock3 class="size-6" aria-hidden="true" />
					</dt>
					<dd>{event.time}</dd>
				</div>
				<div class="grid grid-cols-[24px_minmax(0px,1fr)] items-center gap-x-3">
					<dt>
						<span class="sr-only">{t("events.card.place")}</span>
						<MapPin class="size-6" aria-hidden="true" />
					</dt>
					<dd>{event.place}</dd>
				</div>
			</dl>
		</div>
		<div class="flex justify-end bg-kokoa-lime1 px-6 py-2 font-fira font-semibold text-primary">
			<span
				class="flex items-center gap-2 gap-x-3 transition-transform duration-150 group-hover:translate-x-1"
			>
				<span>{t("events.card.info")}</span>
				<MoveRight />
			</span>
		</div>
	</a>
</div>
