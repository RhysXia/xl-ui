export default [
  {
    path: '/',
    redirect: '/button'
  },
  {
    path: '/button',
    meta: '按钮',
    component: () => import('./zh-cn/button.md')
  },
  {
    path: '/grid',
    meta: '栅格系统',
    component: () => import('./zh-cn/grid.md')
  },
  {
    path: '/input',
    meta: 'input输入框',
    component: () => import('./zh-cn/input.md')
  },
  {
    path: '/icon',
    meta: '图标',
    component: () => import('./zh-cn/icon.md')
  },
  {
    path: '/radio',
    meta: '单选框',
    component: () => import('./zh-cn/radio.md')
  },
  {
    path: '/checkbox',
    meta: '多选框',
    component: () => import('./zh-cn/checkbox.md')
  },
  {
    path: '/popup',
    meta: '弹出框',
    component: () => import('./zh-cn/popup.md')
  },
  {
    path: '/dropdown',
    meta: '下拉框',
    component: () => import('./zh-cn/dropdown.md')
  }
]
