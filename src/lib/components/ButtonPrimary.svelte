<script lang="ts">
  export let href: string;
  let classes = "";
  export { classes as class };
</script>

<a
  {href}
  class="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-kokoa-500 px-4 py-2 text-base font-medium text-green-kokoa-600 shadow-sm hover:bg-green-kokoa-600 hover:text-zinc-100 {classes}"
>
  <slot />
</a>
