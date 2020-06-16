import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true, 
  state: {
    isLoading: false, 
    products: [], 

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

  },

  mutations: {
    LOADING(state, status){
       state.isLoading = status
    }, 
    PRODUCTS(state, payload){
      state.products = payload
    }
  },

})
