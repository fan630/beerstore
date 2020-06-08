import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/pages/Login'
import About from '../components/pages/About'
import Products from '../components/pages/Products'

Vue.use(VueRouter)
  const routes = [
  {
    path: '*',
    redirect: 'login',
  },
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld,
  //   meta: { requiresAuth: true }
  // },
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
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
