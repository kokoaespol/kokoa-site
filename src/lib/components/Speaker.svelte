<script lang="ts">
    const { name, image_url, date, time, title, topic } = $props();
</script>

<div class="my-4 rounded-2xl bg-neutral-800 px-6 py-4 w-4/5 flex gap-6">
    <img src={image_url} alt={name} class="rounded-full w-[100px]"/>
    <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1 mb-2">
            <span>{name}</span>
            <small class="text-lime-600">{title}</small>
        </div>
        <span>📅 {date}</span>
        <span>🕙 {time}</span>
    </div>
    <div class="h-100 bg-lime-600 w-[1px]"></div>
    <div class="flex h-100 items-center text-center">
        <span class="text-xl">{topic}</span>
    </div>
</div>
