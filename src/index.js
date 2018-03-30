import './styles/index.scss'
import { Row, Col } from './components/grid'
import Icon from './components/icon'
import Input from './components/input'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import { Button, ButtonGroup } from './components/button'
import { Radio, RadioGroup } from './components/radio'
import Popup from './components/popup'
import { Dropdown, DropdownMenu } from './components/dropdown'

const components = {
  Row,
  Col,
  Icon,
  Button,
  ButtonGroup,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Popup,
  Dropdown,
  DropdownMenu
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
