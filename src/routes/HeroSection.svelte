<script lang="ts">
  import ButtonPrimary from "$lib/components/ButtonPrimary.svelte";
</script>

<section class="lg:relative">
  <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32">
    <div class="ml-auto px-4 sm:px-8 lg:w-1/2 xl:pl-16">
      <h1 class="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-5xl xl:text-4xl">
        <span class="block text-green-kokoa-500 xl:inline">Kokoa</span>
        <span class="block xl:inline">- Vive el software libre</span>
      </h1>
      <p class="sm:text-md mx-auto mt-3 max-w-md md:mt-5 md:max-w-3xl">
        Club estudiantil politécnico promotor del uso, modificación, distribución y aprendizaje de
        software libre.
      </p>
      <ButtonPrimary href="/registro" class="mt-9">Unirse</ButtonPrimary>
    </div>
  </div>
  <div
    class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
  >
    <div class="absolute inset-0 h-full w-full bg-zinc-500 object-cover lg:rounded-r-[3rem]" />
  </div>
</section>
