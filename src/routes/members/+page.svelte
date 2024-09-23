<script lang="ts">
	import Member from "$lib/components/Member.svelte"
	let { data } = $props();
</script>

<h1 class=" font-fira text-4xl text-slate-200 text-center pt-5 pb-8">Directiva</h1>
<div class="grid grid-cols-1 md:grid-cols-3 justify-center px-20 md:px-48 py-3 justify-items-center">
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

<h1 class=" font-fira text-4xl text-slate-200 text-center pt-5 pb-8">Miembros</h1>
<div class="grid grid-cols-1 md:grid-cols-3 justify-center px-20 md:px-48 py-3 justify-items-center">
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