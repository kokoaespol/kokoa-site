<script lang="ts">
  export let href: string;
  let classes = "";
  export { classes as class };
</script>

<a
  {href}
  class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-400 px-4 py-2 text-base font-medium text-zinc-50 shadow-sm hover:bg-orange-500 {classes}"
>
  <slot />
</a>
