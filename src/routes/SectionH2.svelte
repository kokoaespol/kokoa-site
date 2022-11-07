<script lang="ts">
  export let invert = false;
</script>

<header>
  <h2
    class="text-3xl font-bold tracking-wide before:content-['>'] sm:text-4xl {invert
      ? 'text-zinc-900 before:text-green-kokoa-600'
      : 'text-zinc-50 before:text-green-kokoa-500'}"
  >
    <slot />
  </h2>
</header>
