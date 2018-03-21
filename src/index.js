import './styles/index.scss'
import { Row, Col } from './components/grid/index.js'
import Icon from './components/icon/index.js'
import Button from './components/button/index.js'

const components = {
  Row,
  Col,
  Icon,
  Button
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
