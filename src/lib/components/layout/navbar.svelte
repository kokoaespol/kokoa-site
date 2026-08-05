<script lang="ts">
	import { page } from "$app/state";
	import type { Pathname } from "$app/types";
	import gecko_code from "$lib/assets/logos/gecko-code.svg";
	import { LOCALES, parse_locale } from "$lib/i18n";
	import { use_i18n } from "$lib/i18n/use.js";
	import { Dialog } from "bits-ui";
	import { Menu, X } from "@lucide/svelte";
	import { fade, fly } from "svelte/transition";
	import CenterContainer from "../center-container.svelte";

	// `locale` es un getter reactivo, así que se accede por `i18n.locale` (al
	// desestructurarlo se congelaría el valor inicial).
	const i18n = use_i18n();
	const { t, href, href_in } = i18n;

	/** Ruta actual sin prefijo de idioma: es la que se compara con los links. */
	const current_path = $derived(parse_locale(page.url.pathname).path);

	const LINKS = [
		{ key: "nav.home", href: "/" },
		{ key: "nav.about", href: "/about-us" },
		{ key: "nav.events", href: "/events" },
		{ key: "nav.projects", href: "/projects" },
		{ key: "nav.members", href: "/members" },
		{ key: "nav.contact", href: "/contact" },
	] satisfies { key: string; href: Pathname }[];

	let menu_open = $state(false);

	/** Retraso al salir de un link: evita el parpadeo si el mouse vuelve a entrar enseguida. */
	const HOVER_LEAVE_DELAY_MS = 300;

	let hovered_href = $state<Pathname | null>(null);
	let link_els: Partial<Record<Pathname, HTMLAnchorElement>> = $state({});
	let indicator_left = $state(0);
	let indicator_width = $state(0);
	let indicator_animate = $state(false);
	let has_positioned = false;
	let leave_timeout: ReturnType<typeof setTimeout> | undefined;

	const active_href = $derived(LINKS.find((l) => l.href === current_path)?.href ?? null);
	/** Link que debe llevar las llaves: el del hover, o el activo si no hay hover. */
	const target_href = $derived(hovered_href ?? active_href);
	const is_hovering_elsewhere = $derived(hovered_href !== null && hovered_href !== active_href);

	function handle_mouseenter(href: Pathname) {
		clearTimeout(leave_timeout);
		hovered_href = href;
	}

	function handle_mouseleave() {
		clearTimeout(leave_timeout);
		leave_timeout = setTimeout(() => (hovered_href = null), HOVER_LEAVE_DELAY_MS);
	}

	function measure_indicator() {
		const el = target_href ? link_els[target_href] : undefined;
		if (!el) return false;
		indicator_left = el.offsetLeft;
		indicator_width = el.offsetWidth;
		return true;
	}

	$effect(() => {
		// La primera medición debe ser instantánea; recién después se anima el movimiento.
		if (measure_indicator() && !has_positioned) {
			has_positioned = true;
			requestAnimationFrame(() => (indicator_animate = true));
		}
	});

	$effect(() => {
		window.addEventListener("resize", measure_indicator);
		return () => window.removeEventListener("resize", measure_indicator);
	});

	$effect(() => {
		return () => clearTimeout(leave_timeout);
	});
</script>

