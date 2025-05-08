<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
</script>

<CenterContainer class="py-6 sm:py-10">
	<section>
		<div class="mt-6 flex flex-col justify-center text-center">
			<h1 class="mb-6 font-fira text-4xl text-green">Ups</h1>
		</div>
		<div class="flex w-full justify-center">
			<img class="h-auto w-full max-w-md" src="/error/this-is-fine-404.gif" alt="This is fine" />
		</div>
		<div class="mt-6 flex justify-center">
			<a
				href="/"
				class="inline-block rounded-full bg-green px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
			>
				Regresar a la página principal
			</a>
		</div>
	</section>
</CenterContainer>
