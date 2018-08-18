<style>
    .layout{
        margin-bottom: 2em;
    }
    .layout__header,
    .layout__footer{
        background-color: #7cbce9;
        height: 80px;
        color: #fff;
        display: flex;
        justify-content: center;
    }
    .layout__sider{
        display: flex;
        background-color: #3a9fe8;
        color: #fff;
        justify-content: center;
        align-items: center;
        width: 240px;
    }
    .layout__content{
        display: flex;
        background-color: #0f8de9;
        color: #fff;
        height: 100px;
        justify-content: center;
        align-items: center;
    }
</style>

# Layout 布局

协助进行页面级整体布局

## 组件概述

- `Layout`: 布局容器，其下可嵌套`Header` `Sider` `Content` `Footer`或`Layout`本身，可以放在任何父容器中。
- `Header`: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在`Layout`中。
- `Sider`: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在`Layout`中。
- `Content`: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在`Layout`中。
- `Footer`: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在`Layout`中。

> **使用`flex`布局，注意浏览器兼容性**

## 基本用法

:::demo 经典页面布局

```html
<xl-layout class="layout">
    <xl-header class="layout__header">header</xl-header>
    <xl-content class="layout__content">content</xl-content>
    <xl-footer class="layout__footer">footer</xl-footer>
</xl-layout>
<xl-layout class="layout">
    <xl-sider class="layout__sider">sider</xl-sider>
    <xl-layout>
        <xl-header class="layout__header">header</xl-header>
        <xl-content  class="layout__content">content</xl-content>
        <xl-footer class="layout__footer">footer</xl-footer>
    </xl-layout>
</xl-layout>
<xl-layout class="layout">
    <xl-header class="layout__header">header</xl-header>
    <xl-layout>
        <xl-sider class="layout__sider">sider</xl-sider>
        <xl-content  class="layout__content">content</xl-content>
    </xl-layout>
    <xl-footer class="layout__footer">footer</xl-footer>
</xl-layout>
<xl-layout class="layout">
    <xl-header class="layout__header">header</xl-header>
    <xl-layout>
        <xl-content  class="layout__content">content</xl-content>
        <xl-sider class="layout__sider">sider</xl-sider>
    </xl-layout>
    <xl-footer class="layout__footer">footer</xl-footer>
</xl-layout>
<style>
    .layout{
        margin-bottom: 2em;
    }
    .layout__header,
    .layout__footer{
        background-color: #7cbce9;
        height: 80px;
        color: #fff;
        display: flex;
        justify-content: center;
    }
    .layout__sider{
        display: flex;
        background-color: #3a9fe8;
        color: #fff;
        justify-content: center;
        align-items: center;
        width: 240px;
    }
    .layout__content{
        display: flex;
        background-color: #0f8de9;
        color: #fff;
        height: 100px;
        justify-content: center;
        align-items: center;
    }
</style>
```

:::

## button 属性

| 参数        | 说明                                                      | 类型    | 可选值                                                      | 默认值  |
| ----------- | --------------------------------------------------------- | ------- | ----------------------------------------------------------- | ------- |
| type        | 类型                                                      | string  | default / primary / success / warning / error / info / text | default |
| plain       | 是否朴素按钮                                              | boolean | —                                                           | false   |
| round       | 是否圆形按钮                                              | boolean | —                                                           | false   |
| dash        | 是否边框为虚线（在`plain`模式下使用，否则可能看不到效果） | boolean | —                                                           | false   |
| loading     | 是否加载中状态                                            | boolean | —                                                           | false   |
| disabled    | 是否禁用状态                                              | boolean | —                                                           | false   |
| icon        | 图标类名                                                  | string  | —                                                           | —       |
| native-type | 原生 type 属性                                            | string  | button / submit / reset                                     | button  |

## button 方法

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| focus  | 使 button 获取焦点 | -    |

## button 事件

| 事件名   | 说明     | 参数           |
| -------- | -------- | -------------- |
| on-click | 点击事件 | 原生事件对象 e |

## buttin group 属性

| 参数     | 说明                   | 类型    | 可选值 | 默认值 |
| -------- | ---------------------- | ------- | ------ | ------ |
| vertical | 是否是竖直方向的按钮组 | boolean | -      | false  |
