<template>
  <div class="tab-pane" role="tabpanel" aria-labelledby="fornecedores-tab">
    <h2 class="pt-1 pb-1 mt-3 text-success">Fornecedores Cadastrados</h2>
    <hr />

    <div class="row row-cols-2 row-cols-sm-3 justify-content-center">
      <div
        class="listaLivros"
        v-for="fornecedor in fornecedores"
        :key="fornecedor.nome"
      >
        <div
          class="card col mx-3 mb-3 text-white bg-success"
          style="width: 16rem"
        >
          <div class="card-header"></div>
          <div class="card-body">

            <strong>
              <p class="d-flex align-items-start card-text">Nome: {{fornecedor.nome}}</p>
            </strong>

            <br />

            <strong>
              <p class="d-flex align-items-start card-text">CNPJ: {{fornecedor.CNPJ}}</p>
            </strong>

            <br />

            <strong>
              <p class="d-flex align-items-start card-text">Telefone: {{fornecedor.telefone}}</p>
            </strong>

            <br />

            <div class="card-footer border-success text-center">
              <router-link class="btn btn-outline-light" to="/form">
                Editar
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <router-link class="mt-2 btn btn-outline-success" to="/form">
        Adicionar
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      fornecedores: this.$store.state.fornecedores,
    };
  },
};
</script>

<style>
</style>