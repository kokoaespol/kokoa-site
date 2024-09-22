<script lang="ts">
	type Props = {
		title: string;
	};

	let { title }: Props = $props();
</script>

<h2 class="font-fira text-xl font-semibold">
	<span class="text-lime-500">></span>{title}
</h2>
