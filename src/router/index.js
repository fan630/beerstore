import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login'
import About from '../components/About'
import Products from '../components/views/admin/Products'
import Coupon from '../components/views/admin/Coupon'
import Orders from '../components/views/admin/Orders'
import CustomOrder from '../components/views/shopping/CustomOrder'
import OrderList from '../components/views/shopping/OrderList'
import Home from '../components/Home.vue'

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
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: Coupon,
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
          children: [
            {
              path: 'order_list',
              name: 'OrderList',
              component: OrderList,
            },
          ]
        },
      ]
    },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
