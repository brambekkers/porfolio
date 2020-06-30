<template>
	<transition
		enter-active-class="animated bounceInUp"
		leave-active-class="animated bounceOutDown"
		:duration="{ enter: 2000, leave: 5000 }"
	>
		<i
			class="fas fa-angle-down animate__animated animate__rubberBand"
			v-if="!scroll && scrollLoaded && !fieldOpen"
			@click="onScroll()"
		></i>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			scrollLoaded: false
		};
	},
	computed: {
		scroll() {
			return this.$store.getters.scroll;
		},
		fieldOpen() {
			return this.$store.getters.fieldOpen;
		}
	},
	methods: {
		onScroll() {
			this.$store.commit("person", true);
			this.$store.commit("text", { type: "intro", bool: false });
			this.$store.commit("text", { type: "profession", bool: true });
			this.$store.commit("scroll");
		}
	},
	mounted() {
		window.addEventListener("scroll", this.onScroll);

		setTimeout(() => {
			this.scrollLoaded = true;
		}, 3500);
	}
};
</script>

<style lang="scss" scoped>
	i {
		position: absolute;
		z-index: 50;
		bottom: 0;
		left: 50vw;
		color: white;

		font-size: 3.5rem;
		transition: font-size 0.2s;

		&:hover {
			font-size: 5rem;
			cursor: pointer;
		}
	}
</style>
