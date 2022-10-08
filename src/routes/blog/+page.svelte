<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<SectionHeader title="Blog">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore eos aliquam aspernatur
  deserunt! Eum reiciendis explicabo blanditiis ea aperiam? Odio vero voluptate quod consequatur sed
  delectus ea possimus odit?
</SectionHeader>

{#each data.posts as post}
  <h2>{post.title}</h2>
  <p>{post.description}</p>
{/each}
