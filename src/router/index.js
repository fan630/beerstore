import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/pages/Login'
import About from '../components/pages/About'
import Products from '../components/pages/Products'
import CustomOrder from '../components/pages/CustomOrder'
import Home from '../components/pages/Home.vue'

Vue.use(VueRouter)
  const routes = [
    {
      path: '*',
      redirect: 'login',
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true }
        },
        // 可以在這邊新增訂單列表和優惠券
      ]
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }, 
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'custom_order',
          name: 'CustomOrder',
          component: CustomOrder,
        },
        // 可以在這邊新增訂單列表和優惠券
      ]
    },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
