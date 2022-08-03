<script lang="ts">
  export let idx: number;
  export let content: string;

  const is_first = idx === 0;
  const current_num = (idx + 1).toString().padStart(2, "0");
</script>

<article
  class="mt-3 aspect-[5/6] px-7 py-10  {is_first
    ? 'bg-orange-400 text-zinc-800'
    : 'bg-zinc-800 text-zinc-300'}"
>
  <h3 class="text-7xl font-bold">{current_num}</h3>
  <p class="mt-8 px-2 text-xl">{content}</p>
</article>
