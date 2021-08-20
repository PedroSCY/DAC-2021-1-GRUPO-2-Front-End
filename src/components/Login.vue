<template>
  <div class="container mt-4 w-75">
    <h4 class="fw-bold mb-5">Insira seus dados para fazer Login!</h4>

    <form
      class="row g-3 pb-4 border border-success rounded needs-validation"
      method="POST"
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
        v-if="erroLogin===true"
      >
        <h5>NÃ£o foi possÃ­vel fazer login.</h5>
        <p>
          Verifique as credenciais e tente novamente ou crie uma nova conta.
        </p>
      </div>

      <div class="col-12">
        <label for="username" class="d-flex align-items-start form-label">Email: </label>
        <input
          name="username"
          class="form-control border border-success rounded"
          placeholder="exemplo@exemplo.com"
        />
      </div>

      <div class="col-12">
        <label for="password" class="d-flex align-items-start form-label">Senha: </label>
        <input
          type="password"
          name="password"
          class="form-control border border-success rounded"
          placeholder="Senha"
        />
      </div>

      <button type="submit" class="btn btn-success btn-block mx-auto w-25">
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
export default {
    name: "Login",
  data() {
    return {
        erroLogin: false,
    };
  },
};
</script>

<style>
</style>