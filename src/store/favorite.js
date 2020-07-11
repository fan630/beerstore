import Vue from 'vue';

export default {
  state: {
    favorites: [],
    favoritesLength: 0,
    // isFavorite: false
  },
  actions: {
    updateFavorite(context, status) {
      context.commit('ISFAVORITE', status);
    },
    getFavorite(context) {
      const favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
      context.commit('FAVORITES', favoriteData);
      context.commit('FAVORITES_LENGTH', favoriteData.length);
      context.dispatch('getProducts');
    },
    addtoFavorite(context, product) {
      const favoriteData = {
        id: product.id,
        title: product.title,
      };
      context.commit('PUSH_FAVORITE', favoriteData);
      localStorage.setItem('favoriteData', JSON.stringify(context.state.favorites));
      context.dispatch('getFavorite');
      new Vue().$bus.$emit('message:push', '已加入我的最愛', 'success');
    },
    removeFavorite(context, product) {
      context.commit('REMOVE_FAVORITE', product);
      localStorage.setItem('favoriteData', JSON.stringify(context.state.favorites));
      context.dispatch('getFavorite');
      new Vue().$bus.$emit('message:push', '已刪除我的最愛', 'danger');
    },
  },
  mutations: {
    FAVORITES(state, payload) {
      state.favorites = payload;
    },
    FAVORITES_LENGTH(state, payload) {
      state.favoritesLength = payload;
    },
    PUSH_FAVORITE(state, favorite) {
      state.favorites.push(favorite);
    },
    REMOVE_FAVORITE(state, favorite) {
      state.favorites.forEach((item, index) => {
        if (item.id === favorite.id) {
          state.favorites.splice(index, 1);
        }
      });
    },
  },
  getters: {
    favorites: (state) => state.favorites,
    favoritesLength: (state) => state.favoritesLength,
  },
};
