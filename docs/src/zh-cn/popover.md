<script>
export default {
    methods: {
        getPopupContainer() {
            return document.querySelector('.demo-container')
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

# Popper组件
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


## 指定弹出框的父容器

> 即使父容器使用`position:relative`限制子元素，依然可以正常定位，但是**请不要使用`overflow:hidden`**，否则弹出框可能无法显示；**弹出框的样式会受到父容器样式的影响，需要谨慎使用**

:::demo 通过属性`get-popup-container`指定父容器

```html
<xl-popover placement="bottom-end" :get-popup-container="getPopupContainer">
    <xl-button>指定父容器</xl-button>
    <div slot="popup">处在.demo-container中</div>
</xl-popover>
<div class="demo-container">.demo-container</div>
<script>
export default {
    methods: {
        getPopupContainer() {
            return document.querySelector('.demo-container')
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