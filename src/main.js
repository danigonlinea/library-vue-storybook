// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import * as components from './components'
import * as utils from './utils'

const install = Vue => {
  if (install.installed) return
  install.installed = true

  // components
  for (const componentName in components) {
    const component = components[componentName]

    Vue.component(component.name, component)
  }
}

export default {
  // version: '0.0.1',
  install,
  ...utils,
  ...components,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install })
}
