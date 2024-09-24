<script lang="ts">
	import Member from "$lib/components/Member.svelte";
	import members from "$lib/data/members.json";
	import Title from "$lib/components/Title.svelte";
</script>

<section>
	<Title title="Chocomiembros" />
	<div
		class="grid grid-cols-2 justify-center justify-items-center pb-2 pt-16 md:grid-cols-3 md:px-40"
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
	<div class="flex flex-col items-center pb-20">
		<button class="py rounded-full bg-lime-500 px-8 font-fira font-semibold text-black">
			<a href="/members"> Ver más </a>
		</button>
	</div>
</section>
