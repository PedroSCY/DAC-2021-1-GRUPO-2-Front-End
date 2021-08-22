<template>
	<div>
		<header-page></header-page>
	</div>
	<div class="container mt-4 w-75">
		<h4 class="fw-bold mb-5">Insira seus dados para fazer Login!</h4>

		<form
			class="row g-3 pb-4 border border-success rounded needs-validation"
			@submit.prevent="handleLogin"
		>
			<div
				class="
          col-12
          p-3
          mx-auto
          w-75
          alert alert-danger
          text-center
          border border-danger
        "
				v-if="erroLogin === true"
			>
				<h5>Não foi possi­vel fazer login.</h5>
				<p>
					Verifique as credenciais e tente novamente ou crie uma nova conta.
				</p>
			</div>

			<div class="col-12">
				<label for="username" class="d-flex align-items-start form-label"
					>Email:
				</label>
				<input
					name="username"
					class="form-control border border-success rounded"
					placeholder="exemplo@exemplo.com"
					v-model="username"
				/>
				<ErrorMessage name="username" class="error-feedback" />
			</div>

			<div class="col-12">
				<label for="password" class="d-flex align-items-start form-label"
					>Senha:
				</label>
				<input
					type="password"
					name="password"
					class="form-control border border-success rounded"
					placeholder="Senha"
					v-model="password"
				/>
				<ErrorMessage name="password" class="error-feedback" />
			</div>

			<div class="form-group">
				<button class="btn btn-primary btn-block" :disabled="loading">
					<span
						v-show="loading"
						class="spinner-border spinner-border-sm"
					></span>
					<span>Login</span>
				</button>
			</div>

			<div class="form-group">
				<div v-if="message" class="alert alert-danger" role="alert">
					{{ message }}
				</div>
			</div>

			<!--button type="submit" class="btn btn-success btn-block mx-auto w-25">
        Entrar
      </button-->
		</form>
	</div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';
//import { ErrorMessage } from "vee-validate";

export default {
	name: 'Login',
	data() {
		return {
			username: '',
			password: '',

			erroLogin: false,
		};
	},
	components: {
		HeaderPage,
	},
	computed: {
		loggedIn() {
			return this.$store.state.logado;
		},
	},
	created() {
		if (this.loggedIn) {
			this.$router.push('/');
		}
	},
	methods: {
		handleLogin() {
			this.loading = true;

			this.$store
				.dispatch('login', { login: this.username, senha: this.password })
				.then(() => {
					console.log('Login sucesso');
					this.$router.push('/home');
				})
				.catch((erro) => {
					console.log(erro.message);
					console.log(erro.response.data.message);
					this.loading = false;
					this.message =
						(erro.response &&
							erro.response.data &&
							erro.response.data.message) ||
						erro.message ||
						erro.toString();
				});
		},
	},
};
</script>

<style></style>
