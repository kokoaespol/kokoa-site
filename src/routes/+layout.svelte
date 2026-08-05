<script lang="ts">
	import "./layout.css";
	import { page } from "$app/state";
	import Footer from "$lib/components/layout/footer.svelte";
	import Navbar from "$lib/components/layout/navbar.svelte";
	import { DEFAULT_LOCALE, LOCALES, localize_path, parse_locale } from "$lib/i18n";
	import { use_i18n } from "$lib/i18n/use.js";
	import { fade } from "svelte/transition";

	let { children } = $props();

	const { t } = use_i18n();

	const title = $derived(
		page.data.title_key ? t(page.data.title_key) : (page.data.title ?? page.status),
	);
	const description = $derived(
		page.data.description_key ? t(page.data.description_key) : page.data.description,
	);

	/** Ruta actual sin prefijo de idioma, base de las alternativas por idioma. */
	const canonical_path = $derived(parse_locale(page.url.pathname).path);

	function alternate_url(locale: (typeof LOCALES)[number]) {
		return new URL(localize_path(canonical_path, locale), page.url.origin).href;
	}

	// En SSR el `lang` lo pone el hook del servidor; al cambiar de idioma sin
	// recargar hay que actualizarlo aquí o se queda con el anterior.
	$effect(() => {
		document.documentElement.lang = page.data.locale;
	});
</script>

<svelte:head>
	<title>{title} - KOKOA</title>
	<meta name="description" content={description} />
	{#each LOCALES as locale (locale)}
		<link rel="alternate" hreflang={locale} href={alternate_url(locale)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={alternate_url(DEFAULT_LOCALE)} />
</svelte:head>

<Navbar />
<main class="flex-1">
	{#key page.url.pathname}
		<div in:fade={{ duration: 150 }}>
			{@render children()}
		</div>
	{/key}
</main>
<Footer />
