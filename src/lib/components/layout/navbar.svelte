<script lang="ts">
	import { page } from "$app/state";
	import gecko_code from "$lib/assets/logos/gecko-code.svg";
	import { Dialog } from "bits-ui";
	import { Menu, X } from "lucide-svelte";
	import { fade, fly } from "svelte/transition";
	import CenterContainer from "../center-container.svelte";

	const current_path = $derived(page.url.pathname);

	const LINKS = [
		{ text: "Inicio", href: "/" },
		{ text: "Eventos", href: "/events" },
		{ text: "Proyectos", href: "/projects" },
		{ text: "Contacto", href: "/contact" },
		{ text: "Miembros", href: "/members" },
	];

	let menu_open = $state(false);
</script>

<header>
	<Dialog.Root preventScroll={false} bind:open={menu_open}>
		<CenterContainer tag="nav" class="flex items-center justify-between py-6">
			<a href="/" class="-m-1.5 p-1.5">
				<img src={gecko_code} alt="Logo de Kokoa" width="69.84" height="32" class="h-8 w-auto" />
			</a>
			<Dialog.Trigger
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50 md:hidden"
			>
				<span class="sr-only">Abrir menú principal</span>
				<Menu />
			</Dialog.Trigger>
			<div class="hidden md:flex md:gap-x-6">
				{#each LINKS as link}
					<a
						href={link.href}
						class={[
							"font-fira text-base/6 font-semibold text-gray-100 before:content-['{'] after:content-['}']",
							current_path === link.href
								? "before:text-lime-500  after:text-lime-500"
								: "before:text-transparent  after:text-transparent",
						]}
					>
						<span class="hover:underline">{link.text}</span>
					</a>
				{/each}
			</div>
		</CenterContainer>
		<Dialog.Portal class="lg:hidden">
			<Dialog.Overlay
				transition={fade}
				transitionConfig={{ duration: 150 }}
				class="fixed inset-0 z-10 bg-gray-900/80"
			/>

			<Dialog.Content
				transition={fly}
				transitionConfig={{ x: 100, duration: 150 }}
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5" onclick={() => (menu_open = false)}>
						<img
							src={gecko_code}
							alt="Logo de Kokoa"
							width="69.84"
							height="32"
							class="h-8 w-auto"
						/>
					</a>
					<Dialog.Close class="-m-2.5 rounded-md p-2.5 text-gray-50">
						<span class="sr-only">Cerrar menú</span>
						<X />
					</Dialog.Close>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 space-y-2 py-6">
						{#each LINKS as link}
							<a
								href={link.href}
								class={[
									"-mx-3 block rounded-lg px-3 py-2 font-fira text-base/7 font-semibold text-gray-100 before:content-['{'] after:content-['}'] hover:bg-gray-900",
									current_path === link.href
										? "before:text-lime-500  after:text-lime-500"
										: "before:text-transparent  after:text-transparent",
								]}
								onclick={() => (menu_open = false)}
							>
								{link.text}
							</a>
						{/each}
					</div>
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
</header>
