import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import './assets/css/global.css'
import './assets/css/color.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import Vue Material
// import { MdButton, MdMenu } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'



Vue.config.productionTip = false

Vue.use(BootstrapVue)

// Vue.use(MdButton)
// Vue.use(MdMenu)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// Material components use in this project
