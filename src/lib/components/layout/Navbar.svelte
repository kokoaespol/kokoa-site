<script lang="ts">
	import { page } from "$app/stores";
	import gecko_code from "$lib/assets/logos/gecko-code.svg";

	const current_path = $derived($page.url.pathname);

	let menuOpen = $state(false);

	const LINKS = [
		{ text: "Inicio", href: "/" },
		{ text: "Eventos", href: "/events" },
		{ text: "Proyectos", href: "/projects" },
		{ text: "Contacto", href: "/contact" },
		{ text: "Miembros", href: "/members" },
	];

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	const closeMenu = () => {
		menuOpen = false;
	};
</script>

<nav class="nav-background flex items-center justify-between p-4">
	<img src={gecko_code} alt="Logo de Kokoa" width="105.8" height="48.8" style="margin-left:5%" />
	<!-- Botón del menú hamburguesa en pantallas pequeñas -->
	<button class="hamburger" onclick={toggleMenu}>
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
	</button>
	<div class="links links relative z-10 flex gap-x-8 text-lg {menuOpen ? 'open' : ''}">
		{#each LINKS as { href, text } (href)}
			<a {href} class="relative font-fira hover:underline" onclick={closeMenu}>
				<span
					aria-hidden="true"
					class="absolute -left-3 text-lime-500 {current_path !== href ? 'hidden' : ''}"
				>
					{"{"}
				</span>
				{text}
				<span
					aria-hidden="true"
					class="absolute -right-3 text-lime-500 {current_path !== href ? 'hidden' : ''}"
				>
					{"}"}
				</span>
			</a>
		{/each}
	</div>
</nav>

<style>
	nav {
		position: relative;
		height: 150px;
		margin-bottom: 2%;
	}

	.nav-background {
		background-image: url("$lib/assets/forms/line.svg");
		background-repeat: no-repeat;
		top: 20px;
		background-size: 97% auto;
	}

	.links {
		margin-right: 70px;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 4px;
		cursor: pointer;
		background: none;
		border: none;
	}

	.hamburger .line {
		width: 25px;
		height: 3px;
		background-color: white;
	}

	/* Estilos para pantallas pequeñas */
	@media (max-width: 768px) {
		.links {
			position: fixed;
			inset: 0; /* El menú ocupará toda la pantalla */
			background-color: rgba(0, 0, 0, 0.9); /* Fondo oscuro para mayor visibilidad */
			z-index: 50; /* Asegurar que esté por delante de otros elementos */
			display: none; /* Ocultar por defecto */
			padding-top: 20px;
			flex-direction: column;
			align-items: center;
			height: auto;
			width: 100%;
		}

		nav img {
			margin-bottom: 5rem;
		}

		.links.open {
			display: flex; /* Mostrar el menú cuando esté abierto */
		}

		.hamburger {
			display: flex;
			margin-right: 20px;
			margin-bottom: 5rem;
		}
	}

	@media (min-width: 769px) {
		.links {
			display: flex;
			gap: 2.5rem;
		}
	}
</style>
