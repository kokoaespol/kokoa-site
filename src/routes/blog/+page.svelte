<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<SectionHeader title="Blog" />
{#if data.posts && data.posts.length}
  {#each data.posts as post}
    <h2>{post.title}</h2>
    <p>{post.description}</p>
  {/each}
{:else}
  <div class="flex justify-center">
    <img class="mt-4" src="src/lib/assets/gif/tumbleweed.gif" alt="no posts here" />
  </div>
{/if}
