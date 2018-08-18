# Layout 布局

协助进行页面级整体布局

## 组件概述
* `Layout`: 布局容器，其下可嵌套`Header` `Sider` `Content` `Footer`或`Layout`本身，可以放在任何父容器中。
* `Layout`: 布局容器，其下可嵌套`Header` `Sider` `Content` `Footer`或`Layout`本身，可以放在任何父容器中。
* `Layout`: 布局容器，其下可嵌套`Header` `Sider` `Content` `Footer`或`Layout`本身，可以放在任何父容器中。


## button 属性

| 参数        | 说明           | 类型    | 可选值                                                      | 默认值  |
| ----------- | -------------- | ------- | ----------------------------------------------------------- | ------- |
| type        | 类型           | string  | default / primary / success / warning / error / info / text | default |
| plain       | 是否朴素按钮   | boolean | —                                                           | false   |
| round       | 是否圆形按钮   | boolean | —                                                           | false   |
| dash       | 是否边框为虚线（在`plain`模式下使用，否则可能看不到效果）   | boolean | —                                                           | false   |
| loading     | 是否加载中状态 | boolean | —                                                           | false   |
| disabled    | 是否禁用状态   | boolean | —                                                           | false   |
| icon        | 图标类名       | string  | —                                                           | —       |
| native-type | 原生 type 属性 | string  | button / submit / reset                                     | button  |

## button 方法

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| focus  | 使 button 获取焦点 | -    |

## button 事件

| 事件名 | 说明     | 参数           |
| ------ | -------- | -------------- |
| on-click  | 点击事件 | 原生事件对象 e |

## buttin group 属性

| 参数     | 说明                   | 类型    | 可选值 | 默认值 |
| -------- | ---------------------- | ------- | ------ | ------ |
| vertical | 是否是竖直方向的按钮组 | boolean | -      | false  |
