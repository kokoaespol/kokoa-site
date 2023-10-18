<script lang="ts">
  import { siteConfig } from "$lib/config/site";
  import { page } from "$app/stores";
</script>

<nav class="mt-10 w-full">
  <ul class="flex items-center justify-evenly gap-6">
    {#each siteConfig.mainNav as link}
      <li class="flex flex-col items-center">
        <a
          class="{$page.url.pathname == link.href
            ? 'text-base text-secondary-700 dark:text-secondary-500'
            : 'text-base hover:text-secondary-400'} text-lg !font-medium uppercase"
          href={link.href}
        >
          {link.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>
