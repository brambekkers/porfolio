<template>
	<transition name="fade">
		<div
			id="info"
			v-if="info"
		>
			<div class="field">
				<h1 v-if="profession === 'teaching'">Docent </h1>
				<h1 v-if="profession === 'making'">Maker </h1>
				<h1 v-if="profession === 'coding'">Programmeur </h1>

				<div v-if="profession === 'teaching'">
					<p>
						Als docent binnen het MBO ben ik een vernieuwer en aanpakker. Het (samen) met studenten werken aan hun toekomst
						en iedere leerlingen net dat extra stapje laten zetten geeft mij veel voldoening. Ik ben een docent die op een
						coachende wijze zijn leerlingen aan de slag laat gaan.
					</p>

					<p>
						Binnen het onderwijs heb ik mij gespecialiseerd in nieuwe technieken en de toegepaste ICT. Ik werk ongeveer tien
						jaar bij het HMC in Amsterdam en geef daar les in werkvoorbereiding/ ontwerpen, mediawijsheid, Cad/Cam en
						online profilering. Daarnaast vervul ik een flink aantal neven activiteiten zoals het voorzitterschap van de
						ondernemingsraad, projectgroepen over nieuwe technieken/ mediawijsheid en verzorg ik de interne scholing van
						collega's op het gebied van ICT en techniek.
					</p>
					<p>
						Mijn kracht zit in het combineren van nieuwe technologie met de kennis van de praktijk, het snel kunnen schakelen
						en het implementeren van de kennis in een organisatie.
					</p>

					<p class="list">
						<u><b>Specialiteiten</b></u>
						<ul>
							<li>Meubelmaken en jachtbouw</li>
							<li>Media en Technologie</li>
							<li>Nieuwe productie technieken (CNC, 3D- printers en lasersnijders)</li>
							<li>CAD (Ironcad, Autocad, Vectorworks, Rhino, Solidworks)</li>
							<li>CAM (Alphacam)</li>
						</ul>

					</p>
				</div>

				<p v-if="profession === 'making'">
					Als afgestudeerd meubelmaker heb ik veel verschillende meubels gemaakt. Naast 'all around meubelmaker' heb ik
					mij in 2008 gespecialiseerd in houten jachtbouw.
				</p>

				<div v-if="profession === 'coding'">
					<p>Tijdens mijn studietijd heb ik een flink aantal websites gebouwd. Veel Photoshop werk gecombineerd met html en css.
						In die tijd bleef het javascript echter achterwegen. In 2014 heb ik mij echter opnieuw gericht op coderen en heb ik
						mij volledig gericht op javascript. Een schot in de roos. Ik heb tientalle Udemy cursussen gevolgd om mijn vaardigheden te vergroten.
					</p>
					<p>Voor mijn werkzaamheden bij het Hout- en meubileringscollege heb ik een aantal applicaties gemaakt. Deze
						applicaties worden dagelijks in de praktijkgebruikt.</p>
					<p class="list">
						<u><b>Specialiteiten</b></u>
						<ul>
							<li>Vue</li>
							<li>Firebase</li>
							<li>Node</li>
							<li>Electron</li>
						</ul>

					</p>
				</div>

			</div>

		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {};
	},
	watch: {},
	computed: {
		info() {
			return this.$store.getters.info;
		},
		profession() {
			return this.$store.getters.profession;
		}
	}
};
</script>

<style lang="scss" scoped>
	#info {
		position: absolute;
		font-family: "Montserrat", sans-serif;
		font-weight: 200;

		z-index: 20;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.field {
			background: rgba($color: white, $alpha: 0.6);
			height: calc(80vh - 3rem);
			width: 60vw;
			padding: 20px 40px;
			border-radius: 5px;
			max-width: 80vw;
			overflow: auto;
			scroll-padding: 50px 0px 0px 50px;

			h1 {
				font-weight: 200;
				margin-top: 0.7rem;
				font-size: 2.5rem;
				text-align: center;

				text-shadow: 1px 1px 1px #222;
				text-decoration: none;
				text-transform: none;
				letter-spacing: 0.1em;
				word-spacing: 0.012em;
			}

			p {
				font-size: 1.3rem;
				font-weight: 400;
			}

			.list {
				margin-top: 2rem;
			}
		}
	}
</style>