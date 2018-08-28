export default [
  {
    path: '/',
    redirect: '/install'
  },
  {
    path: '/install',
    title: '安装',
    icon: 'gear-a',
    component: () => import('./zh-cn/install.md')
  },
  {
    path: '/start',
    title: '快速上手',
    icon: 'flag',
    component: () => import('./zh-cn/start.md')
  },
  {
    path: '/theme',
    title: '主题',
    icon: 'android-color-palette',
    component: () => import('./zh-cn/theme.md')
  },
  {
    title: '基础',
    children: [
      {
        path: '/icon',
        title: '图标',
        icon: 'heart',
        component: () => import('./zh-cn/icon.md')
      },
      {
        path: '/button',
        title: '按钮',
        icon: 'play',
        component: () => import('./zh-cn/button.md')
      },
      {
        title: '动画',
        icon: 'load-a',
        path: '/animation',
        component: () => import('./zh-cn/animation.md')
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
      },
      {
        path: '/layout',
        title: '布局',
        icon: 'ios-grid-view-outline',
        component: () => import('./zh-cn/layout.md')
      }
    ]
  },
  {
    title: '表单',
    children: [
      {
        path: '/input',
        title: 'input输入框',
        icon: 'ios-compose-outline',
        component: () => import('./zh-cn/input.md')
      },
      {
        path: '/checkbox',
        title: '多选框',
        icon: 'android-checkbox',
        component: () => import('./zh-cn/checkbox.md')
      },
      {
        path: '/radio',
        title: '单选框',
        icon: 'android-radio-button-on',
        component: () => import('./zh-cn/radio.md')
      }
      // {
      //   path: '/form',
      //   title: '表单',
      //   icon: 'android-list',
      //   component: () => import('./zh-cn/form.md')
      // }
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
      },
      {
        path: '/card',
        title: '卡片',
        icon: 'card',
        component: () => import('./zh-cn/card.md')
      },
      {
        path: '/collapse',
        title: '折叠面板',
        icon: 'ios-folder-outline',
        component: () => import('./zh-cn/collapse.md')
      }
    ]
  },
  {
    title: '导航',
    children: [
      {
        path: '/menu',
        title: '菜单',
        icon: 'navicon-round',
        component: () => import('./zh-cn/menu.md')
      },
      {
        path: '/dropdown',
        title: '下拉菜单',
        icon: 'android-arrow-dropdown-circle',
        component: () => import('./zh-cn/dropdown.md')
      }
    ]
  },
  {
    title: '提示',
    children: [
      {
        path: '/alert',
        title: '警告提示',
        icon: 'alert-circled',
        component: () => import('./zh-cn/alert.md')
      }
    ]
  }
]
