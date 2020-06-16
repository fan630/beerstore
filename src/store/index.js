import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true, 
  state: {
    isLoading: false, 
    products: [], 
    cart: {
       carts:[]
    },
  },

  actions: {
    updateLoading(context, status){
       context.commit('LOADING', status)
    }, 
    getProducts(context) {
      context.commit('LOADING', true)
      const api = `https://vue-course-api.hexschool.io/api/fan630/products/all`
      axios.get(api).then((response) => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('LOADING', false)
      })
    }, 
    getCart(context) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/cart`
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        context.commit('CART', response.data.data)
        context.commit('LOADING', false)
      })
    }, 
    removeCartItem(context, id) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/cart/${id}`
      context.commit('LOADING', true)
      axios.delete(api).then((response) => {
        context.dispatch('getCart')
        context.commit('LOADING', false)
        new Vue().$bus.$emit('message:push', response.data.message, 'danger')
      })
    }, 
    addtoCart(context, {id, qty}) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/cart`
      const cart = {
        product_id: id,
        qty,
      }
      context.commit('LOADING', true)
      axios.post(api, { data: cart }).then((response) => {
        context.dispatch('getCart')
        context.commit('LOADING', false)
        new Vue().$bus.$emit('message:push', response.data.message, 'success')
      })
    }, 
  },
  mutations: {
    LOADING(state, status){
       state.isLoading = status
    }, 
    PRODUCTS(state, payload){
      state.products = payload
    }, 
    CART(state, payload){
      state.cart = payload
    }
  },
  getters:{
    products(state) {
      return state.products
    }, 
    cart(state) {
      return state.cart
    },
    isLoading(state) {
      return state.isLoading
    },  
  }
})
