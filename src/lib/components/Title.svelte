<script lang="ts">
	type Props = {
		title: string;
	};

	let { title }: Props = $props();
</script>

<h2 class="text-center font-fira text-2xl font-semibold sm:text-left md:text-left lg:text-left">
	<span class="text-lime-500">></span>{title}
</h2>
