<script lang="ts">
  import projects from "$lib/assets/icons/projects.svg?raw";
  import SectionCard from "$lib/components/ui/SectionCard.svelte";
</script>

<div class="section-container flex flex-col">
  <SectionCard icon={projects} section="proyectos"></SectionCard>

  <SectionCard section="miembros"></SectionCard>

  <SectionCard section="eventos"></SectionCard>
</div>
