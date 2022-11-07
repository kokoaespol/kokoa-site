<script lang="ts">
  import Chocomision from "./Chocomision.svelte";
  import ChocoSection from "./ChocoSection.svelte";
  import HeroSection from "./HeroSection.svelte";
  import SectionH2 from "./SectionH2.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import linkedin from "$lib/assets/icons/linkedin.svg?raw";
  import github from "$lib/assets/icons/github.svg?raw";
  import linked_chain from "$lib/assets/icons/linked-chain.svg?raw";

  const chocoareas = [
    { text: "Electrónica" },
    { text: "Seguridad" },
    { text: "Desarrollo web y móvil" },
    { text: "Programación de sistemas" },
  ];

  const chocobenefits = [
    { text: "Eventos", subtext: "" },
    { text: "Talleres", subtext: "" },
    { text: "Amigos", subtext: "(No Garantizado)" },
  ];

  type ChocoMembers = {
    name: string;
    role: string;
    image_url?: string;
    github_url?: string;
    linkedin_url?: string;
    personal_page_url?: string;
  };

  const chocomembers: ChocoMembers[] = [
    {
      name: "Alexander Goussas",
      role: "Core Planificación",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
      personal_page_url: "#",
    },
    {
      name: "Joangie Márquez",
      role: "Core Proyectos",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
      personal_page_url: "#",
    },
    {
      name: "Alina Carpio",
      role: "Core Difusión",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
    {
      name: "Andrea Mero",
      role: "Core Soporte",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
    {
      name: "Axcel Espinoza ",
      role: "Líder Electrónica",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
    {
      name: "Adrián Delgado",
      role: "Líder Seguridad",
      image_url: "",
      github_url: "#",
      linkedin_url: "#",
    },
  ];
</script>

<HeroSection />
<ChocoSection>
  <div class="flex flex-col items-start md:flex-row md:items-center">
    <div class="w-full md:w-3/5">
      <SectionH2>Choco<wbr />Misión</SectionH2>
      <p class="mt-3 text-xl">
        Compartir, difundir e implementar, conocimiento y herramientas, para el desarrollo académico
        y tecnológico de la sociedad Ecuatoriana.
      </p>
    </div>
    <div class="mx-auto aspect-[4/5] w-80">
      <img src="src/lib/assets/logos/LOGO SEMI B.png" alt="Chocomision" />
    </div>
  </div>
</ChocoSection>

<ChocoSection class="grid grid-cols-1 gap-16 md:grid-cols-3">
  <div>
    <SectionH2>Choco<wbr />áreas</SectionH2>
    <p class="mt-3 text-xl">Conoce nuestras áreas de trabajo.</p>
  </div>
  <ul class="grid grid-cols-1 content-center gap-8 sm:grid-cols-2 md:col-span-2">
    {#each chocoareas as area}
      <li class="flex items-center gap-4 overflow-hidden text-lg font-semibold text-zinc-50">
        <div class="aspect-square w-16 flex-shrink-0 bg-green-kokoa-500" />
        <span>{area.text}</span>
      </li>
    {/each}
  </ul>
</ChocoSection>
<ChocoSection>
  <SectionH2>Choco<wbr />beneficios</SectionH2>
  <div class="mt-16 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
    {#each chocobenefits as benefit}
      <article class="text-center">
        <div class="mx-auto aspect-[4/5] w-32 bg-zinc-500" />
        <h3 class="mt-2 text-xl font-semibold text-zinc-50">{benefit.text}</h3>
        <p>{benefit.subtext}</p>
      </article>
    {/each}
  </div>
</ChocoSection>
<ChocoSection>
  <SectionH2>Choco<wbr />líderes</SectionH2>
  <ul
    class="mx-auto mt-10 space-y-16 text-center sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
  >
    {#each chocomembers as member}
      <li>
        <div class="space-y-6">
          <div class="mx-auto h-40 w-40 rounded-full bg-zinc-500 xl:h-56 xl:w-56" />
          <div class="space-y-2">
            <div class="space-y-1 text-lg font-medium leading-6">
              <h3 class="text-zinc-50">{member.name}</h3>
              <p class="text-green-kokoa-500">{member.role}</p>
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
<div class="bg-green-kokoa-500">
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
