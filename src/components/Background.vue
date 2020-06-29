<template>
	<div>
		<transition name="fade">
			<div class="background" v-if="profession === ''" key="none">
				<div class="empty"></div>
			</div>
			<div class="background teaching" v-if="profession === 'teaching'" key="teaching"></div>
			<div class="background coding" v-if="profession === 'coding'" key="coding"></div>
			<div class="background making" v-if="profession === 'making'" key="making"></div>
		</transition>
	</div>
</template>

<script>
	export default {
		computed: {
			profession() {
				return this.$store.getters.profession;
			},
			customBG() {
				return this.profession ? this.profession : "";
			}
		}
	};
</script>

<style scoped lang="scss">
	.background {
		position: absolute;
		z-index: 1;

		width: 100vw;
		height: 100vh;
		animation-duration: 2s;
	}

	.empty {
		height: 100%;
		width: 100%;
		background: linear-gradient(-45deg, #d3e0e4, #c6dbe0, #8ab4b8, #9fdadd);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
	}

	.coding {
		background: url("../assets/background_coding.jpg") !important;
		background-repeat: no-repeat !important;
		background-size: cover !important;
	}

	.teaching {
		background: url("../assets/background_teaching.jpg") !important;
		background-repeat: no-repeat !important;
		background-size: cover !important;
	}

	.making {
		background: url("../assets/background_making.jpg") !important;
		background-repeat: no-repeat !important;
		background-size: cover !important;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>