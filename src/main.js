'use strict'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Config from './config'

Vue.prototype.$config = Config
Vue.use(ElementUI)

var vm = new Vue({
  el: '#app',
  render: h => h(App),
})

