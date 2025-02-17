<svelte:options runes />

<script lang="ts">
	import {
		FACEBOOK_HANDLE_KOKOA,
		GITHUB_HANDLE_KOKOA,
		INSTAGRAM_HANDLE_KOKOA,
		TWITTER_HANDLE_KOKOA,
		YOUTUBE_HANDLE_KOKOA,
	} from "$lib/constants";

	import mascota from "$lib/assets/logos/mascota.png";

	import facebook from "$lib/assets/icons/facebook.svg";
	import x from "$lib/assets/icons/x.svg";
	import instagram from "$lib/assets/icons/instagram.svg";
	import github from "$lib/assets/icons/github.svg";
	import youtube from "$lib/assets/icons/youtube.svg";
	import CenterContainer from "$lib/components/center-container.svelte";
</script>

<footer>
	<CenterContainer class="py-6">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div class="hidden sm:block sm:self-center lg:col-span-2">
				<img
					src={mascota}
					alt="Mascota"
					class="aspect-square w-40 object-contain"
					width="160"
					height="160"
					loading="lazy"
				/>
			</div>
			<div>
				<h3 class="text-sm/6 font-semibold text-white">Subscribe to our newsletter</h3>
				<p class="mt-2 text-sm/6 text-gray-300">
					The latest news, articles, and resources, sent to your inbox weekly.
				</p>
				<form class="mt-6 sm:flex sm:max-w-md">
					<label for="email-address" class="sr-only">Email address</label>
					<input
						type="email"
						name="email-address"
						id="email-address"
						autocomplete="email"
						required
						class="form-input w-full min-w-0 rounded-md bg-white/5 py-1.5 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600 sm:w-64 sm:text-sm/6 xl:w-full"
						placeholder="Enter your email"
					/>
					<div class="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
						<button
							type="submit"
							class="flex w-full items-center justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
						>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</div>
		<div
			class="mt-12 border-t border-white/10 pt-8 sm:mt-14 sm:flex sm:items-center sm:justify-between lg:mt-18"
		>
			<div class="flex gap-x-6 sm:order-2">
				<a
					rel="external"
					href="https://www.facebook.com/{FACEBOOK_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
				>
					<img src={facebook} alt="Facebook" class="size-6 opacity-60" width="24" height="24" />
				</a>
				<a
					rel="external"
					href="https://www.instagram.com/{INSTAGRAM_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
				>
					<img src={instagram} alt="Instagram" class="size-6 opacity-60" width="24" height="24" />
				</a>
				<a
					rel="external"
					href="https://x.com/{TWITTER_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
				>
					<img src={x} alt="X" class="size-6 opacity-60" width="24" height="24" />
				</a>
				<a
					rel="external"
					href="https://github.com/{GITHUB_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
				>
					<img src={github} alt="GitHub" class="size-6 opacity-60" width="24" height="24" />
				</a>
				<a
					rel="external"
					href="https://www.youtube.com/@{YOUTUBE_HANDLE_KOKOA}"
					class="text-gray-400 hover:text-gray-300"
				>
					<img src={youtube} alt="YouTube" class="size-6 opacity-60" width="24" height="24" />
				</a>
			</div>
			<p class="mt-8 text-sm/6 text-gray-400 sm:order-1 sm:mt-0">
				&copy; 2025 Kokoa. All rights reserved.
			</p>
		</div>
	</CenterContainer>
</footer>
