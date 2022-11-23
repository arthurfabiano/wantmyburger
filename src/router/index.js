import { createRouter, createWebHistory } from 'vue-router'
import Home_View from '../views/HomeView.vue'
import Pedidos_View from '../views/PedidosView.vue'

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: Home_View
  },
  {
    path: '/pedidosview',
    name: 'pedidosview',
    component: Pedidos_View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
