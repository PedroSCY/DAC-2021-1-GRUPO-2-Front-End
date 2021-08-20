<template>
<HeaderPage></HeaderPage>
<router-view></router-view>
<Footer></Footer>
</template>

<script>

import HeaderPage from "../src/components/HeaderPage.vue"
import Footer from './components/Footer.vue'

export default {
  name: 'App',
   data(){
    return {
    
    }
  },
  components: {
    HeaderPage,
    Footer
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
  margin-top: 0px;
}
</style>
