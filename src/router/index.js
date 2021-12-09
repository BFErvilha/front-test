import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // meta:{
    //   breadcrumb: 'Home'
    // }
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: ()=> import('@/views/WishList'),
    meta:{
      breadcrumb: 'Lista de Desejos'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
