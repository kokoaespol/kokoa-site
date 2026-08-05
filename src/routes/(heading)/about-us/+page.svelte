<svelte:options runes />

<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import gecko_text from "$lib/assets/logos/gecko-text.png";
	import { reveal, REVEAL_CLASS } from "$lib/actions/reveal.js";
	import { use_i18n } from "$lib/i18n/use.js";

	const { t } = use_i18n();
</script>

{#snippet subtitle(text: string)}
	<h2 class="flex-1 text-left font-fira text-2xl font-semibold">
		<span class="text-lime-500">&gt;&nbsp;</span>{text}
	</h2>
{/snippet}

<section use:reveal class={REVEAL_CLASS}>
	<CenterContainer class="py-6 sm:grid sm:grid-cols-3 sm:items-center sm:gap-x-8 sm:py-10">
		<div class="col-span-2">
			{@render subtitle(t("about.community.title"))}
			<p class="mt-4 max-w-prose pl-7">{t("about.community.body")}</p>
		</div>
		<div class="mt-6 sm:mt-0">
			<img
				class="mx-auto pl-7 sm:mx-0 sm:w-4/5 sm:pl-0 lg:w-3/5"
				src={gecko_text}
				width="230.4"
				height="153.14"
				alt={t("common.logo_alt")}
			/>
		</div>
	</CenterContainer>
</section>
<section use:reveal={{ delay: 100 }} class={REVEAL_CLASS}>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle(t("about.history.title"))}
			<p class="mt-4 pl-7">{t("about.history.body")}</p>
		</div>
	</CenterContainer>
</section>
<section use:reveal={{ delay: 200 }} class={REVEAL_CLASS}>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle(t("about.mission.title"))}
			<p class="mt-4 pl-7">{t("about.mission.body")}</p>
		</div>
	</CenterContainer>
</section>
<section use:reveal={{ delay: 300 }} class={REVEAL_CLASS}>
	<CenterContainer class="py-6">
		<div>
			{@render subtitle(t("about.vision.title"))}
			<p class="mt-4 pl-7">{t("about.vision.body")}</p>
		</div>
	</CenterContainer>
</section>
