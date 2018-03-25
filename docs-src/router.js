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
  }
]
