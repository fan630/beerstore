import Vue from 'vue';
import axios from 'axios';

export default {
  state: {
    cart: {
      carts: [],
    },
    myLove:[]
  },
  actions: {
    getCart(context) {
      const api = 'https://vue-course-api.hexschool.io/api/fan630/cart';
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data);
        context.commit('LOADING', false);
      });
    },
    removeCartItem(context, id) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(api).then((response) => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
        new Vue().$bus.$emit('message:push', response.data.message, 'danger');
      });
    },
    addtoCart(context, { id, qty }) {
      const api = 'https://vue-course-api.hexschool.io/api/fan630/cart';
      const cart = {
        product_id: id,
        qty,
      };
      context.commit('LOADING', true);
      axios.post(api, { data: cart }).then((response) => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
        new Vue().$bus.$emit('message:push', response.data.message, 'success');
      });
    },
    addCouponCode(context, couponCode) {
      const api = 'https://vue-course-api.hexschool.io/api/fan630/coupon';
      const coupon = {
        code: couponCode,
      };
      context.commit('LOADING', true);
      axios.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart');
          context.commit('LOADING', false);
          new Vue().$bus.$emit('message:push', response.data.message, 'success');
        } else {
          new Vue().$bus.$emit('message:push', response.data.message, 'danger');
          context.commit('LOADING', false);
        }
      });
    },
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
  },
  getters: {
    cart: (state) => state.cart,
  },
};
