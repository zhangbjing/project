// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import BaseComponent from './util/BaseComponent'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(ElementUI)
Vue.use(BaseComponent)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
