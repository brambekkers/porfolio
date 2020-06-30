<template>
	<div
		id="contact"
		v-if="contact"
	>
		<div id="form">
			<p class="title"> Contact</p>
			<input
				type="text"
				v-model="name"
				placeholder="Naam..."
			>
			<input
				type="email"
				v-model="email"
				placeholder="Email..."
			>
			<input
				type="text"
				v-model="subject"
				placeholder="Onderwerp..."
			>
			<textarea
				type="textfield"
				v-model="message"
				rows="20"
				placeholder="Bericht..."
			></textarea>
			<button @click="sendMsg">Stuur bericht</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			email: "",
			subject: "",
			message: ""
		};
	},
	computed: {
		contact() {
			return this.$store.getters.contact;
		}
	},
	methods: {
		sendMsg() {
			console.log("message send");
		}
	}
};
</script>

<style lang="scss" scoped>
	#contact {
		position: absolute;
		font-family: "Montserrat", sans-serif;
		font-weight: 200;

		z-index: 20;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		#form {
			height: 80vh;
			width: 80vw;
			max-width: 800px;
			min-width: 300px;

			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			text-align: center;

			.title {
				font-size: 3rem;
				font-weight: 200;
			}

			input,
			textarea {
				background: rgba($color: white, $alpha: 0.4);
				display: block;
				width: 90%;
				height: 34px;
				padding: 6px 12px;
				margin: 5px auto;
				font-size: 14px;
				line-height: 1.42857143;
				color: #555;
				// background-color: #fff;
				background-image: none;
				border: 1px solid #ccc;
				border-radius: 4px;
				-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
				-webkit-transition: border-color ease-in-out 0.15s,
					-webkit-box-shadow ease-in-out 0.15s;
				-o-transition: border-color ease-in-out 0.15s,
					box-shadow ease-in-out 0.15s;
				transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

				border-radius: 0;
				border-color: #ccc;
				border-width: 0 0 2px 0;
				border-style: none none solid none;
				box-shadow: none;

				&:focus {
					outline: none;
				}
			}

			textarea {
				height: 200px;
			}

			button {
				margin-right: auto;
				margin-left: auto;
				white-space: nowrap;
				padding: 8px 12px;
				width: 50%;
				border: none;
				border-radius: 3px;
			}
		}
	}
</style>