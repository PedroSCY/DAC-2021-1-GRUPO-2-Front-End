import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../views/Home.vue"
import store from "@/store"

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const logado = store.state.logado;
  console.log("Logado:",logado)

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !logado) {
    next('/');
  } else {
    next();
  }
});

export default router
