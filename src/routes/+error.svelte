<svelte:options runes />

<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import this_is_fine from "$lib/assets/images/this-is-fine-404.gif";
</script>

<CenterContainer class="py-6 sm:py-10">
	<section>
		<div class="mt-6 flex flex-col justify-center text-center">
			<h1 class="mb-6 font-fira text-4xl text-kokoa-lime1">Ups</h1>
		</div>
		<div class="flex w-full justify-center">
			<img class="h-auto w-full max-w-md" src={this_is_fine} alt="This is fine meme" />
		</div>
		<div class="mt-6 flex justify-center">
			<a
				href="/"
				class="inline-block rounded-full bg-kokoa-lime1 px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
			>
				Regresar a la página principal
			</a>
		</div>
	</section>
</CenterContainer>
