<template>
	<div id="texts">
		<transition
			name="bounceLeft"
			mode="out-in"
		>
			<div
				class="text textIntro"
				key="textIntro"
				v-if="text.intro &&text.all"
			>
				<transition-group name="bounceLeft">
					<p
						class="hallo"
						key="hallo"
						v-if="intro.hallo"
					>Hallo,</p>
					<p
						class="ikBen"
						key="ikBen"
						v-if="intro.ikBen"
					>ik ben</p>
					<p
						class="bram"
						key="bram"
						v-if="intro.bram"
					>Bram</p>
				</transition-group>
			</div>
			<div
				class="text textProfession"
				v-if="text.profession  &&text.all"
				key="textOutro"
			>
				<transition-group name="bounceLeft">
					<p
						class="teaching"
						key="teaching"
						@mouseover="enter('teaching')"
						@mouseleave="leave()"
						v-if="profession.teaching"
					>Docent</p>
					<p
						class="coding"
						key="coding"
						@mouseover="enter('coding')"
						@mouseleave="leave()"
						v-if="profession.coding"
					>Programmeur</p>
					<p
						class="making"
						key="making"
						@mouseover="enter('making')"
						@mouseleave="leave()"
						v-if="profession.making"
					>Maker</p>
				</transition-group>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			timeout: null,
			intro: {
				hallo: false,
				ikBen: false,
				bram: false
			},
			profession: {
				teaching: false,
				coding: false,
				making: false
			}
		};
	},
	watch: {
		scroll() {
			for (let i = 0; i < Object.keys(this.profession).length; i++) {
				const key = Object.keys(this.profession)[i];
				setTimeout(() => {
					this.profession[key] = true;
				}, 1000 * (i + 1));
			}
		}
	},
	computed: {
		text() {
			return this.$store.getters.text;
		},
		scroll() {
			return this.$store.getters.scroll;
		}
	},
	methods: {
		enter(prof) {
			clearTimeout(this.timeout);
			this.$store.commit("profession", prof);
		},
		leave() {
			this.timeout = setTimeout(() => {
				this.$store.commit("profession", "");
			}, 2000);
		}
	},
	mounted() {
		for (let i = 0; i < Object.keys(this.intro).length; i++) {
			const key = Object.keys(this.intro)[i];
			setTimeout(() => {
				this.intro[key] = true;
			}, 1000 * (i + 1));
		}
	}
};
</script>

<style lang="scss" scoped>
	#texts {
		font-family: "Montserrat", sans-serif;

		position: relative;
		padding-top: 5%;
		padding-left: 10%;
		width: 50%;

		@media (max-width: 600px) {
			width: 100%;
		}

		.text {
			position: absolute;
			z-index: 15;

			p {
				margin: 0;
				line-height: 90%;
				font-weight: 200;
			}

			.ikBen {
				white-space: nowrap;
				font-size: 92%;
			}
		}

		.textIntro {
			.bram {
				font-weight: 600;
				margin-top: 2%;
			}
			@media (max-width: 600px) {
				font-size: 5rem;
			}

			@media (min-width: 600px) {
				font-size: 7rem;

				.coding {
					font-size: 5rem;
				}
			}

			@media (min-width: 1200px) {
				font-size: 10rem;
			}
		}

		.textProfession {
			p {
				margin-top: 1rem;
				cursor: pointer;

				&:hover {
					color: white;
				}
			}

			@media (max-width: 600px) {
				font-size: 5rem;

				.coding {
					font-size: 3rem;
				}
			}

			@media (min-width: 600px) {
				font-size: 7rem;

				.coding {
					font-size: 5rem;
				}
			}

			@media (min-width: 1200px) {
				font-size: 10rem;

				.coding {
					font-size: 8rem;
				}
			}
		}
	}
</style>