<svelte:options runes />

<script>
	import Heading from "$lib/components/layout/Heading.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import Speaker from "$lib/components/Speaker.svelte";
	import gokulSoumya from "$lib/assets/gokul-soumya.jpg";
	import miguelSanchez from "$lib/assets/miguel-sanchez.jpeg";
	import adrianDelgadoFerris from "$lib/assets/adrian-delgado.png";
</script>

<svelte:head>
	<title>CLI Week | KOKOA</title>
</svelte:head>

<Heading>CLI Week</Heading>

<div style:width="80%" class="mx-auto flex flex-col justify-center gap-4 font-fira">
	<Tag category="11-11-2024 | 15-11-2024" />

	<p id="description">
		Welcome to the CLI Week! This is a week dedicated to the celebration of command line tools in
		which we'll have talks and workshops and participants will compete to develop their own CLI
		tool.
	</p>

	<h4 class="text-xl text-lime-600">How to participate?</h4>

	<p id="how-to-participate">
		You can participate either as a speaker or by building a CLI tool. Check out the links below for
		the corresponding registration link.
	</p>

	<p id="speakers">
		For speakers, you'll find a link to a registration form below where you can specify the topic
		you'd like to talk about and you tentative dates. We'll then get in touch with you to coordinate
		your awesome talk :).
	</p>

	<p id="coders">
		For people who want to code, the hackathon will last 5 day during the week from November 11th to
		November 15th. You can use whatever programming language and tools you'd like. AI integration is
		allowed. For inspiration on what kind of tools you can create, look at
		<a target="_blank" href="https://github.com/agarrharr/awesome-cli-apps" class="underline">
			Awesome CLI Tools on GitHub
		</a>.
	</p>

	<div id="registration" class="flex flex-col rounded-md border p-2 shadow-lg">
		<h3 class="mb-4 text-center text-2xl">Register</h3>
		<div class="flex w-full justify-center gap-4">
			<div id="registration-speakers" class="flex-1">
				<a target="_blank" href="https://forms.gle/L3Ri4wdg3ACDEY1XA">
					<button class="w-full rounded-md bg-lime-600 p-2 hover:bg-lime-500">Speakers</button>
				</a>
			</div>
			<div id="registration-participants" class="flex-1">
				<a target="_blank" href="https://forms.gle/FqwFyMFcmc6NCNWv9">
					<button class="w-full rounded-md bg-lime-600 p-2 hover:bg-lime-500">Coders</button>
				</a>
			</div>
		</div>
	</div>

	<div id="sponsorship">
		<h4 class="text-xl text-lime-600">Sponsorship</h4>
		<p>
			We are a non-profit organization and have limited resources, so if you'd like to help make
			this event even cooler for our participants and act as a sponsor, please contact us at our
			email
			<a href="mailto:kokoa.espol.ec@gmail.com">kokoa.espol.ec@gmail.com</a>.
		</p>
	</div>

	<h4 class="text-xl text-lime-600">Speakers</h4>

	<div id="speakers" class="flex w-full flex-wrap gap-4">
		<Speaker
			name="Miguel Sánchez"
			title="Software Developer @ Devsu"
			image_url={miguelSanchez}
			date="13-11-2024"
			time="17H00"
			topic="Del Backend a la Terminal: El Poder de los Django Commands"
		/>

		<Speaker
			name="Gokul Soumya"
			title="System Engineer @ SubCom"
			image_url={gokulSoumya}
			date="12-11-2024"
			time="20H30"
			topic="CLI Tool Development"
		/>

		<Speaker
			name="Adrián Delgado"
			title="Pentester @ Syscloudsec"
			image_url={adrianDelgadoFerris}
			date="15-11-2024"
			time="10H30"
			topic="Desarrollemos un cracker de contraseñas en Rust"
		/>
	</div>

	<div>See you there!</div>
</div>
