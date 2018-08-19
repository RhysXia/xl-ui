import Grid from './components/grid'
import Icon from './components/icon'
import Input from './components/input'
import Checkbox from './components/checkbox'
import Button from './components/button'
import Dropdown from './components/dropdown'
import Poptip from './components/poptip'
import Tooltip from './components/tooltip'
import Radio from './components/radio'
import Form from './components/form'
import Card from './components/card'
import Layout from './components/layout'
import Collapse from './components/collapse'
import {
  version
} from '../package.json'

const components = {
  Row: Grid.Row,
  Col: Grid.Col,
  Icon,
  Button,
  ButtonGroup: Button.Group,
  Input,
  Radio,
  RadioGroup: Radio.Group,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Poptip,
  Dropdown,
  DropdownMenu: Dropdown.Menu,
  DropdownItem: Dropdown.Item,
  Form,
  FormItem: Form.Item,
  Tooltip,
  Card,
  Layout,
  Header: Layout.Header,
  Sider: Layout.Sider,
  Content: Layout.Content,
  Footer: Layout.Footer,
  Collapse,
  Panel: Collapse.Panel
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

const API = {
  version,
  install,
  ...components
}

module.exports.default = module.exports = API
