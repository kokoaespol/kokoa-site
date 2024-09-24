<script lang="ts">
	import Member from "$lib/components/Member.svelte";

	let { data } = $props();
</script>

<h1 class=" pb-8 pt-5 text-center font-fira text-3xl text-slate-200 lg:mt-28">Directiva</h1>
<div
	class="grid grid-cols-1 justify-center justify-items-center px-20 py-3 md:grid-cols-3 md:px-48"
>
	{#each data.members as member}
		{#if member.directiva === "si"}
			<Member
				name={member.name}
				role={member.role}
				photo={member.photo}
				socialMedia={member.socialMedia}
			></Member>
		{/if}
	{/each}
</div>

<h1 class=" pb-8 pt-5 text-center font-fira text-3xl text-slate-200">Miembros</h1>
<div
	class="grid grid-cols-1 justify-center justify-items-center px-20 py-3 md:grid-cols-3 md:px-48"
>
	{#each data.members as member}
		{#if member.directiva === "no"}
			<Member
				name={member.name}
				role={member.role}
				photo={member.photo}
				socialMedia={member.socialMedia}
			></Member>
		{/if}
	{/each}
</div>
