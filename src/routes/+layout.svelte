<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  // Your selected Skeleton theme:
  import "../theme.postcss";
  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Finally, your application's global stylesheet
  import "../app.postcss";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton";

  import Header from "$components/ui/navigation/Header.svelte";
  import Footer from "$components/ui/navigation/Footer.svelte";
  import NavBar from "../lib/components/ui/navigation/NavBar.svelte";
</script>

<AppShell>
  <!-- (sidebarLeft) -->
  <!-- (sidebarRight) -->
  <svelte:fragment slot="pageHeader"
    ><LightSwitch />
    <Header /></svelte:fragment
  >
  <NavBar></NavBar>
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <!-- (pageFooter) -->
  <Footer></Footer>
</AppShell>
