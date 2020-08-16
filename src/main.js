import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/common/css/common.css'
import 'element-ui/lib/theme-chalk/index.css';




Vue.prototype.$store = store
import router from './router'


import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

import $http from '@/utils/http';
Vue.prototype.$http = $http

let vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default vm