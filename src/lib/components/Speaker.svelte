<script lang="ts">
	type Props = {
		name: string;
		image_url: string;
		date: string;
		time: string;
		title: string;
		topic: string;
	};
	const { name, image_url, date, time, title, topic }: Props = $props();
</script>

<div class="my-4 flex w-fit flex-col items-center gap-6 rounded-2xl bg-neutral-800 px-6 py-4">
	<img src={image_url} alt={name} class="w-[150px] self-center rounded-full" />
	<div class="flex flex-col gap-6 px-6 py-4">
		<div class="h-100 flex max-w-[250px] items-center text-center">
			<span class="text-xl">{topic}</span>
		</div>
		<div class="flex flex-col gap-2">
			<div class="mb-2 flex flex-col gap-1 text-center">
				<span>{name}</span>
				<small class="text-lime-600">{title}</small>
			</div>
			<span>📅 {date}</span>
			<span>🕙 {time}</span>
		</div>
	</div>
</div>
