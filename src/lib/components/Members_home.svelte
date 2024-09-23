<script lang="ts">
	import Member from "$lib/components/Member.svelte";
	import members from "$lib/data/members.json";
</script>

<div
	class="grid grid-cols-1 justify-center justify-items-center px-20 py-48 md:grid-cols-3 md:px-48"
>
	{#each members as member}
		<Member
			name={member.name}
			role={member.role}
			photo={member.photo}
			socialMedia={member.socialMedia}
		></Member>
	{/each}
</div>
