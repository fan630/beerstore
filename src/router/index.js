import Vue from 'vue';
import VueRouter from 'vue-router';

// components
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';
import Index from '../components/Index.vue';

// views
import About from '../views/shopping/About.vue';
import Products from '../views/admin/Products.vue';
import Coupon from '../views/admin/Coupon.vue';
import Orders from '../views/admin/Orders.vue';
import Shop from '../views/shopping/Shop.vue';
import SingleProduct from '../views/shopping/SingleProduct.vue';
import Cart from '../views/shopping/Cart.vue';
import CheckOut from '../views/shopping/CheckOut.vue';
import CheckOutPay from '../views/shopping/CheckOutPay.vue';
import MyOrder from '../views/shopping/MyOrder.vue';
import Home from '../views/shopping/Home.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '*',
    redirect: 'login',
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'shop',
        name: 'Shop',
        component: Shop,
      },
      {
        path: 'shop/:productId',
        name: 'SingleProduct',
        component: SingleProduct,
      },
      {
        path: 'my_order',
        name: 'MyOrder',
        component: MyOrder,
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
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
    ],
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    children: [
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
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
];

const router = new VueRouter({
  linkActiveClass: 'active',
  // mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
