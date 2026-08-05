<svelte:options runes />

<script lang="ts">
	import {
		GITHUB_HANDLE_KOKOA,
		INSTAGRAM_HANDLE_KOKOA,
		TWITTER_HANDLE_KOKOA,
		YOUTUBE_HANDLE_KOKOA,
	} from "$lib/constants";
	import { use_i18n } from "$lib/i18n/use.js";

	import gecko_code from "$lib/assets/logos/gecko-code.svg";
	import x from "$lib/assets/icons/x.svg";
	import instagram from "$lib/assets/icons/instagram.svg";
	import github from "$lib/assets/icons/github.svg";
	import youtube from "$lib/assets/icons/youtube.svg";
	import CenterContainer from "$lib/components/center-container.svelte";

	const { t, href } = use_i18n();
</script>

<footer>
	<CenterContainer class="py-6">
		<div
			class="mt-12 border-t border-white/10 pt-8 sm:mt-14 sm:flex sm:items-center sm:justify-between lg:mt-18"
		>
			<div class="flex gap-x-6 sm:order-3">
				<a
					rel="external"
					href="https://www.instagram.com/{INSTAGRAM_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
					target="_blank"
				>
					<img src={instagram} alt="Instagram" class="size-6 opacity-60" width="24" height="24" />
				</a>
				<a
					rel="external"
					href="https://x.com/{TWITTER_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
					target="_blank"
				>
					<img src={x} alt="X" class="size-6 opacity-60" width="24" height="24" />
				</a>
				<a
					rel="external"
					href="https://github.com/{GITHUB_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
					target="_blank"
				>
					<img src={github} alt="GitHub" class="size-6 opacity-60" width="24" height="24" />
				</a>
				<a
					rel="external"
					href="https://www.youtube.com/@{YOUTUBE_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
					target="_blank"
				>
					<img src={youtube} alt="YouTube" class="size-6 opacity-60" width="24" height="24" />
				</a>
			</div>
			<a href={href("/")} class="-m-1.5 p-1.5 sm:order-2">
				<img
					src={gecko_code}
					alt={t("common.logo_alt")}
					width="69.84"
					height="32"
					class="h-8 w-auto"
				/>
			</a>
			<p class="mt-8 text-sm/6 text-gray-400 sm:order-1 sm:mt-0">
				{t("footer.rights", { values: { year: String(new Date().getFullYear()) } })}
			</p>
		</div>
	</CenterContainer>
</footer>
