import Vue from 'vue';
import $ from 'jquery';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import AOS from 'aos';
import animated from 'animate.css';

// Vee-validate
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

import App from './App.vue';

import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateTransfer from './filters/date';
import 'aos/dist/aos.css';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateTransfer);
// animated
Vue.use(animated);

// Aos
AOS.init({
  once: true,
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animate__animated',
});

extend('required', required);

// 驗證名稱
// extend('secret', {
//   validate: value => value !== 'example',
//   message: '正確'
// });

// 驗證email
extend('email', {
  ...email,
  message: '郵件地址不正確',
});

// 驗證手機
extend('min', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: '長度不夠:應為10碼',
});

extend('max', {
  validate(value, args) {
    return value.length <= args.length;
  },
  params: ['length'],
  message: '長度超過:應為10碼',
});
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.prototype.$ = $;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = 'https://vue-course-api.hexschool.io/api/user/check';
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        console.log('驗證錯誤, 請重新登入');
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
