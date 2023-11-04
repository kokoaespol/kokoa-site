<script lang="ts">
  import "../app.postcss";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton";

  import Header from "$lib/components/ui/navigation/Header.svelte";
  import Footer from "$lib/components/ui/navigation/Footer.svelte";
  import NavBar from "$lib/components/ui/navigation/NavBar.svelte";
</script>

<AppShell>
  <!-- (sidebarLeft) -->
  <!-- (sidebarRight) -->
  <svelte:fragment slot="pageHeader">
    <LightSwitch />
    <Header />
  </svelte:fragment>
  <NavBar />
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <!-- (pageFooter) -->
  <Footer />
</AppShell>
