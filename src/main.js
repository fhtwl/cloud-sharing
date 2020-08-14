import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUi from 'element-ui'
import './assets/common/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'


import './assets/common/css/theme.scss'
import router from './router'


Vue.use(ElementUi)

Vue.config.productionTip = false

Vue.prototype.$store = store
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
