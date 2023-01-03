<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import tumbleweed from "$lib/assets/gif/tumbleweed.gif";
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
    <img class="mt-4" src={tumbleweed} alt="no posts here" />
  </div>
{/if}
