<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icon = "";
  export let classes = "";
  export let section = "";
</script>

<div id={section} class="mx-14 my-8 rounded-2xl p-14 {classes}">
  <h2 class="flex items-center gap-12 align-middle text-4xl capitalize">
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full border-[0.06rem] border-zinc-400"
    >
      <Icon data={icon} class="h-10 w-10 fill-none stroke-surface-500 stroke-1 object-cover" />
    </div>
    {section}
  </h2>
  <p class="description ml-28">This section is about projects</p>
  <slot />
</div>
