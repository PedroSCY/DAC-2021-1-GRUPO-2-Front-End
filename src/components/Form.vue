<template>
  <div class="container mt-4 w-75">
    <h4 class="fw-bold mb-5">Insira seus dados para criar uma nova conta!</h4>

    <form
      class="row g-3 pb-4 border border-success rounded needs-validation"
     
      method="POST"
    >
      <div
        class="
          col-12
          alert alert-danger
          w-75
          mx-auto
          text-center text-bould
          border border-danger
        "
        role="alert"
         v-if="erroLogin===true"
       
      ></div>

      <div class="col-12 col-sm-6">
        <label for="inputEmail" class=" d-flex align-items-start form-label"> Nome </label>

        <input
          type="text"
          class="form-control border border-success"
          id="inputEmail"
          placeholder="insira o nome do fornecedor"
          required
        />

        <div class="valid-feedback">Este e-mail parece OK!</div>

        <div
          class="invalid-feedback"

        >
          Erros email
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <label for="inputNome" class="d-flex align-items-start form-label"> CNPJ </label>

        <input
          type="text"
          class="form-control border border-success"
          id="inputNome"
          placeholder="insira o CNPJ do fornecedor"
          required
        />

        <div class="valid-feedback">Este nome parece OK!</div>

        <div
          class="invalid-feedback"
        >
          Erros nome
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <label for="inputSenha" class="d-flex align-items-start form-label">Telefone </label>
        <input
          type="tel"
          class="form-control border border-success"
          id="inputSenha"
          placeholder="No mínimo 11 números!"
          required
       
        />

        <div class="valid-feedback">As senhas estão iguais.</div>

        <div
          class="invalid-feedback"
        >
          Erros senha
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <label for="inputConfirmarSenha" class="d-flex align-items-start form-label">
          Complemento
        </label>

        <textarea 
          class="form-control border border-success"
          id="inputComplementoFornecedor"
          required
        />

        <div class="valid-feedback">As senhas estão iguais.</div>
      
      </div>

      <button
        id="btnSalvarFornecedor"
        class="btn btn-outline-success mt-4 mb-3 w-25 mx-auto"
        type="submit"
      >
        Salvar Fornecedor
      </button>

      <a
        class="btn btn-outline-danger mt-4 mb-3 w-25 mx-auto" href="/home"
      >
        Cancelar
      </a>
      
    </form>
  </div>
</template>



<script>
export default {
  name: "Form",
  data() {
    return {
        erroLogin: false,
    };
  },
};
</script>

<style>
</style>