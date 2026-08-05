<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import Hero from "./hero.svelte";
	import { Bot, Cpu, SquareCode, SquareTerminal } from "@lucide/svelte";
	import Chocoevento from "./chocoevento.svelte";
	import Member from "$lib/components/member.svelte";
	import { reveal, REVEAL_CLASS } from "$lib/actions/reveal.js";
	import { use_i18n } from "$lib/i18n/use.js";

	const { t, href } = use_i18n();

	let { data } = $props();
	let active_events = $derived(data.events.filter((event) => event.active === "true"));
</script>

{#snippet subtitle(text: string)}
	<h2 class="flex-1 text-left font-fira text-2xl font-semibold">
		<span class="text-lime-500">&gt;&nbsp;</span>{text}
	</h2>
{/snippet}

<Hero />
<section use:reveal class={REVEAL_CLASS}>
	<CenterContainer class="py-6 sm:py-10">
		{@render subtitle(t("home.areas.title"))}
		<div class="md:grid md:grid-cols-4 md:gap-x-10">
			<p class="mt-4 max-w-prose pl-7">{t("home.areas.lead")}</p>
			<ul
				class="mx-auto mt-6 grid grid-cols-1 gap-y-5 pl-7 sm:grid-cols-2 sm:gap-10 md:col-span-3 md:mx-0 md:mt-0 md:pl-0"
			>
				<li class="flex items-center gap-3">
					<Cpu class="size-12 text-kokoa-lime1 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">{t("home.areas.electronics")}</span>
				</li>
				<li class="flex items-center gap-3">
					<Bot class="size-12 text-kokoa-lime1 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">{t("home.areas.hacking")}</span>
				</li>
				<li class="flex items-center gap-3">
					<SquareCode class="size-12 text-kokoa-lime1 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">{t("home.areas.web_mobile")}</span>
				</li>
				<li class="flex items-center gap-3">
					<SquareTerminal class="size-12 text-kokoa-lime1 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">{t("home.areas.systems")}</span>
				</li>
			</ul>
		</div>
		<div class="mt-16 flex justify-center">
			<a
				href={href("/projects")}
				class="inline-block rounded-full bg-lime-500 px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs transition-colors duration-150 hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
			>
				{t("home.cta.projects")}
			</a>
		</div>
	</CenterContainer>
</section>

<section use:reveal class={REVEAL_CLASS}>
	<CenterContainer class="py-6 sm:py-10">
		{@render subtitle(t("home.events.title"))}

		{#if active_events.length === 0}
			<p class="mt-6 text-center text-xl text-gray-400">{t("home.events.empty")}</p>
		{:else}
			<div class="mt-6 flex flex-col gap-y-6">
				{#each active_events as event, i (event.id)}
					<Chocoevento {event} delay={i * 60} />
				{/each}
			</div>
			<div class="mt-6 flex justify-center">
				<a
					href={href("/events")}
					class="inline-block rounded-full bg-kokoa-lime1 px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs transition-colors duration-150 hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
				>
					{t("home.cta.events")}
				</a>
			</div>
		{/if}
	</CenterContainer>
</section>
<section use:reveal class={REVEAL_CLASS}>
	<CenterContainer class="py-6 sm:py-10">
		{@render subtitle(t("home.members.title"))}
		<ul
			role="list"
			class="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			{#each data.members.filter((m) => m.directiva === "si") as member, i (member.photo)}
				<Member {member} delay={i * 60} />
			{/each}
		</ul>
		<div class="mt-16 flex justify-center">
			<a
				href={href("/members")}
				class="inline-block rounded-full bg-lime-500 px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs transition-colors duration-150 hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
			>
				{t("home.cta.members")}
			</a>
		</div>
	</CenterContainer>
</section>
