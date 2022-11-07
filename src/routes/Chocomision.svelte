<script lang="ts">
  export let idx: number;
  export let content: string;

  const is_first = idx === 0;
  const current_num = (idx + 1).toString().padStart(2, "0");
</script>
