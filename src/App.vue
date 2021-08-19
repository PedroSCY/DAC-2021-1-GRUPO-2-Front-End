<template>
 <h1>Teste Inicio</h1>
 <minha-home></minha-home>
</template>

<script>
import MinhaHome from './views/MinhaHome.vue'

export default {
  name: 'App',
   data(){
    return {
      msg: "Bem vindo ao Front"
    }
  },
  components: {
    MinhaHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
