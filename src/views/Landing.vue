<template>
	<div id="landing">
		<Background />
		<Texts />
		<Person />
		<ScrollIcon />
		<CloseIcon />
		<MailIcon />
		<Info />
		<Contact />

	</div>
</template>

<script>
import Background from "@/components/Background.vue";
import Texts from "@/components/Texts.vue";
import Person from "@/components/Person.vue";
import ScrollIcon from "@/components/ScrollIcon.vue";
import MailIcon from "@/components/MailIcon.vue";
import CloseIcon from "@/components/CloseIcon.vue";
import Info from "@/components/Info.vue";
import Contact from "@/components/Contact.vue";

export default {
	name: "Landing",
	components: {
		Background,
		Texts,
		ScrollIcon,
		Person,
		MailIcon,
		CloseIcon,
		Info,
		Contact
	}
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
