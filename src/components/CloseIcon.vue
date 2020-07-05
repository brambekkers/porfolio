<template>
	<transition
		enter-active-class="animated bounceInLeft"
		leave-active-class="animated bounceOutLeft"
	>
		<div
			id="close"
			v-if="contact || info"
			@click="close()"
		>

			<i class="fas fa-undo"></i>
		</div>
	</transition>
</template>

<script>
export default {
	computed: {
		contact() {
			return this.$store.getters.contact;
		},
		info() {
			return this.$store.getters.info;
		}
	},
	methods: {
		close() {
			this.$store.commit("close");
		}
	}
};
</script>

<style lang="scss" scoped>
	#close {
		position: absolute;
		z-index: 50;

		color: rgba($color: white, $alpha: 0.7);

		font-size: 2.5rem;
		transition: font-size 0.2s;
		transition: color font-size 0.2s;

		@media (max-width: 600px) {
			top: 1rem;
			left: 1.5rem;
		}
		@media (min-width: 600px) {
			top: 1rem;
			left: 1.5rem;
			transform: translateX(50%);
		}

		&:hover {
			color: rgba($color: white, $alpha: 1);
			font-size: 5rem;
			cursor: pointer;
		}
	}
</style>