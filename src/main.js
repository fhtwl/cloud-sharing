import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/common/css/common.css'
import 'element-ui/lib/theme-chalk/index.css';

import './assets/common/font/iconfont/iconfont.css';

Vue.prototype.$store = store
import router from './router'


import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

import $http from '@/utils/http';
Vue.prototype.$http = $http

import { msgAlert, messages } from './utils/msg-box.js';
Vue.prototype.$messages = messages;
Vue.prototype.$msgAlert = msgAlert;



// import VueShowdown from 'vue-showdown'
// Vue.use(VueShowdown, {
//   flavor: 'github',
//   options: {
//     emoji: true
//   }
// })
let vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default vm