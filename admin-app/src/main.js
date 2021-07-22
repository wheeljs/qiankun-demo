import './public-path'
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import store from './store'

Vue.config.productionTip = false

let router = null
let app = null

function render (props = {}) {
  const { container } = props
  router = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/admin' : '/'
  })

  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[admin-app] bootstrap')
}

export async function mount (props) {
  console.log('[admin-app] mount', props)
  render(props)
}

export async function unmount () {
  console.log('[admin-app] unmount')
  if (!app) {
    return
  }

  app.$destroy()
  app.$el.innerHTML = ''
  app = null
  router = null
}
