<script lang="ts">
  export let title: string;
</script>

<div class="relative bg-green-kokoa-500">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-green-300 mix-blend-multiply" aria-hidden="true" />
  </div>
  <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <h1
      class="text-4xl font-bold tracking-tight text-white before:text-green-kokoa-600 before:content-['>'] sm:text-5xl lg:text-6xl"
    >
      {title}
    </h1>
    <p class="mt-6 max-w-3xl text-xl text-indigo-100">
      <slot />
    </p>
  </div>
</div>
