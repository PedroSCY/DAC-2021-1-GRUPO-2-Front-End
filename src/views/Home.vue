<template>
  <div
    class="tab-pane"
    role="tabpanel"
    aria-labelledby="fornecedores-tab"
  >
    <h2 class="pt-1 pb-1 mt-3 text-success">Fornecedores Cadastrados</h2>
    <hr />
    
    <div class="row row-cols-2 row-cols-sm-3 justify-content-center">
      
      <div
        class="card col mx-3 mb-3 text-white bg-success"
        style="width: 16rem;"
      >
        <div class="card-body">
          <strong>
            <p class="card-text">
              Nome: teste
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              CNPJ: 56.517.931/0001-16
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              Telefone: (83) 99999-9999
            </p>
          </strong>

          <br>

          <div class="card-footer border-success text-center">
            <router-link class="btn btn-outline-light" to="/form"> Editar </router-link>
          </div>
          
        </div>
      </div>

      <div
        class="card col mx-3 mb-3 text-white bg-success"
        style="width: 16rem;"
      >
        <div class="card-body">
          <strong>
            <p class="card-text">
              Nome: teste
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              CNPJ: 56.517.931/0001-16
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              Telefone: (83) 99999-9999
            </p>
          </strong>

          <br>

          <div class="card-footer border-success text-center">
            <router-link class="btn btn-outline-light" to="/form"> Editar </router-link>
          </div>
          
        </div>
      </div>

      <div
        class="card col mx-3 mb-3 text-white bg-success"
        style="width: 16rem;"
      >
        <div class="card-body">
          <strong>
            <p class="card-text">
              Nome: teste
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              CNPJ: 56.517.931/0001-16
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              Telefone: (83) 99999-9999
            </p>
          </strong>

          <br>

          <div class="card-footer border-success text-center">
           <router-link class="btn btn-outline-light" to="/form"> Editar </router-link>
          </div>
          
        </div>
      </div>

      <div
        class="card col mx-3 mb-3 text-white bg-success"
        style="width: 16rem;"
      >
        <div class="card-body">
          <strong>
            <p class="card-text">
              Nome: teste
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              CNPJ: 56.517.931/0001-16
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              Telefone: (83) 99999-9999
            </p>
          </strong>

          <br>

          <div class="card-footer border-success text-center">
            <router-link class="btn btn-outline-light" to="/form"> Editar </router-link>
          </div>
          
        </div>
      </div>

      <div
        class="card col mx-3 mb-3 text-white bg-success"
        style="width: 16rem;"
      >
        <div class="card-body">
          <strong>
            <p class="card-text">
              Nome: teste
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              CNPJ: 56.517.931/0001-16
            </p>
          </strong>

          <br>

          <strong>
            <p class="card-text">
              Telefone: (83) 99999-9999
            </p>
          </strong>

          <br>

          <div class="card-footer border-success text-center">

            <router-link class="btn btn-outline-light" to="/form"> Editar </router-link>
      
          </div>
          
        </div>
      </div>
    </div>

    <div class="text-center ">

      <router-link class="mt-2 btn btn-outline-success" to="/form"> Adicionar </router-link>
     
    </div>

    
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return { 
      fornecedores: this.$store.state.autores
    };
  },
};
</script>

<style>
</style>