import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1
  },
  modules: {
    cart
  }
})
