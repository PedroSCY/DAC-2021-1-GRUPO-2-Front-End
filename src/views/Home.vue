<template>
 <div>
   <header-page></header-page>
 </div>
  <div class="tab-pane" role="tabpanel" aria-labelledby="fornecedores-tab">
    <h2 class="pt-1 pb-1 mt-3 text-success">Fornecedores Cadastrados</h2>
    <hr />

    <div class=" d-flex justify-content-center row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 ">
      <div
        class="listaLivros col d-flex justify-content-center"
        v-for="fornecedor in fornecedores"
        :key="fornecedor.id"
      >
        <div
          class="modal"
          v-bind:id="'modal' + fornecedor.id"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn-close btn-outline-success"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  v-on:click="refresh()"
                ></button>
              </div>

              <div class="modal-body modal-dialog-scrollable rounded">
                <form class="form" @submit.prevent>
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
                    <h4>Atualize ou Remova um Fornecedor</h4>
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
                    v-model="fornecedor.cnpj"
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
                    v-model="fornecedor.telefone"
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
                    v-model="fornecedor.complemento"
                  />

                  <br />

                  <div class="text-center">
                    <button
                      type="submit"
                      value="Enviar"
                      class="btn btn-outline-success me-1"
                      data-bs-dismiss="modal"
                      v-on:click="atualizarFornecedor(fornecedor)"
                    >
                      Atualizar
                    </button>

                    <button
                      type="submit"
                      value="Enviar"
                      class="btn btn-outline-danger me-1"
                      data-bs-dismiss="modal"
                      v-on:click="removerFornecedor(fornecedor.id)"
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
                v-bind:data-bs-target="'#modal' + fornecedor.id"
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
    <div
      class="modal"
      id="FormModalVazio"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
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
            <form class="form" @submit.prevent>
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
                <h4>Adicione um Fornecedor</h4>
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
                id="inputNomeAdd"
                placeholder="insira o nome do fornecedor"
                v-model="fornecedor.nome"
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
                id="inputCNPJAdd"
                v-model="fornecedor.cnpj"
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
                id="inputTelefoneAdd"
                v-model="fornecedor.telefone"
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
                id="inputComplementoFornecedorAdd"
                v-model="fornecedor.complemento"
              />

              <br />

              <div class="text-center">
                <button
                  type="submit"
                  value="Enviar"
                  class="btn btn-outline-success me-1"
                  v-on:click="enviarNovoFornecedor()"
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
import HeaderPage from "../components/HeaderPage.vue"
import servicoFornecedor from "../services/servicoFornecedor";

export default {
  name: "Home",
  data() {
    return {
      fornecedores: undefined,

      fornecedor: {
        nome: "",
        cnpj: "",
        telefone: "",
      },
    };
  },
    components: {
    HeaderPage
  },
  calcularTarget(id) {
    return "#" + id;
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
  methods: {
    refresh: function () {
      location.reload();
    },
    atualizarFornecedor: function (fornecedor) {
      if (
        fornecedor.nome != "" &&
        fornecedor.cnpj != "" &&
        fornecedor.telefone != ""
      ) {
        servicoFornecedor
          .atualiza(fornecedor)
          .then((dado) => {
            console.log(dado.data);
            this.$store.commit("ATUALIZA_FORNECEDOR", fornecedor);
            console.log("Fornecedor atualizado: " + fornecedor.nome);
          })
          .catch((erro) => {
            switch (erro.response.status) {
              case 400:
                this.$store.commit("logout");
                break;
            }
            console.log(erro.message);
            console.log(erro.response.data.message);
          });

        console.log(fornecedor);
        this.$router.push("/home");
        location.reload();
      } else {
        console.log("ERRO: Fornecedor com valores vazios ");
      }
    },

    removerFornecedor: function (id) {
      servicoFornecedor
        .remove(id)
        .then((dado) => {
          console.log(dado.data);
          this.$store.commit("REMOVE_FORNECEDOR", this.fornecedor);
          console.log("Fornecedor removido: " + this.fornecedor.nome);
        })
        .catch((erro) => {
          switch (erro.response.status) {
            case 400:
              this.$store.commit("logout");
              break;
          }
          console.log(erro.message);
          console.log(erro.response.data.message);
        });

      this.$router.push("/home");
      location.reload();
    },

    enviarNovoFornecedor: function () {
      if (
        this.fornecedor.nome != "" &&
        this.fornecedor.cnpj != "" &&
        this.fornecedor.telefone != ""
      ) {
        console.log("teste1");
        servicoFornecedor
          .adiciona(this.fornecedor)
          .then((dado) => {
            console.log(dado.data);
            this.$store.commit("ADICIONA_FORNECEDOR", this.fornecedor);
            console.log("Fornecedor adicionado: " + this.fornecedor.nome);
          })
          .catch((erro) => {
            switch (erro.response.status) {
              case 401:
                this.$store.commit("logout");
                break;
            }
            console.log(erro.message);
            console.log(erro.response.data.message);
          });

        this.$router.push("/home");
        location.reload();
      } else {
        console.log("ERRO: Fornecedor com valores vazios ");
      }
    },
  },
};
</script>

<style>
</style>