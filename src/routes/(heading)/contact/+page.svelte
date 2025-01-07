<svelte:options runes />

<script lang="ts">
	import CenterContainer from "$lib/components/center-container.svelte";
	import {
		EMAIL_KOKOA,
		FACEBOOK_HANDLE_KOKOA,
		GITHUB_HANDLE_KOKOA,
		INSTAGRAM_HANDLE_KOKOA,
		TWITTER_HANDLE_KOKOA,
		YOUTUBE_HANDLE_KOKOA,
	} from "$lib/constants";

	import facebook from "$lib/assets/icons/facebook-green.svg";
	import x from "$lib/assets/icons/x-green.svg";
	import instagram from "$lib/assets/icons/instagram-green.svg";
	import github from "$lib/assets/icons/github-green.svg";
	import youtube from "$lib/assets/icons/youtube-green.svg";
	import { Mail } from "lucide-svelte";
</script>

<CenterContainer class="grid gap-6 py-12 md:grid-cols-2">
	<div>
		<p class="font-fira font-medium">
			Mantente al día con todas nuestras novedades, proyectos y eventos especiales. Síguenos en:
		</p>
		<ul class="mt-7 flex flex-col gap-y-3 font-fira">
			<li>
				<a
					class="grid grid-cols-[36px_minmax(0px,1fr)] items-center gap-x-3"
					rel="external"
					href="https://github.com/{GITHUB_HANDLE_KOKOA}"
				>
					<img src={github} alt="GitHub" class="size-9" width="24" height="24" />
					/{GITHUB_HANDLE_KOKOA}
				</a>
			</li>
			<li>
				<a
					class="grid grid-cols-[36px_minmax(0px,1fr)] items-center gap-x-3"
					rel="external"
					href="https://www.facebook.com/{FACEBOOK_HANDLE_KOKOA}"
				>
					<img src={facebook} alt="Facebook" class="size-9" width="24" height="24" />
					/{FACEBOOK_HANDLE_KOKOA}
				</a>
			</li>
			<li>
				<a
					class="grid grid-cols-[36px_minmax(0px,1fr)] items-center gap-x-3"
					rel="external"
					href="https://www.instagram.com/{INSTAGRAM_HANDLE_KOKOA}"
				>
					<img src={instagram} alt="Instagram" class="size-9" width="24" height="24" />
					@{INSTAGRAM_HANDLE_KOKOA}
				</a>
			</li>
			<li>
				<a
					class="grid grid-cols-[36px_minmax(0px,1fr)] items-center gap-x-3"
					rel="external"
					href="https://x.com/{TWITTER_HANDLE_KOKOA}"
				>
					<img src={x} alt="X" class="size-9" width="24" height="24" />
					@{TWITTER_HANDLE_KOKOA}
				</a>
			</li>
			<li>
				<a
					class="grid grid-cols-[36px_minmax(0px,1fr)] items-center gap-x-3"
					rel="external"
					href="https://youtube.com/@{YOUTUBE_HANDLE_KOKOA}"
				>
					<img src={youtube} alt="YouTube" class="size-9" width="24" height="24" />
					@{YOUTUBE_HANDLE_KOKOA}
				</a>
			</li>
			<li>
				<a
					class="grid grid-cols-[36px_minmax(0px,1fr)] items-center gap-x-3"
					href="mailto:{EMAIL_KOKOA}"
				>
					<Mail class="size-9 text-lime-400" aria-hidden="true" />
					{EMAIL_KOKOA}
				</a>
			</li>
		</ul>
	</div>
	<iframe
		class="min-h-96 w-full"
		title="Ubicacion de KOKOA Espol"
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996.7554770772733!2d-79.9661!3d-2.145295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d73023a73d1ff%3A0x53f531c1d0d9d78b!2sKOKOA%20Espol!5e0!3m2!1ses!2sec!4v1736260097351!5m2!1ses!2sec"
		allowfullscreen
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
</CenterContainer>
