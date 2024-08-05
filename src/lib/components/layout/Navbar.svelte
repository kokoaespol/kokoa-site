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

<nav class="flex items-center justify-between p-4">
	<img src={logo} alt="Logo de Kokoa" width="40" height="40" />
	<div class="flex gap-x-8 text-lg">
		{#each LINKS as { href, text } (href)}
			<a {href} class="relative font-bold hover:underline">
				<span
					aria-hidden="true"
					class="absolute -left-2 text-green-400 {current_path !== href ? 'hidden' : ''}"
				>
					{"{"}
				</span>
				{text}
				<span
					aria-hidden="true"
					class="absolute -right-2 text-green-400 {current_path !== href ? 'hidden' : ''}"
				>
					{"}"}
				</span>
			</a>
		{/each}
	</div>
</nav>
