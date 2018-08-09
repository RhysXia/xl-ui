import '@style/lib/index.css'
import 'highlight.js/styles/github.css'
import Vue from 'vue'
import App from './App'
import DemoBlock from './components/demo-block'
import VueRouter from 'vue-router'
import menus from './menus'
import xlVision from '@'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(xlVision)

const routes = []

const addRoute = menus => {
  menus.forEach(menu => {
    if (menu.children) {
      addRoute(menu.children)
    } else if (menu.redirect) {
      routes.push({
        path: menu.path,
        redirect: menu.redirect
      })
    } else {
      routes.push({
        path: menu.path,
        component: menu.component
      })
    }
  })
}

addRoute(menus)

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
