<script>
	import { Bot, Cpu, SquareCode, SquareTerminal } from "lucide-svelte";
	import Title from "$lib/components/Title.svelte";
</script>

<section class="bg-gray-900 py-12 text-white lg:py-20">
	<div class="flex flex-col justify-between lg:flex-row">
		<div>
			<Title title="Chocáreas" />
			<p
				class="text-md mb-6 ml-4 mt-3 text-center text-white sm:text-left md:text-left lg:text-left"
			>
				Conoce nuestras áreas de trabajo
			</p>
		</div>

		<div class="mr-10 grid grid-cols-2 gap-x-12 gap-y-12 lg:mt-10 lg:gap-x-20 lg:gap-y-16">
			<div class="flex items-center">
				<div class="mr-1 rounded-md p-2">
					<Cpu class="h-12 w-12 text-lime-500 lg:h-20 lg:w-20" />
				</div>
				<h3 class="font-fira text-sm lg:text-lg">Electrónica</h3>
			</div>

			<div class="flex items-center">
				<div class="mr-1 rounded-md p-2">
					<Bot class="h-12 w-12 text-lime-500 lg:h-20 lg:w-20" />
				</div>
				<h3 class="font-fira text-sm lg:text-lg">Hacking ético</h3>
			</div>

			<div class="flex items-center">
				<div class="mr-1 rounded-md p-2">
					<SquareCode class="h-12 w-12 text-lime-500 lg:h-20 lg:w-20" />
				</div>
				<h3 class="font-fira text-sm lg:text-lg">Desarrollo web y móvil</h3>
			</div>

			<div class="flex items-center">
				<div class="mr-1 rounded-md p-2">
					<SquareTerminal class="h-12 w-12 text-lime-500 lg:h-20 lg:w-20" />
				</div>
				<h3 class="font-fira text-sm lg:text-lg">Programación de sistemas</h3>
			</div>
		</div>
	</div>
</section>
