import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false
axios.defaults.withCredentials = true

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

//全境首衛
// router.beforeEach((to, from, next) => {
//   // 如果是true就不會放行,因此在routes裡面還有加上一行參數, 如果是false就會放行
//   if (to.meta.requiresAuth) {
//     //console.log('還未登入, 請重新登入')
//     const api = 'https://vue-course-api.hexschool.io/api/user/check'
//     axios.post(api).then((response) => {
//       if (response.data.success) {
//         next()
//       } else {
//         console.log('還未登入, 請重新登入')
//         next({
//           path: '/login'
//         })  
//       }
//     })
//   } else {
//     next()
//   }
// })




