<template>
	<div id="landing">
		<Background />
		<Texts />
		<Person />
		<Scroll />
		<Mail />
	</div>
</template>

<script>
	import Background from "@/components/Background.vue";
	import Texts from "@/components/Texts.vue";
	import Person from "@/components/Person.vue";
	import Scroll from "@/components/Scroll.vue";
	import Mail from "@/components/Mail.vue";
	export default {
		name: "Landing",
		components: { Background, Texts, Scroll, Person, Mail }
	};
</script>

<style lang="scss" scoped>
	#landing {
		display: flex;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	@media (max-width: 600px) {
		#landing {
			flex-direction: column;
		}
	}
	@media (min-width: 600px) {
		#landing {
			flex-direction: row;
		}
	}
</style>
