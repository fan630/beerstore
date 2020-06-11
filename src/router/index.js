import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login'
import About from '../views/About.vue'
import Products from '../views/admin/Products'
import Coupon from '../views/admin/Coupon'
import Orders from '../views/admin/Orders'
import CustomOrder from '../views/shopping/CustomOrder'
import OrderList from '../views/shopping/OrderList'
import CheckOut from '../views/shopping/CheckOut'
import CheckOutPay from '../views/shopping/CheckOutPay'
import MyOrder from '../views/shopping/MyOrder'
import Home from '../views/shopping/Home.vue'
import Index from '../views/shopping/Index.vue'

Vue.use(VueRouter)
  const routes = [
    {
      path: '*',
      redirect: 'login',
    },
    {
      path: '/',
      name:'Index',
      component: Index,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: 'my_order',
          name: 'MyOrder',
          component: MyOrder,
        },
        {
          path: 'custom_order',
          name: 'CustomOrder',
          component: CustomOrder,
        },
        {
          path: 'order_list',
          name: 'OrderList',
          component: OrderList,
        },
        {
          path: 'checkout',
          name: 'CheckOut',
          component: CheckOut,
        },
        {
          path: 'checkout_pay/:orderId',
          name: 'CheckOutPay',
          component: CheckOutPay,
        },
      ]
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
          // meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          // meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: Coupon,
          // meta: { requiresAuth: true }
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
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
