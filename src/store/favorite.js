import Vue from 'vue';

export default {
    state: {
        favorites: {},
        favoritesLength: 0,
    },
    actions: {
        getFavorite(context) {
            const favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
            context.commit('FAVORITES', favoriteData);
            context.commit('FAVORITES_LENGTH', favoriteData.length);
            context.dispatch('products/getProducts')
        },
        removeFavorite(context, { favoriteItem, delall }) {
            if (delall) {
                localStorage.removeItem('favoriteData');
            } else {
                context.commit('REMOVE_FAVORITE', favoriteItem);
                localStorage.setItem('favoriteData', JSON.stringify(context.state.favorites));
            }
            context.dispatch('getFavorite');
            context.dispatch('alertMessageModules/updateMessage', { message: '已刪除我的最愛', status: 'warning' }, { root: true });
        },
        addtoFavorite(context, singleProduct) {
            const favoriteData = {
                id: singleProduct.id,
                title: singleProduct.title
            };
            context.commit('PUSH_FAVORITE', favoriteData);
            localStorage.setItem('favoriteData', JSON.stringify(context.state.favorites));
            context.dispatch('getFavorite');
            new Vue().$bus.$emit('message:push', '已加入我的最愛', 'success');
        }
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
