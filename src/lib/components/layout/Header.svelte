<script lang="ts">
  import { fade } from "svelte/transition";
  import { Popover, PopoverButton, PopoverPanel } from "@rgossiaux/svelte-headlessui";
  import Icon from "$lib/components/Icon.svelte";
  import menu from "$lib/assets/icons/menu.svg?raw";
  import x from "$lib/assets/icons/x.svg?raw";
  import ButtonPrimary from "$lib/components/ButtonPrimary.svelte";
  import { page } from "$app/stores";
  import choconavimg from "$lib/assets/logos/kokoa-nav.svg?raw";

  const navigation = [
    { text: "Home", url: "/" },
    { text: "Blog", url: "/blog" },
    { text: "Proyectos", url: "/proyectos" },
    { text: "Miembros", url: "/miembros" },
    { text: "Eventos", url: "/eventos" },
  ];
</script>

<Popover class="relative">
  <div class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
    <div class="flex justify-start lg:w-0 lg:flex-1">
      <a href="/">
        <span class="sr-only">Kokoa</span>
        <Icon data={choconavimg} aria-hidden="true" height="40" width="40" />
      </a>
    </div>
    <div class="-my-2 -mr-2 md:hidden">
      <PopoverButton
        class="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
      >
        <span class="sr-only">Open menu</span>
        <Icon data={menu} fill="currentColor" aria-hidden="true" />
      </PopoverButton>
    </div>
    <nav class="group hidden space-x-10 md:flex">
      {#each navigation as item}
        <a
          class="{$page.url.pathname == item.url
            ? 'text-base font-medium text-zinc-100 before:text-green-kokoa-500 before:content-["<"] after:text-green-kokoa-500 after:content-["/>"]'
            : 'text-base font-medium text-zinc-400 hover:text-zinc-300'} text-base font-medium text-zinc-300 hover:text-zinc-200 hover:before:text-green-kokoa-500 hover:before:content-['<'] hover:after:text-green-kokoa-500 hover:after:content-['/>']"
          href={item.url}
        >
          {item.text}
        </a>
      {/each}
    </nav>

    <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <a
        href="/login"
        class="whitespace-nowrap text-base font-medium text-zinc-300 hover:text-zinc-100"
      >
        Ingresa
      </a>
      <ButtonPrimary href="/registro" class="ml-8">Unirse</ButtonPrimary>
    </div>
  </div>

  <PopoverPanel
    focus
    class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
  >
    <div
      transition:fade={{ duration: 100 }}
      class="divide-y-2 divide-zinc-600 rounded-lg bg-zinc-800 shadow-lg ring-1 ring-white ring-opacity-5"
    >
      <div class="px-5 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="aspect-square h-8 bg-zinc-500" />
          </div>
          <div class="-mr-2">
            <PopoverButton
              class="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span class="sr-only">Close menu</span>
              <Icon data={x} fill="currentColor" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
      </div>
      <div class="py-6 px-5">
        <div class="grid grid-cols-2 gap-4">
          {#each navigation as item}
            <a href={item.url} class="text-base font-medium text-zinc-300 hover:text-zinc-100">
              {item.text}
            </a>
          {/each}
        </div>
        <div class="mt-6">
          <a
            href="/registro"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-400 px-4 py-2 text-base font-medium text-zinc-800 shadow-sm hover:bg-orange-500"
          >
            Unirse
          </a>
          <p class="mt-6 text-center text-base font-medium text-zinc-500">
            ¿Ya eres miembro?
            <a href="/login" class="text-orange-400 hover:text-orange-500">Ingresa</a>
          </p>
        </div>
      </div>
    </div>
  </PopoverPanel>
</Popover>
