<script lang="ts">
	export let title: string; // Recibirá el título que se mostrará
</script>

<section class="heading-section">
	<div class="heading-container">
		<h1>{title}</h1>
	</div>
</section>

<style>
	.heading-section {
		background-image: url("$lib/assets/forms/frame.svg"); /* Asegúrate de colocar la ruta correcta a tu SVG */
		background-size: 100%;
		align-items: center;
		height: 25rem;
		display: flex;
	}

	.heading-container {
		color: black; /* Cambia a blanco si lo necesitas */
		margin-left: 10%;
	}

	h1 {
		font-size: 3rem;
		font-weight: bold;
	}
</style>
