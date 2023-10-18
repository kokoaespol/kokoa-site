<script lang="ts">
  import chevron_down from "$lib/assets/icons/chevron-down.svg?raw";
  import facebook from "$lib/assets/icons/facebook.svg?raw";
  import instagram from "$lib/assets/icons/instagram.svg?raw";
  import twitter from "$lib/assets/icons/twitter.svg?raw";
  import github from "$lib/assets/icons/github.svg?raw";
  import chocomascot from "$lib/assets/logos/mascota.svg";

  import Icon from "../Icon.svelte";
  const navigation = {
    social: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/kokoaecuador/",
        icon: facebook,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/kokoa_espol/",
        icon: instagram,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/kokoa_espol",
        icon: twitter,
      },
      {
        name: "GitHub",
        url: "https://github.com/kokoaespol",
        icon: github,
      },
    ],
  };
</script>

<footer
  aria-labelledby="footer-heading"
  class="relative flex flex-col items-center border-t-[0.08rem] border-t-zinc-400 p-4 align-middle"
>
  <h2 id="footer-heading" class="sr-only">Pié de página</h2>
  <small class="mt-8 text-base md:order-1 md:mt-0"> &copy; 2023 Kokoa. All rights reserved. </small>
  <ul class="mt-2 flex space-x-6 md:order-2">
    {#each navigation.social as item (item.name)}
      <a href={item.url} rel="external" class="text-zinc-400 hover:text-secondary-400">
        <span class="sr-only">{item.name}</span>
        <Icon data={item.icon} fill="currentColor" aria-hidden="true" />
      </a>
    {/each}
  </ul>
  <address>haksdja</address>
</footer>
