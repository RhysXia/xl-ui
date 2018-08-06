import '../../styles/theme-default/lib/index.css'
import 'highlight.js/styles/github.css'
import Vue from 'vue'
import App from './App'
import DemoBlock from './components/demo-block'
import VueRouter from 'vue-router'
import routes from './router'
import xlVision from '../../src/index'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(xlVision)

const router = new VueRouter({
  routes
})

Vue.component('demo-block', DemoBlock)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
