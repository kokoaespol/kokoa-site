<script lang="ts">
  import chevron_down from "$lib/assets/icons/chevron-down.svg?raw";
  import facebook from "$lib/assets/icons/facebook.svg?raw";
  import instagram from "$lib/assets/icons/instagram.svg?raw";
  import twitter from "$lib/assets/icons/twitter.svg?raw";
  import github from "$lib/assets/icons/github.svg?raw";
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

<footer aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Pié de página</h2>
  <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
      <div class="mt-12 xl:mt-0">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-zinc-400">Idioma</h3>
        <form class="mt-4 sm:max-w-xs">
          <fieldset class="w-full">
            <label for="language" class="sr-only">Idioma</label>
            <div class="relative">
              <select
                id="language"
                name="language"
                class="block w-full appearance-none rounded-md border border-transparent bg-zinc-700 bg-none py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-white sm:text-sm"
              >
                <option selected>Español</option>
                <option>English</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <Icon data={chevron_down} fill="currentColor" />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div class="border-t border-zinc-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Subscríbete a nuestro boletín
        </h3>
        <p class="mt-2 text-base text-zinc-300">Conoce las noticias más recientes de Kokoa</p>
      </div>
      <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
        <label for="email-address" class="sr-only">Correo</label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          class="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-zinc-900 placeholder-zinc-500 focus:border-white focus:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 sm:max-w-xs"
          placeholder="Ingresa tu correo"
        />
        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-base font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-800"
          >
            Subscríbete
          </button>
        </div>
      </form>
    </div>
    <div class="mt-8 border-t border-zinc-700 pt-8 md:flex md:items-center md:justify-between">
      <div class="flex space-x-6 md:order-2">
        {#each navigation.social as item (item.name)}
          <a href={item.url} class="text-zinc-400 hover:text-zinc-300">
            <span class="sr-only">{item.name}</span>
            <Icon data={item.icon} fill="currentColor" aria-hidden="true" />
          </a>
        {/each}
      </div>
      <p class="mt-8 text-base text-zinc-400 md:order-1 md:mt-0">
        &copy; 2022 Kokoa. All rights reserved.
      </p>
    </div>
  </div>
</footer>
