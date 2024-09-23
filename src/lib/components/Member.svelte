<script lang="ts">
    import github_logo from "$lib/assets/icons/github.svg";
    import linkedin_logo from "$lib/assets/icons/linkedin.svg";
    import link_logo from "$lib/assets/icons/bx-link.svg";

    type Props = { 
        name: string;
	    role: string;
		photo: string;
		socialMedia: {nombre: string, link: string}[];
    }

    let { name, role, photo, socialMedia}:Props = $props();
</script>

<div class="flex flex-col gap-2 justify-center items-center pb-14">
    <img class="rounded-full size-20 md:size-24 inset-0" src={photo} alt="Foto" >

    <div class="flex flex-col justify-center items-center">
        <h2 class="text-lime-400 text-base" >{name}</h2>
        <p class="text-sm">{role}</p>
    </div>

    <div class="flex flex-row gap-2 justify-items-center object-center	">

        {#each socialMedia as media}
            
            <a class="object-center" href={media.link}>

                {#if media.nombre === "linkedin"}
                    <img class="basis-1/3 object-center	" height="16" width="16" src={linkedin_logo} alt="LinkedIn">
                {:else if media.nombre === "github"}
                    <img class="basis-1/3 object-center	" height="16" width="16" src={github_logo} alt="Github">
                {:else if media.nombre === "link"}
                    <img class="basis-1/3 object-center	" height="16" width="16" src={link_logo} alt="Link">
                {/if}

            </a>

        {/each}
    </div>
</div>