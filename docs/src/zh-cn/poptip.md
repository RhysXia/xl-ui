<script>
    export default{
        data(){
            return{
                visiable:false
            }
        }
    }
</script>

<style>
    .demo-poptip{
        margin-bottom:2em;
    }
</style>

# Poptip 弹出框组件

将提示信息放在弹出框中。

## 基本用法

::: demo 基本的使用方法

```html
<xl-row class='demo-poptip'>
    <xl-col :span='4' :offset='4'>
        <xl-poptip placement='top-start' title="标题" content="top-start">
            <xl-button>下拉菜单</xl-button>
        </xl-popu>
    </xl-col>
    <xl-col :span='4'>
        <xl-poptip placement='top' title="标题" content="top">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
    <xl-col :span='4'>
        <xl-poptip placement='top-end' title="标题" content="top-end">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
</xl-row>

<xl-row class='demo-poptip'>
    <xl-col :span='4' :offset='4'>
        <xl-poptip placement='left-start' title="标题" content="left-start">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-poptip placement='right-start' title="标题" content="right-start">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
</xl-row>

<xl-row class='demo-poptip'>
    <xl-col :span='4' :offset='4'>
        <xl-poptip placement='left' title="标题" content="left">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-poptip placement='right' title="标题" content="right">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
</xl-row>

<xl-row class='demo-poptip'>
    <xl-col :span='4' :offset='4'>
        <xl-poptip placement='left-end' title="标题" content="left-end">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-poptip placement='right-end' title="标题" content="right-end">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
</xl-row>
<xl-row class='demo-poptip'>
    <xl-col :span='4' :offset='4'>
        <xl-poptip placement='bottom-start' title="标题" content="bottom-start">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
    <xl-col :span='4'>
        <xl-poptip placement='bottom' title="标题" content="bottom">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
    <xl-col :span='4'>
        <xl-poptip placement='bottom-end' title="标题" content="bottom-end">
            <xl-button>下拉菜单</xl-button>
        </xl-poptip>
    </xl-col>
</xl-row>
<style>
    .demo-poptip{
        margin-bottom:2em;
    }
</style>
```
:::

## 长文本

:::demo 通过指定`width`改变弹出框的长度
```html
<xl-poptip :width="{min:150,max:300}" content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。">
    <xl-button>长文本</xl-button>
</xl-poptip>
```

:::

## 标题和内容支持html

:::demo 通过指定`dangerousHtml`支持HTML
```html
<xl-poptip dangerous-html title="<h1>这是加粗的标题</h1>" content="<b>这是加粗的内容</b>">
    <xl-button>富文本</xl-button>
</xl-poptip>
```

:::

## 不显示箭头

:::demo 通过`arrow`属性配置
```html
<xl-poptip :arrow="false" content="箭头不会显示">
    <xl-button>自定义内容</xl-button>
</xl-poptip>

```

:::


## 指定激活方式

:::demo 通过指定`trigger`改变激活方式
```html
<div class="demo-poptip">
    <xl-poptip content="点击激活" trigger="click">
        <xl-button>点击激活</xl-button>
    </xl-poptip>
</div>
<div class="demo-poptip">
    <xl-poptip content="悬停激活" trigger="hover">
        <xl-button>悬停激活</xl-button>
    </xl-poptip>
</div>
<xl-poptip content="自定义激活" v-model="visiable" trigger="custom">
    <xl-checkbox v-model="visiable">自定义激活</xl-checkbox>
</xl-poptip>
<script>
    export default{
        data(){
            return{
                visiable:false
            }
        }
    }
</script>

<style>
    .demo-poptip{
        margin-bottom:2em;
    }
</style>
```

:::



## 自定义内容

:::demo 通过slot `content`自定义内容
```html
<xl-poptip>
    <xl-button>自定义内容</xl-button>
    <xl-input type="textarea" slot="content"></xl-input>
</xl-poptip>

```

:::


## 多级嵌套

:::demo 多级嵌套，基于此可以实现类似菜单栏的结构
```html
<xl-poptip padding="0">
    <xl-button>按钮1</xl-button>
    <xl-poptip slot="content" padding="0">
        <xl-button>按钮2</xl-button>
        <xl-poptip slot="content" padding="0">
            <xl-button>按钮3</xl-button>
            <xl-button slot="content">按钮3</xl-button>
        </xl-poptip>
    </xl-poptip>
</xl-poptip>

```

:::


## Poptip 属性

| 参数            | 说明                                | 类型     | 可选值                 | 默认值            |
| --------------- | ---------------------------- | -------- | ---------------- | ----------------- |
| transfer | 是否将弹出框置于body中   | boolean |                -             | false |
| placement       | 弹出框相对显示框的位置                     | string   | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom               |
| trigger       | 激活方式                   | string   | click/hover/custom | hover               |
| width       | 弹出框宽,通过设置{min:10,max:20}来设置最小宽度和最大宽度                   | string/number/object   | - | {min: 150,max: 300}               |
| value       | 弹出框状态，支持`v-model`                   | boolean  | - | false              |
| title       | 标题                   | string  | - | -              |
| content       | 内容                   | string   | - | -              |
| padding       | 自定义边距                   | string   | - | '0.5em,1em'              |
| options       | 自定义popper.js的配置项，具体配置见[popper.js文档](https://popper.js.org/popper-documentation.html)                  | string   | - | '0.5em,1em'              |
| pop-class       | 自定义弹出框样式         | string   | - | -        |
| transition-name       | 自定义弹出框动画         | string   | - | xl-poptip-fade        |
| dangerous-html      | 允许嵌入HTML         | boolean   | - | false        |
| arrow     | 是否显示箭头         | boolean   | - | true        |

## Poptip 事件

| 名称    | 说明       |参数                    |
| ------- | ---------- |----------------------- |
| on-popper-show | 在提示框显示时触发 |  -  |
| on-popper-hide   | 在提示框消失时触发 |  -  |
| on-popper-created   | popper创建完成时触发 |  this  |
| on-popper-updated   | popper更新完成时触发 |  this  |
| on-input   | 弹出框状态改变时触发 | boolean，true：弹出框显示，false：弹出框隐藏  |
| on-click   | 弹出框附着的元素被点击时触发 | -  |
| on-clickoutside   | 弹出框外点击时触发 | 实际被点击的元素e  |
| on-mouseenter   | 鼠标进入组件时触发 | -  |
| on-mouseleave   | 鼠标离开组件时触发 | -  |

## Poptip slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 插入显示框 |
| title   | 弹出框标题，定义此 slot 时，会覆盖 props `title` |
| content   | 弹出框内容，定义此 slot 时，会覆盖 props `content` |
