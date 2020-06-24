import Vue from 'vue';

export default {
    state: {
        favorites: [],
        favoritesLength: 0,
    },
    actions: {
        getFavorite(context) {
            const favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
            context.commit('FAVORITES', favoriteData);
            context.commit('FAVORITES_LENGTH', favoriteData.length);
            context.dispatch('getProducts')
        },
        addtoFavorite(context, favorite) {
            const favoriteData = {
                id: favorite.id,
                title: favorite.title
            };
            context.commit('PUSH_FAVORITE', favoriteData);
            localStorage.setItem('favoriteData', JSON.stringify(context.state.favorites));
            context.dispatch('getFavorite');
            new Vue().$bus.$emit('message:push', '已加入我的最愛', 'success');
        },
        removeFavorite(context, favorite) {
            context.commit('REMOVE_FAVORITE', favorite);
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
        favorites: state => state.favorites,
        favoritesLength: state => state.favoritesLength,
    },
};
