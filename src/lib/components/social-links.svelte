<script lang="ts">
	import github from "$lib/assets/icons/github.svg";
	import linkedin from "$lib/assets/icons/linkedin.svg";
	import { Link } from "@lucide/svelte";
	import { twMerge } from "tailwind-merge";

	type Props = {
		social_media: { nombre: string; link: string }[];
		class?: string;
	};
	let { social_media, class: class_name }: Props = $props();
</script>

{#if social_media.length > 0}
	<ul role="list" class={twMerge("flex justify-center gap-x-6", class_name)}>
		{#each social_media as media (media.link)}
			<li>
				<a href={media.link} rel="external" target="_blank">
					{#if media.nombre === "github"}
						<img
							class="opacity-60 hover:opacity-80"
							src={github}
							alt="Github"
							height="20"
							width="20"
						/>
					{:else if media.nombre === "linkedin"}
						<img
							class="opacity-60 hover:opacity-80"
							src={linkedin}
							alt="LinkedIn"
							height="20"
							width="20"
						/>
					{:else if media.nombre === "link"}
						<span class="sr-only">Link</span>
						<Link class="size-5 text-gray-400 hover:text-gray-300" aria-hidden="true" />
					{/if}
				</a>
			</li>
		{/each}
	</ul>
{/if}
