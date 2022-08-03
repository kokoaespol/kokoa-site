<script lang="ts">
  export let invert = false;
</script>

<header>
  <h2
    class="text-3xl font-bold tracking-wide sm:text-4xl {invert ? 'text-zinc-900' : 'text-zinc-50'}"
  >
    <slot />
  </h2>
  <hr
    class="mt-1 w-28 border-2 {invert
      ? 'hidden border-zinc-900 bg-zinc-900 lg:block'
      : 'border-orange-400 bg-orange-400'}"
  />
</header>
