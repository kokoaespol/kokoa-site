<script lang="ts">
  import SectionHeader from "$lib/components/SectionHeader.svelte";

  const members = [
    {
      name: "Luis Bajaña",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Alina Carpio",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Washington Cotera",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Axcel Espinoza",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Adrián Delgato",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Alexander Goussas",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Joangie Marquez",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ashley Nivelo",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Andrea Mero",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mario Ruiz",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Yiam",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Kelvin",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Nicolás Plaza",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Cristopher Villa",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Jonathan Santana",
      position: "Miembro Activo",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
</script>

<SectionHeader title="ChocoMiembros">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore eos aliquam aspernatur
  deserunt! Eum reiciendis explicabo blanditiis ea aperiam? Odio vero voluptate quod consequatur sed
  delectus ea possimus odit?
</SectionHeader>
<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
  <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
    <div class="space-y-5 sm:space-y-4">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>
      <p class="text-xl text-gray-500">
        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae
        ullamcorper suspendisse. Vivamus fringilla.
      </p>
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
                <p class="text-orange-500">{member.position}</p>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
