<script lang="ts">
	import Member from "$lib/components/Member.svelte"
	import members from "$lib/data/members.json"
</script>

<div class="grid grid-cols-1 md:grid-cols-3 justify-center px-20 md:px-48 py-48 justify-items-center">
	{#each members as member}
		<Member 
			name={member.name} 
			role={member.role}
			photo={member.photo}
			socialMedia={member.socialMedia}
		></Member>
	{/each}
</div>