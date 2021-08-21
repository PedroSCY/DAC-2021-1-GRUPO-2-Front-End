import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue"
import Form from "../components/Form.vue"
import Home from "../views/Home.vue"
import FormModal from "../components/FormModal"

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
  {
    path: '/formModal',
    component: FormModal
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
