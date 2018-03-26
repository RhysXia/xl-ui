import './styles/index.scss'
import { Row, Col } from './components/grid'
import Icon from './components/icon'
import Input from './components/input'
import { Button, ButtonGroup } from './components/button'

const components = {
  Row,
  Col,
  Icon,
  Button,
  ButtonGroup,
  Input
}

const install = (Vue, opts = {}) => {
  Object.values(components).forEach(component => {
    if (component.name) {
      Vue.component(component.name, component)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
