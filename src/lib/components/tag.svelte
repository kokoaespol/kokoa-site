<script lang="ts">
	import { use_i18n } from "$lib/i18n/use.js";

	let { category }: { category: string } = $props();

	const { t } = use_i18n();
</script>

<span
	class="rounded-full border border-lime-500 bg-neutral-800 px-6 font-fira text-xs font-bold text-gray-50 transition-colors duration-150 hover:border-lime-300 hover:text-lime-300"
>
	<!-- Las áreas de interés de los miembros aún no se traducen: caen al texto original. -->
	{t(`category.${category}`, { default: category })}
</span>
