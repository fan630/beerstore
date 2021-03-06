import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';
import cartModules from './cart';
import favoriteModules from './favorite';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
  },
  modules: {
    productsModules,
    cartModules,
    favoriteModules
  },
});
