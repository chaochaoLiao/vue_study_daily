import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/HmButton'

Vue.component('HmButton',HmButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
