import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './axios'
import store from './store'

axios.defaults.baseURL ="http://localhost:8080/"
import Element from 'element-ui'
import  "element-ui/lib/theme-chalk/index.css"
import qs from 'qs'

Vue.prototype.$qs = qs
Vue.use(Element)
Vue.prototype.$axios = axios //

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h=>h(App),
  router,
  components: { App },
  template: '<App/>'
})

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
