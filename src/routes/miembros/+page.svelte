<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";

  const members = [
    {
      name: "Luis Bajaña",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/36106785?v=4",
    },
    {
      name: "Alina Carpio",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/72272077?v=4",
    },

    {
      name: "Axcel Espinoza",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/62627084?v=4",
    },
    {
      name: "Adrián Delgato",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/11708972?v=4",
    },
    {
      name: "Alexander Goussas",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/84427521?v=4",
    },
    {
      name: "Joangie Marquez",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/59121896?v=4",
    },
    {
      name: "Ashley Nivelo",
      position: "Miembro Activo",
      image: "",
    },
    {
      name: "Andrea Mero",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/9570683?v=4",
    },
    {
      name: "Mario Ruiz",
      position: "Miembro Activo",
      image: "",
    },
    {
      name: "Yiam Rodriguez",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/44529630?v=4",
    },
    {
      name: "Kelvin",
      position: "Miembro Activo",
      image: "",
    },
    {
      name: "Nicolás Plaza",
      position: "Miembro Activo",
      image: "",
    },
    {
      name: "Cristopher Villa",
      position: "Miembro Activo",
      image: "https://avatars.githubusercontent.com/u/74066095?v=4",
    },
    {
      name: "Jonathan Santana",
      position: "Miembro Activo",
      image: "",
    },
  ];
</script>

<SectionHeader title="ChocoMiembros" />
<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
  <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
    <div class="space-y-5 sm:space-y-4">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Conoce a nuestros miembros</h2>
      <p class="text-xl text-gray-500">Un equipo de trabajo que aún no tiene historial criminal</p>
    </div>
    <div class="lg:col-span-2">
      <!-- svelte-ignore a11y-no-redundant-roles -->
      <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
        {#each members as member}
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img
                class="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                src={member.image}
                alt="foto de {member.name}"
              />
              <div class="space-y-1 text-lg font-medium leading-6">
                <h3>{member.name}</h3>
                <p class="text-green-kokoa-500">{member.position}</p>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
