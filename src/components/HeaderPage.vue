<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="52" height="40" alt="" />
        <h4 class="fw-bold d-inline-block">Livraria Turing</h4>
      </a>

      <div id="navbarExpand" class="collapse navbar-collapse">
        <ul
          class="navbar-nav me-auto mb-2 mb-lg-0"
          sec:authorize="!isAuthenticated()"
        ></ul>
      </div>
      <form action="/">
        <button 
          class="btn btn-outline-dark"
          type="text"
          id = "btnSair"
          v-if="(paginaAtual==='http://localhost:8080/home')"
        >
          Sair
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      paginaAtual: window.location.href,
    };

  }
};
</script>

<style>
</style>