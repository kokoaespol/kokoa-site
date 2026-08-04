<script lang="ts">
	let { category }: { category: string } = $props();
</script>

<span
	class="rounded-full border border-lime-500 bg-neutral-800 px-6 font-fira text-xs font-bold text-gray-50 transition-colors duration-150 hover:border-lime-300 hover:text-lime-300"
>
	{category}
</span>
