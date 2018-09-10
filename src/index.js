import Icon from './components/icon'
import Button from './components/button'
import Grid from './components/grid'
import Layout from './components/layout'
import Input from './components/input'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import Poptip from './components/poptip'
import Tooltip from './components/tooltip'
import Card from './components/card'
import Collapse from './components/collapse'
import Menu from './components/menu'
import Dropdown from './components/dropdown'
import Form from './components/form'
import Alert from './components/alert'
import Animation from './components/animation'
import Popover from './components/popover'
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
  Tooltip,
  Card,
  Layout,
  Header: Layout.Header,
  Sider: Layout.Sider,
  Footer: Layout.Footer,
  Content: Layout.Content,
  Collapse,
  Panel: Collapse.Panel,
  CollapseTransition: Animation.CollapseTransition,
  Menu,
  // waiting implement
  Dropdown,
  DropdownMenu: Dropdown.Menu,
  DropdownItem: Dropdown.Item,
  Form,
  FormItem: Form.Item,
  Alert,
  Popover
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
