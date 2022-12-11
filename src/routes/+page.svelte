<script lang="ts">
  import ChocoSection from "./ChocoSection.svelte";
  import HeroSection from "./HeroSection.svelte";
  import SectionH2 from "./SectionH2.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import events from "$lib/assets/icons/events.svg?raw";
  import friends from "$lib/assets/icons/friends.svg?raw";
  import workshop from "$lib/assets/icons/workshop.svg?raw";
  import cybersecurity from "$lib/assets/icons/cybersecurity.svg?raw";
  import systems from "$lib/assets/icons/systems-prog.svg?raw";
  import web from "$lib/assets/icons/web.svg?raw";
  import electronic from "$lib/assets/icons/electronic.svg?raw";
  import linkedin from "$lib/assets/icons/linkedin.svg?raw";
  import github from "$lib/assets/icons/github.svg?raw";
  import linked_chain from "$lib/assets/icons/linked-chain.svg?raw";
  import chocoimagen from "$lib/assets/logos/kokoa.svg?raw";

  const chocoareas = [
    { text: "Electrónica", icon: electronic },
    { text: "Seguridad", icon: cybersecurity },
    { text: "Desarrollo web y móvil", icon: web },
    { text: "Programación de sistemas", icon: systems },
  ];

  const chocobenefits = [
    { text: "Eventos", subtext: "", icon: events },
    { text: "Talleres", subtext: "", icon: workshop },
    { text: "Amigos", subtext: "(No Garantizado)", icon: friends },
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
      image_url: "https://avatars.githubusercontent.com/u/84427521?v=4",
      github_url: "https://github.com/aloussase",
      linkedin_url: "https://www.linkedin.com/in/alexander-goussas-9895a3226/",
    },

    {
      name: "Alina Carpio",
      role: "Core Difusión",
      image_url: "https://avatars.githubusercontent.com/u/72272077?v=4",
      github_url: "https://github.com/alicarpio",
      linkedin_url: "https://www.linkedin.com/in/alina-carpio-758bb220b/",
    },
    {
      name: "Andrea Mero",
      role: "Core Soporte",
      image_url: "https://avatars.githubusercontent.com/u/9570683?v=4",
      github_url: "https://github.com/adelovelace",
      linkedin_url: "https://www.linkedin.com/in/andrea-adelina-mero-plaza-522011b0/",
    },
    {
      name: "Joangie Márquez",
      role: "Core Proyectos",
      image_url: "https://avatars.githubusercontent.com/u/59121896?v=4",
      github_url: "https://github.com/practicatto",
    },
    {
      name: "Axcel Espinoza ",
      role: "Líder Electrónica",
      image_url: "https://avatars.githubusercontent.com/u/62627084?v=4",
      github_url: "https://github.com/Axcel17",
      linkedin_url: "https://www.linkedin.com/in/axcelespinoza/",
    },
    {
      name: "Adrián Delgado",
      role: "Líder Seguridad",
      image_url: "https://avatars.githubusercontent.com/u/11708972?v=4",
      github_url: "https://github.com/adriandelgado",
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
      <Icon data={chocoimagen} width="300" height="400" aria-hidden="true" />
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
        <Icon data={area.icon} fill="green-kokoa-500" width="80" height="80" aria-hidden="true" />

        <span>{area.text}</span>
      </li>
    {/each}
  </ul>
</ChocoSection>
<ChocoSection>
  <SectionH2>Choco<wbr />beneficios</SectionH2>
  <ul class="col-span-2 grid grid-cols-1 content-center gap-2 sm:grid-cols-3 md:col-span-1">
    {#each chocobenefits as benefit}
      <li class="mt-4 flex items-center overflow-hidden sm:flex-col">
        <Icon
          class="flex items-center md:mx-auto md:items-center"
          data={benefit.icon}
          fill="green-kokoa-500"
          width="120"
          height="120"
          aria-hidden="true"
        />

        <h3 class="mt-2 text-xl font-semibold text-zinc-50 md:text-center">{benefit.text}</h3>
        <p class="md:text-center">{benefit.subtext}</p>
      </li>
    {/each}
  </ul>
</ChocoSection>
<ChocoSection>
  <SectionH2>Choco<wbr />líderes</SectionH2>
  <ul
    class="mx-auto mt-10 space-y-16 text-center sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
  >
    {#each chocomembers as member}
      <li>
        <div class="space-y-6">
          <img
            class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
            src={member.image_url}
            alt="foto de {member.name}"
          />
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
<div class="absolute " />
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
