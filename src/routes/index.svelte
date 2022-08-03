<script lang="ts">
  import Chocomision from "$lib/components/home/Chocomision.svelte";
  import ChocoSection from "$lib/components/home/ChocoSection.svelte";
  import HeroSection from "$lib/components/home/HeroSection.svelte";
  import SectionH2 from "$lib/components/home/SectionH2.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import linkedin from "$lib/assets/icons/linkedin.svg?raw";
  import github from "$lib/assets/icons/github.svg?raw";
  import linked_chain from "$lib/assets/icons/linked-chain.svg?raw";

  const chocomisiones = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque optio expedita quas soluta tenetur impedit placeat illo hic voluptate. Mollitia magni nam nulla rerum?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque optio expedita quas soluta tenetur impedit placeat illo hic voluptate. Mollitia magni nam nulla rerum?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque optio expedita quas soluta tenetur impedit placeat illo hic voluptate. Mollitia magni nam nulla rerum?",
  ];

  const chocoareas = [
    { text: "Electrónica" },
    { text: "Videojuegos" },
    { text: "Desarrollo web y móvil" },
    { text: "Programación de sistemas" },
  ];

  const chocobeneficios = [
    { text: "Eventos y actividades" },
    { text: "Recursos exclusivos" },
    { text: "Conexiones" },
  ];

  type ChocoMiembro = {
    name: string;
    role: string;
    image_url?: string;
    github_url?: string;
    linkedin_url?: string;
    personal_page_url?: string;
  };

  const chocomiembros: ChocoMiembro[] = [
    {
      name: "Beatriz Pinzón",
      role: "Presidente",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
      personal_page_url: "#",
    },
    {
      name: "Juanita Crespo",
      role: "Core Administración",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
      personal_page_url: "#",
    },
    {
      name: "Armando Mendoza",
      role: "Core Proyectos",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
    {
      name: "Armando Mendoza",
      role: "Core Proyectos",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
    {
      name: "Armando Mendoza",
      role: "Core Proyectos",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
    {
      name: "Armando Mendoza",
      role: "Core Proyectos",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
  ];
</script>

<HeroSection />
<ChocoSection>
  <div class="flex items-center">
    <div class="w-3/5">
      <SectionH2>¿Quiénes Somos?</SectionH2>
      <p class="mt-3 text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error repudiandae animi
        necessitatibus maiores, quis temporibus recusandae fuga exercitationem iste nesciunt sint
        culpa, tempora doloremque! Qui expedita sint voluptate non et.
      </p>
    </div>
    <div class="mx-auto aspect-[4/5] w-40 bg-zinc-500" />
  </div>
</ChocoSection>
<ChocoSection>
  <SectionH2>Chocomisión</SectionH2>
  <div class="grid grid-cols-3 gap-8">
    {#each chocomisiones as content, idx}
      <Chocomision {content} {idx} />
    {/each}
  </div>
</ChocoSection>
<ChocoSection class="grid grid-cols-3 gap-16">
  <div>
    <SectionH2>Chocoáreas</SectionH2>
    <p class="mt-3 text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error repudiandae animi
      necessitatibus maiores, quis temporibus.
    </p>
  </div>
  <ul class="col-span-2 grid grid-cols-2 content-center gap-8">
    {#each chocoareas as area}
      <li class="flex items-center gap-4 text-lg font-semibold text-zinc-50">
        <div class="aspect-square w-16 bg-orange-400" />
        <span>{area.text}</span>
      </li>
    {/each}
  </ul>
</ChocoSection>
<ChocoSection>
  <SectionH2>Chocobeneficios</SectionH2>
  <div class="mt-16 grid grid-cols-3 justify-items-center">
    {#each chocobeneficios as beneficio}
      <article class="text-center">
        <div class="mx-auto aspect-[4/5] w-32 bg-zinc-500" />
        <h3 class="mt-2 text-xl font-semibold text-zinc-50">{beneficio.text}</h3>
      </article>
    {/each}
  </div>
</ChocoSection>
<ChocoSection>
  <SectionH2>Chocomiembros</SectionH2>
  <ul
    class="mx-auto mt-10 space-y-16 text-center sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
  >
    {#each chocomiembros as member}
      <li>
        <div class="space-y-6">
          <div class="mx-auto h-40 w-40 rounded-full bg-zinc-500 xl:h-56 xl:w-56" />
          <div class="space-y-2">
            <div class="space-y-1 text-lg font-medium leading-6">
              <h3 class="text-zinc-50">{member.name}</h3>
              <p class="text-orange-400">{member.role}</p>
            </div>
            <ul class="flex justify-center space-x-5">
              {#if member.github_url}
                <li>
                  <a href={member.github_url} class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Github</span>
                    <Icon data={github} fill="currentColor" aria-hidden="true" />
                  </a>
                </li>
              {/if}
              {#if member.linkedin_url}
                <li>
                  <a href={member.linkedin_url} class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">LinkedIn</span>
                    <Icon data={linkedin} fill="currentColor" aria-hidden="true" />
                  </a>
                </li>
              {/if}
              {#if member.personal_page_url}
                <li>
                  <a href={member.personal_page_url} class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Personal Page</span>
                    <Icon data={linked_chain} fill="currentColor" aria-hidden="true" />
                  </a>
                </li>
              {/if}
            </ul>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</ChocoSection>
<div class="bg-orange-400">
  <ChocoSection class="py-32">
    <div class="lg:flex lg:items-center lg:justify-between lg:px-10">
      <SectionH2 invert>¿Te gustaría ser parte?</SectionH2>
      <a
        class="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-zinc-900 px-10 py-2 text-base font-medium text-zinc-50 shadow-sm hover:bg-zinc-700 lg:mt-0"
        href="/registro">Unirse</a
      >
    </div>
  </ChocoSection>
</div>
