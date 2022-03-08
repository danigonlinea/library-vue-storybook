import * as components from './components'

const install = Vue => {
  if (install.installed) return
  install.installed = true

  // components
  for (const componentName in components) {
    const component = components[componentName]

    Vue.component(component.name, component)
  }
}

export * from './components'
export * from './utils'

export default {
  install,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install })
}
