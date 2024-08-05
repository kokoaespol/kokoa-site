<script lang="ts">
	import { page } from "$app/stores";
	import logo from "$lib/assets/images/logo.png";

	const current_path = $derived($page.url.pathname);

	const LINKS = [
		{ text: "Inicio", href: "/" },
		{ text: "Eventos", href: "/events" },
		{ text: "Proyectos", href: "/projects" },
		{ text: "Contacto", href: "/contact" },
		{ text: "Miembros", href: "/members" },
	];
</script>

<nav class="relative flex items-center justify-between bg-black p-4">
	<div class="flex items-center">
		<img src={logo} alt="Logo" class="mr-4 h-10" />
	</div>
	<div class="flex space-x-8 text-lg text-white">
		{#each LINKS as { href, text }}
			<a {href} class="font-bold hover:underline">
				{#if current_path === href}
					<span class="text-green-400">{"{"}</span>
					<span>{text}</span>
					<span class="text-green-400">{"}"}</span>
				{:else}
					<span>{text}</span>
				{/if}
			</a>
		{/each}
	</div>
	<div class="absolute bottom-0 left-0 z-0 h-px w-full bg-green-500"></div>
</nav>
