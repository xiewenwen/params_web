import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http=axios
axios.defaults.baseURL="http://localhost:9001"


Vue.use(Element)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
