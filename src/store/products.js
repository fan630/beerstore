import axios from 'axios';

export default{
    state: {
        products: [],
    },
    actions: {
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
        PRODUCTS(state, payload) {
            state.products = payload
        },
    },
    getters: {
        products: state => state.products,
    }
}