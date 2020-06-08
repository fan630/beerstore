import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap'

import App from './App.vue'
import router from './router'
import store from './store'
import './bus';
import currencyFilter from './filters/currency';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      const api = 'https://vue-course-api.hexschool.io/api/user/check'
      axios.post(api).then(response => {
        if(response.data.success){
          next()
        }else{
          console.log('驗證錯誤, 請重新登入')
          next({
            path:'/login'
          })
        }
      })
    }else{
      next()
    }
})





