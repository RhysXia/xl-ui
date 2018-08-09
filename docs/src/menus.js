export default [
  {
    path: '/',
    redirect: '/install'
  },
  {
    path: '/install',
    title: '安装',
    component: () => import('./zh-cn/install.md')
  },
  {
    path: '/start',
    title: '快速上手',
    icon: '',
    component: () => import('./zh-cn/start.md')
  },
  {
    title: '基础组件',
    children: [
      {
        path: '/button',
        title: '按钮',
        icon: 'play',
        component: () => import('./zh-cn/button.md')
      },
      {
        path: '/icon',
        title: '图标',
        icon: 'heart',
        component: () => import('./zh-cn/icon.md')
      }
    ]
  },
  {
    title: '布局',
    children: [
      {
        path: '/grid',
        title: '栅格系统',
        icon: 'grid',
        component: () => import('./zh-cn/grid.md')
      }
    ]
  },
  {
    title: '表单组件',
    children: [
      {
        path: '/input',
        title: 'input输入框',
        icon: 'ios-compose-outline',
        component: () => import('./zh-cn/input.md')
      },
      {
        path: '/radio',
        title: '单选框',
        icon: 'android-radio-button-on',
        component: () => import('./zh-cn/radio.md')
      },
      {
        path: '/checkbox',
        title: '多选框',
        icon: 'android-checkbox',
        component: () => import('./zh-cn/checkbox.md')
      },
      {
        path: '/form',
        title: '表单',
        icon: 'android-list',
        component: () => import('./zh-cn/form.md')
      }
    ]
  },
  {
    title: '视图',
    children: [
      {
        path: '/poptip',
        title: '弹出框',
        icon: 'chatbox',
        component: () => import('./zh-cn/poptip.md')
      },
      {
        path: '/tooltip',
        title: '文字提示框',
        icon: 'chatbox-working',
        component: () => import('./zh-cn/tooltip.md')
      }
    ]
  },
  {
    title: '导航',
    children: [
      {
        path: '/dropdown',
        title: '下拉框',
        icon: 'android-arrow-dropdown-circle',
        component: () => import('./zh-cn/dropdown.md')
      }
    ]
  }
]
