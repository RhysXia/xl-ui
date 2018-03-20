import { Row, Col } from './components/grid/index.js'
import Icon from './components/icon/index.js'

import './styles/index.scss'

const components = {
  Row,
  Col,
  Icon
}

const install = (Vue, opts = {}) => {
  Object.values(components).forEach(component => {
    if (component.name) {
      Vue.component(component.name, component)
    }
  })
}

// if (type window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default { install }
