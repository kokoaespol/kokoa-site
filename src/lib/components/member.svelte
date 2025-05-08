<script lang="ts">
	import github from "$lib/assets/icons/github.svg";
	import linkedin from "$lib/assets/icons/linkedin.svg";
	import { Link } from "lucide-svelte";

	type Props = {
		member: {
			name: string;
			role: string;
			photo: string;
			facultad: string;
			carrera: string;
			social_media: { nombre: string; link: string }[];
		};
	};
	let { member }: Props = $props();

	const photos = import.meta.glob("$lib/assets/members/*", {
		eager: true,
		import: "default",
	});
	const get_photo = (path: string) => {
		path = "/src/lib/assets" + path;
		const photo = photos[path];
		if (typeof photo === "string") {
			return photo;
		} else {
			return "";
		}
	};
</script>

<li class="text-center">
	<div class="group relative mx-auto size-56 overflow-hidden rounded-full transition duration-150">
		<img
			class="size-56 object-cover transition duration-150 group-hover:brightness-30 group-hover:grayscale"
			src={get_photo(member.photo)}
			width="224"
			height="224"
			alt={member.name}
		/>
		<p
			class="absolute inset-0 flex items-center justify-center font-black opacity-0 transition duration-150 group-hover:opacity-100"
			style="color: var(--color-{member.facultad});"
		>
			{member.facultad} <br />
			{member.carrera}
		</p>
	</div>
	<h3 class="mt-6 text-base/7 font-semibold tracking-tight">{member.name}</h3>
	<p class="text-sm/6 text-lime-400">{member.role}</p>
	<ul role="list" class="mt-6 flex justify-center gap-x-6">
		{#each member.social_media as media}
			<li>
				<a href={media.link}>
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
</li>

<style>
	:global(:root) {
		--color-FIEC: #6d97b0;
		--color-FADCOM: #e3318a;
		--color-FCNM: #5d4394;
		--color-FCSH: #fbc311;
		--color-FCV: #57b24f;
		--color-FICT: #346033;
		--color-FIMCM: #1db5c1;
		--color-FIMCP: #2076b6;
	}
</style>
