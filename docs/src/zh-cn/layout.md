<style>
    .layout{
        margin-bottom: 2em;
    }
    .layout .xl-content{
        height: 10rem;
    }
    .layout [class^="xl-"]:not(.xl-layout){
        display: flex;
        align-items: center;
        justify-content: center;
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
    <xl-header>header</xl-header>
    <xl-content>content</xl-content>
    <xl-footer>footer</xl-footer>
</xl-layout>
<xl-layout class="layout">
    <xl-sider>sider</xl-sider>
    <xl-layout>
        <xl-header>header</xl-header>
        <xl-content>content</xl-content>
        <xl-footer>footer</xl-footer>
    </xl-layout>
</xl-layout>
<xl-layout class="layout">
    <xl-header>header</xl-header>
    <xl-layout>
        <xl-sider>sider</xl-sider>
        <xl-content>content</xl-content>
    </xl-layout>
    <xl-footer>footer</xl-footer>
</xl-layout>
<xl-layout class="layout">
    <xl-header>header</xl-header>
    <xl-layout>
        <xl-content>content</xl-content>
        <xl-sider>sider</xl-sider>
    </xl-layout>
    <xl-footer>footer</xl-footer>
</xl-layout>
<style>
    .layout{
        margin-bottom: 2em;
    }
    .layout .xl-content{
        height: 10rem;
    }
</style>
```

:::
