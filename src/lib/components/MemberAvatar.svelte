<script lang="ts">
	type Props = {
		name: string;
		url_image: string;
	};

	const { name, url_image }: Props = $props();
</script>

<div class="flex items-center gap-1">
	<img src={url_image} alt={name} class="w-[30px] rounded-full object-cover" />
	<span class="font-fira">{name}</span>
</div>
