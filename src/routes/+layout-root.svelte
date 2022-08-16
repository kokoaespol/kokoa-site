<script lang="ts">
  import "../app.css";
  import { navigating } from "$app/stores";
  import { dev } from "$app/env";
  import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";
</script>

{#if dev}
  <div
    class="fixed top-2 left-2 z-20 w-fit rounded-full bg-gray-900/80 p-2 font-semibold text-gray-50"
  >
    <span class="sm:hidden">celular</span>
    <span class="hidden sm:inline md:hidden">sm</span>
    <span class="hidden md:inline lg:hidden">md</span>
    <span class="hidden lg:inline xl:hidden">lg</span>
    <span class="hidden xl:inline 2xl:hidden">xl</span>
    <span class="hidden 2xl:inline">2xl</span>
  </div>
{/if}

{#if $navigating}
  <LoadingIndicator />
{/if}

<slot />
