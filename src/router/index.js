import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '*',
    redirect: 'login',
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../components/Index.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/shopping/About.vue'),
      },
      {
        path: '',
        name: 'Home',
        component: () => import('../views/shopping/Home.vue'),
      },
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('../views/shopping/Shop.vue'),
      },
      {
        path: 'shop/:productId',
        name: 'SingleProduct',
        component: () => import('../views/shopping/SingleProduct.vue'),
      },
      {
        path: 'my_order',
        name: 'MyOrder',
        component: () => import('../views/shopping/MyOrder.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/shopping/Coupon.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/shopping/Cart.vue'),
      },
      {
        path: 'checkout',
        name: 'CheckOut',
        component: () => import('../views/shopping/CheckOut.vue'),
      },
      {
        path: 'checkout_pay/:orderId',
        name: 'CheckOutPay',
        component: () => import('../views/shopping/CheckOutPay.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/admin/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/admin/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupon',
        name: 'CouponManage',
        component: () => import('../views/admin/CouponManage.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
];

const router = new VueRouter({
  linkActiveClass: 'active',
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
