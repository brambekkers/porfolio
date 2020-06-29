<template>
	<transition
		enter-active-class="animated bounceInRight"
		leave-active-class="animated bounceOutDown"
		:duration="{ enter: 2000, leave: 5000 }"
	>
		<i class="far fa-envelope" v-if="mailLoaded"></i>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				mailLoaded: false
			};
		},

		methods: {},
		mounted() {
			setTimeout(() => {
				this.mailLoaded = true;
			}, 3500);
		}
	};
</script>

<style lang="scss" scoped>
	i {
		position: absolute;
		z-index: 50;

		color: white;
		opacity: 80%;

		font-size: 3.5rem;
		transition: font-size 0.2s;

		@media (max-width: 600px) {
			bottom: 1rem;
			left: 1.5rem;
		}
		@media (min-width: 600px) {
			top: 1rem;
			right: 3.5rem;
			transform: translateX(50%);
		}

		&:hover {
			font-size: 5rem;
			cursor: pointer;
		}
	}
</style>