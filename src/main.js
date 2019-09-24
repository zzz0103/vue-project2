import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Header from '../src/component/Header/Header.vue'
import './mock/mockserver.js'
import store from './store/index'
import './validate.js'
Vue.config.productionTip = false;
Vue.component('Header', Header)
new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
