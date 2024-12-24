<svelte:options runes />

<script lang="ts">
	import Heading from "$lib/components/layout/Heading.svelte";
	import { Facebook, Instagram, Mail, Youtube } from "lucide-svelte";
</script>

<Heading>CONTACTO</Heading>

<section
	class="ml-20 mr-16 mt-20 flex flex-col justify-between sm:flex-row md:flex-row lg:flex-row"
>
	<div>
		<p class="mb-7 max-w-[46rem] text-left lg:max-w-[40rem]">
			Mantente al día con todas nuestras novedades, proyectos y eventos especiales. Síguenos en:
		</p>
		<div class="flex flex-col gap-y-3 lg:gap-y-6">
			<a href="https://www.facebook.com/kokoaecuador" class="flex items-center gap-1 lg:gap-2">
				<Facebook class="h-[2.2rem] text-lime-400 lg:h-[2.3rem] lg:w-[2.3rem]" />
				<span class="sm:text-md md:text-md font-fira text-xs lg:text-lg">/kokoaecuador</span>
			</a>
			<a href="https://www.instagram.com/kokoa_espol" class="flex items-center gap-1 lg:gap-2">
				<Instagram class="h-[2.2rem] text-lime-400 lg:h-[2.3rem] lg:w-[2.3rem] " />
				<span class="sm:text-md md:text-md font-fira text-xs lg:text-lg">@kokoa_ espol</span>
			</a>
			<div class="flex items-center gap-1 lg:gap-2">
				<Mail class="h-[1.7rem] w-[1.5rem] text-lime-400 lg:h-[2.3rem] lg:w-[2.3rem]" />
				<span class="sm:text-md md:text-md font-fira text-xs lg:text-lg"
					>kokoa.espol.ec@gmail.com</span
				>
			</div>
			<a href="https://www.youtube.com/@kokoaespol1" class="flex items-center gap-1 lg:gap-2">
				<Youtube class="h-[2.2rem] w-[1.7rem] text-lime-400 lg:h-[2.4rem] lg:w-[2.4rem]" />
				<span class="sm:text-md md:text-md font-fira text-xs lg:text-lg"> @kokoaespol1</span>
			</a>
		</div>
	</div>
	<iframe
		class="mt-6 h-[200px] w-[200px] lg:mt-0 lg:h-[420px] lg:w-[580px]"
		title="Ubicacion de KOKOA Espol"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.3776303582385!2d-79.96626610996007!3d-2.145626979740355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d73023a73d1ff%3A0x53f531c1d0d9d78b!2sKOKOA%20Espol!5e0!3m2!1ses!2sec!4v1727035375687!5m2!1ses!2sec"
		style="border:0;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	>
	</iframe>
</section>
