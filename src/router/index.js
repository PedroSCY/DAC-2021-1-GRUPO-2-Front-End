import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"
import Form from "../components/Form.vue"

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/form',
    component: Form
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
