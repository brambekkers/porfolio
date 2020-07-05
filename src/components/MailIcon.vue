<template>
	<transition
		enter-active-class="animated bounceInRight"
		leave-active-class="animated bounceOutRight"
		:duration="{ enter: 2000, leave: 5000 }"
	>
		<div
			id="mail"
			v-if="mailLoaded && !contact"
			@click="toMail()"
		>

			<i class="far fa-envelope"></i>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			mailLoaded: false
		};
	},
	computed: {
		contact() {
			return this.$store.getters.contact;
		}
	},
	methods: {
		toMail() {
			this.$store.commit("person", false);
			this.$store.commit("contact", true);
			this.$store.commit("info", false);
			this.$store.commit("profession", "");
			this.$store.commit("text", { type: "all", bool: false });
		}
	},
	mounted() {
		setTimeout(() => {
			this.mailLoaded = true;
		}, 3500);
	}
};
</script>

<style lang="scss" scoped>
	#mail {
		position: absolute;
		z-index: 50;

		color: rgba($color: white, $alpha: 0.7);

		font-size: 2.8rem;
		transition: font-size 0.2s;
		transition: color font-size 0.2s;

		top: 1rem;
		right: 3.5rem;
		transform: translateX(50%);

		&:hover {
			color: rgba($color: white, $alpha: 1);
			font-size: 5rem;
			cursor: pointer;
		}
	}
</style>