import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './route'
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:route
})