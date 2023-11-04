<script lang="ts">
  export let data = "";
  export let viewBox = extract_viewBox(data);

  export let size = "20px";
  export let width = size;
  export let height = size;

  export let stroke: string | null = null;
  export let fill: string | null = null;

  $: elements = data.replace(/<svg ([^>]*)>/, "").replace("</svg>", "");

  function extract_viewBox(svg: string) {
    const regex = /viewBox="([\d\- .]+)"/;
    const res = regex.exec(svg);
    if (!res) return "0 0 20 20"; // default value
    return res[1];
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} {viewBox} {stroke} {fill} {...$$restProps}>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html elements}
</svg>