{#snippet language_switch(class_name: string)}
	<div class={["flex items-center gap-x-2 font-fira text-sm font-semibold", class_name]}>
		<span class="sr-only">{t("nav.language")}</span>
		{#each LOCALES as option, i (option)}
			{#if i > 0}
				<span aria-hidden="true" class="text-gray-600">/</span>
			{/if}
			<a
				href={href_in(option)}
				hreflang={option}
				aria-current={option === i18n.locale ? "true" : undefined}
				class={option === i18n.locale ? "text-lime-500" : "text-gray-400 hover:text-gray-100"}
				onclick={() => (menu_open = false)}
			>
				{option.toUpperCase()}
			</a>
		{/each}
	</div>
{/snippet}

<header>
	<Dialog.Root bind:open={menu_open}>
		<CenterContainer tag="nav" class="flex items-center justify-between py-6">
			<a href={href("/")} class="-m-1.5 p-1.5">
				<img
					src={gecko_code}
					alt={t("common.logo_alt")}
					width="69.84"
					height="32"
					class="h-8 w-auto"
				/>
			</a>
			<Dialog.Trigger
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50 md:hidden"
			>
				<span class="sr-only">{t("nav.open_menu")}</span>
				<Menu />
			</Dialog.Trigger>
			<div class="hidden items-center gap-x-6 md:flex">
				<div class="relative flex gap-x-6">
					{#each LINKS as link (link.href)}
						<a
							href={href(link.href)}
							bind:this={link_els[link.href]}
							onmouseenter={() => handle_mouseenter(link.href)}
							onmouseleave={handle_mouseleave}
							class={[
								"font-fira text-base/6 font-semibold text-gray-100",
								// La activa cede sus llaves al indicador flotante y se queda con corchetes.
								link.href === active_href && is_hovering_elsewhere
									? "before:content-['['] after:content-[']']"
									: "before:content-['{'] after:content-['}']",
								link.href === active_href
									? "before:text-lime-500 after:text-lime-500"
									: "before:text-transparent after:text-transparent",
							]}
						>
							<span class="hover:underline">{t(link.key)}</span>
						</a>
					{/each}

					<div
						aria-hidden="true"
						class={[
							"pointer-events-none absolute inset-y-0 flex items-center justify-between font-fira text-base/6 font-semibold text-lime-500",
							is_hovering_elsewhere ? "opacity-100" : "opacity-0",
							indicator_animate && "transition-[transform,width,opacity] ease-out",
							// El regreso a la activa es un poco más lento que la ida al hover.
							indicator_animate && (is_hovering_elsewhere ? "duration-200" : "duration-[350ms]"),
						]}
						style="width: {indicator_width}px; transform: translateX({indicator_left}px)"
					>
						<span>&#123;</span>
						<span>&#125;</span>
					</div>
				</div>

				{@render language_switch("")}
			</div>
		</CenterContainer>

		<Dialog.Portal>
			<Dialog.Overlay forceMount class="fixed inset-0 z-10 bg-gray-900/80">
				{#snippet child({ props, open })}
					{#if open}
						<div {...props} transition:fade={{ duration: 150 }}></div>
					{/if}
				{/snippet}
			</Dialog.Overlay>

			<Dialog.Content
				preventScroll={false}
				forceMount
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				{#snippet child({ props, open })}
					{#if open}
						<div {...props} transition:fly={{ x: 100, duration: 150 }}>
							<div class="flex items-center justify-between">
								<a href={href("/")} class="-m-1.5 p-1.5" onclick={() => (menu_open = false)}>
									<img
										src={gecko_code}
										alt={t("common.logo_alt")}
										width="69.84"
										height="32"
										class="h-8 w-auto"
									/>
								</a>
								<Dialog.Close class="-m-2.5 rounded-md p-2.5 text-gray-50">
									<span class="sr-only">{t("nav.close_menu")}</span>
									<X />
								</Dialog.Close>
							</div>
							<div class="mt-6 flow-root">
								<div class="-my-6 space-y-2 py-6">
									{#each LINKS as link (link.href)}
										<a
											href={href(link.href)}
											class={[
												"-mx-3 block rounded-lg px-3 py-2 font-fira text-base/7 font-semibold text-gray-100 before:content-['{'] after:content-['}'] hover:bg-gray-900",
												current_path === link.href
													? "before:text-lime-500  after:text-lime-500"
													: "before:text-transparent  after:text-transparent",
											]}
											onclick={() => (menu_open = false)}
										>
											{t(link.key)}
										</a>
									{/each}

									{@render language_switch("mt-4 border-t border-white/10 pt-6")}
								</div>
							</div>
						</div>
					{/if}
				{/snippet}
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
</header>
