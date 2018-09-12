<script>
export default {
    data(){
        return {
            value1: ""
        }
    },
    computed: {
        visible1() {
            return this.value1 === 'admin'
        }
    },
    methods: {
        getPopupContainer() {
            return document.querySelector('.demo-container')
        },
        getPopupContainer2() {
            return document.body
        }
    }
}
</script>
<style>
    .demo-popover{
        margin-bottom:2em;
    }
    .demo-container{
        position: relative;
        background-color: #cce5ff;
        width: 10rem;
        height: 10rem;
        text-align: center;
        line-height: 10rem;
    }
    .demo-wrap{
        position: relative;
        background-color: #eee;
        height: 500px;
        width: 500px;
    }
    .demo-transform{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .demo-ref{
        display: block;
        transform: scale(5);
    }
</style>

# Popover 组件

基础的弹出框组件，其他弹出框都是基于这个组件进行开发的，如果你需要基于弹出框功能进行二次开发，可以选择使用这个组件

## 基本使用

:::demo 通过属性`visible`控制组件的显示或隐藏

```html
<xl-row class='demo-popover'>
    <xl-col :span='4' :offset='4'>
        <xl-popover placement='top-start'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top-start</div>
        </xl-popover>
    </xl-col>
    <xl-col :span='4'>
        <xl-popover placement='top'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top</div>
        </xl-popover>
    </xl-col>
    <xl-col :span='4'>
        <xl-popover placement='top-end'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top-end</div>
        </xl-popover>
    </xl-col>
</xl-row>

<xl-row class='demo-popover'>
    <xl-col :span='4' :offset='4'>
        <xl-popover placement='left-start'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left-start</div>
        </xl-popover>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popover placement='right-start'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right-start</div>
        </xl-popover>
    </xl-col>
</xl-row>

<xl-row class='demo-popover'>
    <xl-col :span='4' :offset='4'>
        <xl-popover placement='left'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left</div>
        </xl-popover>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-popover placement='right'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right</div>
        </xl-popover>
    </xl-col>
</xl-row>

<xl-row class='demo-popover'>
    <xl-col :span='4' :offset='4'>
        <xl-popover placement='left-end'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left-end</div>
        </xl-popover>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popover placement='right-end'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right-end</div>
        </xl-popover>
    </xl-col>
</xl-row>
<xl-row class='demo-popover'>
    <xl-col :span='4' :offset='4'>
        <xl-popover placement='bottom-start'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom-start</div>
        </xl-popover>
    </xl-col>
    <xl-col :span='4'>
        <xl-popover placement='bottom'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom</div>
        </xl-popover>
    </xl-col>
    <xl-col :span='4'>
        <xl-popover placement='bottom-end'>
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom-end</div>
        </xl-popover>
    </xl-col>
</xl-row>
<style>
    .demo-popover{
        margin-bottom:2em;
    }
</style>
```

:::

## 指定触发方式

:::demo 通过`trigger`指定弹出框触发的方式，支持`click`,`hover`,`custom`三种方式

```html
<xl-row :gutter="20">
    <xl-col :span="8">
        <xl-popover trigger="click">
            <xl-button>点击显示</xl-button>
            <div slot="popup">点击显示的弹出框</div>
        </xl-popover>
    </xl-col>
    <xl-col :span="8">
        <xl-popover trigger="hover">
            <xl-button>悬浮显示</xl-button>
            <div slot="popup">悬浮显示的弹出框</div>
        </xl-popover>
    </xl-col>
    <xl-col :span="8">
        <xl-popover trigger="custom" :visible="visible1">
            <xl-input v-model="value1" placeholder="输入admin时显示"></xl-input>
            <div slot="popup">自定义显示的弹出框</div>
        </xl-popover>
    </xl-col>
</xl-row>
<script>
export default {
    data(){
        return {
            value1: ""
        }
    },
    computed: {
        visible1() {
            return this.value1 === 'admin'
        }
    }
}
</script>
```

:::

## 悬浮在弹出框时隐藏弹出框

:::demo 通过`hidden-on-popup-hover`指定当悬浮在弹出框上是否隐藏

```html
<xl-popover trigger="hover" hidden-on-popup-hover>
    <xl-button>悬浮显示</xl-button>
    <div slot="popup">悬浮显示的弹出框</div>
</xl-popover>
```

:::

## 指定弹出框的父容器

> 即使父容器使用`position:relative`限制子元素，依然可以正常定位，但是**请不要使用`overflow:hidden`**，否则弹出框可能无法显示；**弹出框的样式会受到父容器样式的影响，需要谨慎使用**

:::demo 通过属性`get-popup-container`指定父容器

```html
<xl-row>
    <xl-col :span="12">
        <xl-popover placement="bottom-end" :get-popup-container="getPopupContainer">
            <xl-button>指定父容器</xl-button>
            <div slot="popup">处在.demo-container中</div>
        </xl-popover>
        <div class="demo-container">.demo-container</div>
    </xl-col>
    <xl-col :span="12">
        <xl-popover placement="bottom-end" :get-popup-container="getPopupContainer2">
            <xl-button>父容器为body</xl-button>
            <div slot="popup">处在body中</div>
        </xl-popover>
    </xl-col>
</xl-row>
<script>
export default {
    methods: {
        getPopupContainer2() {
            return document.body
        }
    }
}
</script>
<style>
    .demo-popover{
        margin-bottom:2em;
    }
    .demo-container{
        position: relative;
        background-color: #cce5ff;
        width: 10rem;
        height: 10rem;
        text-align: center;
        line-height: 10rem;
    }
</style>
```

:::

## 隐藏箭头

:::demo 通过属性`arrow-show`指定是否显示箭头

```html
<xl-popover :arrow-show="false">
    <xl-button>显示箭头</xl-button>
    <div slot="popup">没有箭头</div>
</xl-popover>
```

:::

## 指定弹出框与参考元素的距离

::: demo 通过属性`offset`指定距离,可以是字符串或者数字（默认单位`px`）

```html
<xl-popover offset="16px">
    <xl-button>reference</xl-button>
    <div slot="popup">popover</div>
</xl-popover>
```

:::

## 多级嵌套

::: demo 多级嵌套，基于此可以实现类似菜单栏的结构

```html
<xl-popover padding="0">
    <xl-button>按钮1</xl-button>
    <xl-popover slot="popup">
        <xl-button>按钮2</xl-button>
        <xl-popover slot="popup">
            <xl-button>按钮3</xl-button>
            <xl-button slot="popup">按钮3</xl-button>
        </xl-popover>
    </xl-popover>
</xl-popover>
```

:::

## 对于参考元素有`transform`修饰

:::demo
```html
<div class="demo-wrap">
    <div class="demo-transform">
        <xl-popover trigger="hover">
            <span class="demo-ref">aaaaa</span>
            <div slot="popup">popover</div>
        </xl-popover>
    </div>
</div>
```
:::

## Popover 属性

| 参数                  | 说明                                                   | 类型          | 可选值                                                                                                    | 默认值                        |
| --------------------- | ------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------- |
| placement             | 弹出框相对显示框的位置                                 | string        | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                        |
| transition-name       | 自定义弹出框动画                                       | string        | -                                                                                                         | xl-fade                       |
| get-popup-container   | 自定义弹出框的父容器                                   | function      | -                                                                                                         | `function(){return this.$el}` |
| visible               | 自定义弹出框是否显示（支持`v-model`）                  | boolean       | -                                                                                                         | false                         |
| offset                | 弹出框距离参考元素的距离(如果传入数字，默认单位为`px`) | string/number | -                                                                                                         | 0                             |
| arrow-show            | 是否显示箭头                                           | booleam       | -                                                                                                         | true                          |
| arrow-class-prefix    | 自定义箭头样式                                         | string/array  | -                                                                                                         | `xl-popover__arrow--default`  |
| content-class         | 自定义弹出框样式                                       | string/array  | -                                                                                                         | `xl-popper__content--default` |
| trigger               | 触发弹出框的条件                                       | string        | hover/click/custom                                                                                        | `click`                       |
| hidden-on-popup-hover | 当悬浮在弹出框上的时候是否隐藏                         | boolean       | -                                                                                                         | false                         |

## Popover 事件

| 事件名          | 说明             | 参数             |
| --------------- | ---------------- | ---------------- |
| on-change       | 弹出框显示事件   | true/false       |
| on-clickoutside | 弹出框外点击事件 | 原始点击事件参数 |
| on-mouseleave   | 鼠标离开事件     | -                |
| on-mouseenter   | 鼠标进入事件     | -                |
| on-click        | 鼠标点击事件     | -                |

## Popover slots

| 名称    | 说明     |
| ------- | -------- |
| default | 参考元素 |
| popup   | 弹出框   |
