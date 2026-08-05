<script lang="ts">
	import { resolve } from "$app/paths";
	import { reveal, REVEAL_CLASS } from "$lib/actions/reveal.js";
	import SocialLinks from "$lib/components/social-links.svelte";

	type Props = {
		member: {
			name: string;
			role: string;
			photo: string;
			facultad: string;
			carrera: string;
			slug: string;
			social_media: { nombre: string; link: string }[];
		};
		delay?: number;
	};
	let { member, delay = 0 }: Props = $props();

	const photos = import.meta.glob("$lib/assets/members/*", {
		eager: true,
		import: "default",
	});

	function get_photo(path: string) {
		const photo = photos[`/src/lib/assets${path}`];
		if (typeof photo !== "string") throw new Error("Invalid member photo path");
		return photo;
	}

	const colormap = new Map([
		["FIEC", "text-[#6d97b0]"],
		["FADCOM", "text-[#e3318a]"],
		["FCNM", "text-[#5d4394]"],
		["FCSH", "text-[#fbc311]"],
		["FCV", "text-[#57b24f]"],
		["FICT", "text-[#346033]"],
		["FIMCM", "text-[#1db5c1]"],
		["FIMCP", "text-[#2076b6]"],
	]);
</script>

<li use:reveal={{ delay }} class="text-center {REVEAL_CLASS}">
	<div class="group relative mx-auto size-56 overflow-hidden rounded-full transition duration-150">
		<img
			class="size-56 object-cover transition duration-150 group-hover:scale-105 group-hover:brightness-30 group-hover:grayscale"
			src={get_photo(member.photo)}
			width="224"
			height="224"
			alt={member.name}
		/>
		<a
			href={resolve(`/members/${member.slug}`)}
			class="absolute inset-0 flex items-center justify-center font-black opacity-0 transition duration-150 group-hover:opacity-100 {colormap.get(
				member.facultad,
			)}"
		>
			{member.facultad} <br />
			{member.carrera}
		</a>
	</div>
	<h3 class="mt-6 text-base/7 font-semibold tracking-tight">{member.name}</h3>
	<p class="text-sm/6 text-lime-400">{member.role}</p>
	<SocialLinks social_media={member.social_media} class="mt-6" />
</li>
