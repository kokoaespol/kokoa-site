<script lang="ts">
  import UnirseOrange from "$lib/components/UnirseOrange.svelte";
</script>

<section class="lg:relative">
  <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32">
    <div class="ml-auto px-4 sm:px-8 lg:w-1/2 xl:pl-16">
      <h1 class="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span class="block xl:inline">Kokoa Ipsum</span>
        <span class="block text-orange-400 xl:inline">dolor</span>
      </h1>
      <p class="sm:text-md mx-auto mt-3 max-w-md md:mt-5 md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <UnirseOrange href="/registro" class="mt-9">Unirse</UnirseOrange>
    </div>
  </div>
  <div
    class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
  >
    <div class="absolute inset-0 h-full w-full bg-zinc-500 object-cover lg:rounded-r-[3rem]" />
  </div>
</section>
