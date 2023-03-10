import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueYoutube)

new Vue({
  render: h => h(App),
}).$mount('#app')
