import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vinos',
    name: 'vinos',
    component: () => import('../views/VinosView.vue')
  },
  {
    path: '/promocion',
    name: 'vinosEnPromocion',
    component: () => import('../views/VinosEnPromocionView.vue')
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: () => import('../views/AccesoriosView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue'),
    children: [{ path: 'confirmed/:orden', name: 'confirmed', props: true, component: () => import('../views/ConfirmedView.vue'), }]
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
