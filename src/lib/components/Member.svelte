<script lang="ts">
	import github_logo from "$lib/assets/icons/github.svg";
	import linkedin_logo from "$lib/assets/icons/linkedin.svg";
	import link_logo from "$lib/assets/icons/bx-link.svg";

	type Props = {
		name: string;
		role: string;
		photo: string;
		socialMedia: { nombre: string; link: string }[];
	};

	let { name, role, photo, socialMedia }: Props = $props();
</script>

<div class="flex flex-col items-center justify-center gap-2 pb-14">
	<img class="inset-0 size-20 rounded-full md:size-32" src={photo} alt="Foto" />

	<div class="flex flex-col items-center justify-center">
		<h2 class="text-lg text-white">{name}</h2>
		<p class="text-[0.85rem] text-lime-400">{role}</p>
	</div>

	<div class="flex flex-row justify-items-center gap-2 object-center">
		{#each socialMedia as media}
			<a class="object-center" href={media.link}>
				{#if media.nombre === "linkedin"}
					<img
						class="basis-1/3 object-center"
						height="16"
						width="16"
						src={linkedin_logo}
						alt="LinkedIn"
					/>
				{:else if media.nombre === "github"}
					<img
						class="basis-1/3 object-center"
						height="16"
						width="16"
						src={github_logo}
						alt="Github"
					/>
				{:else if media.nombre === "link"}
					<img class="basis-1/3 object-center" height="16" width="16" src={link_logo} alt="Link" />
				{/if}
			</a>
		{/each}
	</div>
</div>
