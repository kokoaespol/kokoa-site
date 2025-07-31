<script lang="ts">
	import Card from "$lib/components/card.svelte";
	import CenterContainer from "$lib/components/center-container.svelte";
	import Tag from "$lib/components/tag.svelte";

	let { data } = $props();
	const photos = import.meta.glob("$lib/assets/members/*", {
		eager: true,
		import: "default",
	});

	function get_stack_icon_url(tech: string): string {
		// Mapeo de tecnologías a iconos de iconify (usando el color verde de la página)
		const iconMapping: Record<string, string> = {
			// Esta funcion por el momento es ineficiente, pero es la unica manera que encontre
			// de usar todos los iconos que puse en el forms sin tener que instalar dependencias o imagenes
			svelte: "simple-icons:svelte",
			vue: "simple-icons:vuedotjs",
			react: "simple-icons:react",
			angular: "simple-icons:angular",
			typescript: "simple-icons:typescript",
			javascript: "simple-icons:javascript",
			python: "simple-icons:python",
			rust: "simple-icons:rust",
			java: "simple-icons:openjdk",
			php: "simple-icons:php",
			c: "simple-icons:c",
			cpp: "simple-icons:cplusplus",
			nodejs: "simple-icons:nodedotjs",
			nextjs: "simple-icons:nextdotjs",
			flask: "simple-icons:flask",
			bootstrap: "simple-icons:bootstrap",
			tailwindcss: "simple-icons:tailwindcss",
			html: "simple-icons:html5",
			css: "simple-icons:css3",
			figma: "simple-icons:figma",
			canva: "simple-icons:canva",
			ps: "simple-icons:adobephotoshop",
			ai: "simple-icons:adobeillustrator",
			ae: "simple-icons:adobeaftereffects",
			sketch: "simple-icons:sketch",
			inkscape: "simple-icons:inkscape",
			arduino: "simple-icons:arduino",
			raspberrypi: "simple-icons:raspberrypi",
			proteus: "simple-icons:proteus",
			kicad: "simple-icons:kicad",
			unity: "simple-icons:unity",
			blender: "simple-icons:blender",
			solidworks: "simple-icons:solidworks",
			fusion360: "simple-icons:autodesk",
			plc: "material-symbols:memory",
		};

		//En caso de no encontrarse un icono
		const iconName = iconMapping[tech] || "simple-icons:?";

		// Trate de usar el color verde de kokoa
		return `https://api.iconify.design/${iconName}.svg?color=%236dd743`;
	}

	function get_photo(path: string) {
		const photo = photos[`/src/lib/assets${path}`];
		if (typeof photo !== "string") throw new Error("Invalid member photo path");
		return photo;
	}
</script>

<CenterContainer class="py-22">
	<div class="mx-auto grid max-w-7xl auto-rows-min gap-4 px-4 md:grid-cols-4">
		<div class="p-4 md:col-span-2 md:row-span-3">
			<div
				class="group relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-full"
			>
				<img
					class="h-full w-full object-cover"
					src={get_photo(data.member.photo)}
					alt={data.member.name}
				/>
			</div>
		</div>

		<div class="p-4 md:col-span-2">
			<h2 class="mb-4 font-fira text-xl font-semibold">{data.member.name}</h2>
			<p class="whitespace-pre-line">{data.member.description}</p>
		</div>

		{#if data.member.stack.length > 0}
			<div class="p-4 md:col-span-2">
				<h3 class="mb-4 font-fira text-xl font-semibold">Stack</h3>
				<div class="mt-4 flex flex-wrap gap-4">
					{#each data.member.stack as tech (tech)}
						<img src={get_stack_icon_url(tech)} alt={tech} class="h-8" />
					{/each}
				</div>
			</div>
		{/if}

		{#if data.member.interests.length > 0}
			<div class="p-4 md:col-span-2">
				<h3 class="mb-4 font-fira text-xl font-semibold">Áreas de interés</h3>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each data.member.interests as interest (interest)}
						<Tag category={interest} />
					{/each}
				</div>
			</div>
		{/if}
	</div>
</CenterContainer>

{#if data.member_projects.length > 0}
	<CenterContainer class="py-12">
		<h2 class="mb-4 font-fira text-xl font-semibold">Proyectos</h2>
		<ul
			role="list"
			class="mx-auto mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data.member_projects as project (project.id)}
				<Card
					route="/projects/{project.id}"
					date={project.term}
					name={project.name}
					categories={project.categories}
					description={project.description}
				/>
			{/each}
		</ul>
	</CenterContainer>
{/if}
