import Vue from 'vue'//引入vue
import Vuex from 'vuex'//引入Vuex
Vue.use(Vuex)//使用Vuex
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

//暴露Vuex对象
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})