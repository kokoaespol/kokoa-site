<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import gecko_text from "$lib/assets/logos/gecko-text.png";
	import Hero from "./hero.svelte";
	import { Bot, Cpu, SquareCode, SquareTerminal } from "lucide-svelte";
	import Chocoevento from "./chocoevento.svelte";
	import Member from "$lib/components/member.svelte";

	let { data } = $props();
	const active_events = data.events.filter((event) => event.active === "true");
</script>

{#snippet subtitle(text: string)}
	<h2 class="flex-1 text-left font-fira text-2xl font-semibold">
		<span class="text-lime-500">&gt;&nbsp;</span>{text}
	</h2>
{/snippet}

<Hero />

<section>
	<CenterContainer class="py-6 sm:grid sm:grid-cols-3 sm:items-center sm:gap-x-8 sm:py-10">
		<div class="col-span-2">
			{@render subtitle("Chocomisión")}
			<p class="mt-4 max-w-prose pl-7">
				Compartir, difundir e implementar, conocimiento y herramientas, para el desarrollo académico
				y tecnológico de la sociedad Ecuatoriana.
			</p>
		</div>
		<div class="mt-6 sm:mt-0">
			<img
				class="mx-auto pl-7 sm:mx-0 sm:w-4/5 sm:pl-0 lg:w-3/5"
				src={gecko_text}
				width="230.4"
				height="153.14"
				alt="Logo de Kokoa"
			/>
		</div>
	</CenterContainer>
</section>

<section>
	<CenterContainer class="py-6 sm:py-10">
		{@render subtitle("Chocoáreas")}
		<div class="md:grid md:grid-cols-4 md:gap-x-10">
			<p class="mt-4 max-w-prose pl-7">Conoce nuestras áreas de trabajo</p>
			<ul
				class="mx-auto mt-6 grid grid-cols-1 gap-y-5 pl-7 sm:grid-cols-2 sm:gap-10 md:col-span-3 md:mx-0 md:mt-0 md:pl-0"
			>
				<li class="flex items-center gap-3">
					<Cpu class="size-12 text-lime-500 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">Electrónica</span>
				</li>
				<li class="flex items-center gap-3">
					<Bot class="size-12 text-lime-500 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">Hacking ético</span>
				</li>
				<li class="flex items-center gap-3">
					<SquareCode class="size-12 text-lime-500 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">Desarrollo web y móvil</span>
				</li>
				<li class="flex items-center gap-3">
					<SquareTerminal class="size-12 text-lime-500 md:size-16" aria-hidden="true" />
					<span class="flex-1 font-fira text-lg">Programación de sistemas</span>
				</li>
			</ul>
		</div>
	</CenterContainer>
</section>

<section>
	<CenterContainer class="py-6 sm:py-10">
		{@render subtitle("Chocoeventos")}

		{#if active_events.length === 0}
			<p class="mt-6 text-center text-xl text-gray-400">No hay eventos activos en este momento.</p>
		{:else}
			<div class="mt-6 flex flex-col gap-y-6">
				{#each active_events as event}
					<Chocoevento {event} />
				{/each}
			</div>
			<div class="mt-6 flex justify-center">
				<a
					href="/events"
					class="inline-block rounded-full bg-lime-500 px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
				>
					Ver más
				</a>
			</div>
		{/if}
	</CenterContainer>
</section>
<section>
	<CenterContainer class="py-6 sm:py-10">
		{@render subtitle("Chocomiembros")}
		<ul
			role="list"
			class="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data.members.filter((m) => m.directiva === "si") as member}
				<Member {member} />
			{/each}
		</ul>
		<div class="mt-16 flex justify-center">
			<a
				href="/members"
				class="inline-block rounded-full bg-lime-500 px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
			>
				Ver más
			</a>
		</div>
	</CenterContainer>
</section>
