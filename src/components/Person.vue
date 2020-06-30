<template>

	<div id="person">
		<transition name="lightSpeed">
			<img
				src="@/assets/bram.png"
				v-if="person"
			/>
		</transition>
	</div>
</template>

<script>
export default {
	name: "Person",
	computed: {
		person() {
			return this.$store.getters.person;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#person {
		position: relative;
		flex-grow: 1;
		display: block;

		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		transition: width 0.2s;
	}

	img {
		position: absolute;
		z-index: 10;
		max-height: 90vh;
		max-width: 100%;

		@media (max-width: 600px) {
			max-height: 50vh;
		}
	}
</style>
