<script lang="ts">
	type Props = {
		category: string;
	};

	let { category }: Props = $props();
</script>

<span
	class="rounded-full border border-lime-500 bg-neutral-800 px-6 font-fira text-xs font-bold text-white w-fit"
>
	{category}
</span>
