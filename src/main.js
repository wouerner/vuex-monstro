import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

// importando os modulos
import store from './store.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
