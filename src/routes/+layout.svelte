<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  // Your selected Skeleton theme:
  import "../theme.postcss";
  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Finally, your application's global stylesheet
  import "../app.postcss";
</script>

<slot />
