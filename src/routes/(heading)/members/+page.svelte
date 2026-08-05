<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import Member from "$lib/components/member.svelte";
	import { use_i18n } from "$lib/i18n/use.js";

	const { t } = use_i18n();

	let { data } = $props();
</script>

<CenterContainer class="flex flex-col gap-y-16 py-12">
	<section>
		<h2 class="text-center font-fira text-3xl font-medium">{t("members.board")}</h2>
		<ul
			role="list"
			class="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			{#each data.members.filter((m) => m.directiva === "si") as member, i (member.photo)}
				<Member {member} delay={i * 60} />
			{/each}
		</ul>
	</section>
	<section>
		<h2 class="text-center font-fira text-3xl font-medium">{t("members.list")}</h2>
		<ul
			role="list"
			class="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data.members.filter((m) => m.directiva === "no") as member, i (member.photo)}
				<Member {member} delay={i * 60} />
			{/each}
		</ul>
	</section>
</CenterContainer>
