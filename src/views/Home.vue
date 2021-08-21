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
        <div class="modal" v-bind:id="'modal'+fornecedor.id" >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn-close btn-outline-success"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body modal-dialog-scrollable rounded">
                <form action="#" method="POST">
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
                    v-if="erroLogin === true"
                  ></div>

                  <div class="text-dark m-3 mb-5 text">
                    <h4> Atualize ou Remova um Fornecedor</h4>
                  </div>

                  <label
                    for="inputNome"
                    class="d-flex align-items-start form-label text-dark"
                  >
                    Nome
                  </label>

                  <input
                    type="text"
                    class="form-control border border-success"
                    id="inputNome"
                    v-model="fornecedor.nome"
                    placeholder="insira o nome do fornecedor"
                    
                    required
                  />

                  <div class="valid-feedback">Este nome parece OK!</div>

                  <div class="invalid-feedback">Erros email</div>

                  <label
                    for="inputCNPJ"
                    class="
                      d-flex
                      align-items-start
                      form-label
                      text-dark
                      mt-2
                    "
                  >
                    CNPJ
                  </label>

                  <input
                    type="text"
                    class="form-control border border-success"
                    id="inputCNPJ"
                    v-model="fornecedor.cnpj"
                    placeholder="insira o CNPJ do fornecedor"
                    required
                  />

                  <div class="valid-feedback">Este CNPJ parece OK!</div>

                  <div class="invalid-feedback">Erros CNPJ</div>

                  <label
                    for="inputTelefone"
                    class="
                      d-flex
                      align-items-start
                      form-label
                      text-dark
                      mt-2
                    "
                    >Telefone
                  </label>
                  <input
                    type="tel"
                    class="form-control border border-success"
                    id="inputTelefone"
                    v-model="fornecedor.telefone"
                    placeholder="No mínimo 11 números!"
                    required
                  />

                  <label
                    for="inputComplementoFornecedor"
                    class="
                      d-flex
                      align-items-start
                      form-label
                      text-dark
                      mt-2
                    "
                  >
                    Complemento
                  </label>
              

                  <textarea
                    class="form-control border border-success"
                    id="inputComplementoFornecedor"
                    v-model="fornecedor.complemento"
                  />

                  <br />

                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-outline-success me-1"
                    >
                      Atualizar
                    </button>

                    <button
                      type="submit"
                      class="btn btn-outline-success me-1"
                    >
                      Remover
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card col mx-3 mb-3 text-white bg-success"
          style="width: 16rem"
        >
          <div class="card-header"></div>
          <div class="card-body">
            <strong>
              <p class="d-flex align-items-start card-text">
                Nome: {{ fornecedor.nome }}
              </p>
            </strong>

            <br />

            <strong>
              <p class="d-flex align-items-start card-text">
                CNPJ: {{ fornecedor.cnpj }}
              </p>
            </strong>

            <br />

            <strong>
              <p class="d-flex align-items-start card-text">
                Telefone: {{ fornecedor.telefone }}
              </p>
            </strong>

            <br />

            <div class="card-footer border-success text-center">
              <button
                type="button"
                class="btn btn-outline-light"
                data-bs-toggle="modal"
                v-bind:data-bs-target="'#modal'+fornecedor.id"
              >
                Editar
              </button>
            </div>
          </div>
        </div>

        
      </div>
      
    </div>

    <div class="text-center">
      <button
        type="button"
        class="mt-2 btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#FormModalVazio"
      >
        Adicionar
      </button>
    </div>
     <div class="modal" id="FormModalVazio">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn-close btn-outline-success"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modal-dialog-scrollable rounded">
            <form action="#" method="POST">
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
                v-if="erroLogin === true"
              ></div>

              <div class="text-dark m-3 mb-5 text">
                <h4 >Adicione um Fornecedor</h4>
              </div>

              <label
                for="inputNome"
                class="d-flex align-items-start form-label text-dark"
              >
                Nome
              </label>

              <input
                type="text"
                class="form-control border border-success"
                id="inputNome"
                placeholder="insira o nome do fornecedor"
                required
              />

              <div class="valid-feedback">Este nome parece OK!</div>

              <div class="invalid-feedback">Erros email</div>

              <label
                for="inputCNPJ"
                class="d-flex align-items-start form-label text-dark mt-2"
              >
                CNPJ
              </label>

              <input
                type="text"
                class="form-control border border-success"
                id="inputCNPJ"
                placeholder="insira o CNPJ do fornecedor"
                required
              />

              <div class="valid-feedback">Este CNPJ parece OK!</div>

              <div class="invalid-feedback">Erros CNPJ</div>

              <label
                for="inputTelefone"
                class="d-flex align-items-start form-label text-dark mt-2"
                >Telefone
              </label>
              <input
                type="tel"
                class="form-control border border-success"
                id="inputTelefone"
                placeholder="No mínimo 11 números!"
                required
              />

              <label
                for="inputComplementoFornecedor"
                class="d-flex align-items-start form-label text-dark mt-2"
              >
                Complemento
              </label>

              <textarea
                class="form-control border border-success"
                id="inputComplementoFornecedor"
              />

              <br />

              <div class="text-center">

                <button
                  type="submit"
                  class="btn btn-outline-success me-1"
                >
                  Adicionar
                </button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import servicoFornecedor from "../services/servicoFornecedor";

export default {
  name: "Home",
  data() {
    return {
      fornecedores: this.$store.state.fornecedores,
    };
  },
  calcularTarget(id) {
    return '#' + id
  },
  created() {
    console.log("Created.");

    servicoFornecedor
      .lista()
      .then((dado) => {
        console.log(dado.data),
          (this.$store.state.fornecedores = dado.data),
          (this.fornecedores = this.$store.state.fornecedores);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
</style>