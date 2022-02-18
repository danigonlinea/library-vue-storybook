// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import * as components from './components'

const ComponentLibrary = {
  install(Vue) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  },
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}
