import './styles/index.scss'

import Icon from './components/icon'
import Input from './components/input'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Dropdown from './components/dropdown'
import DropdownMenu from './components/dropdown-menu'
import DropdownItem from './components/dropdown-item'
import Row from './components/row'
import Col from './components/col'
import Popup from './components/popup'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'

import {version} from '../package.json'

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
  DropdownMenu,
  DropdownItem
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

export default {
  version,
  install
}

export {
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
  DropdownMenu,
  DropdownItem
}
