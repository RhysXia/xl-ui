<script>
    export default{
        methods:{
            click(){
                alert('click')
            }
        }
    }
</script>

<style>
    .xl-button{
        margin-bottom:1em !important;
    }
</style>
# Button 按钮

常用的操作按钮

## 基础用法
基础的按钮用法

::: demo  使用`type`,`plain`,`round`定义按钮样式

```html
<div>
    <xl-button @click='click'>默认按钮</xl-button>
    <xl-button type="primary">主要按钮</xl-button>
    <xl-button type="info">信息按钮</xl-button>
    <xl-button type="success">成功按钮</xl-button>
    <xl-button type="warning">警告按钮</xl-button>
    <xl-button type="error">错误按钮</xl-button>
    <xl-button type="text">文本按钮</xl-button>
</div>
<div>
    <xl-button plain @click='click'>默认按钮</xl-button>
    <xl-button plain type="primary">主要按钮</xl-button>
    <xl-button plain type="info">信息按钮</xl-button>
    <xl-button plain type="success">成功按钮</xl-button>
    <xl-button plain type="warning">警告按钮</xl-button>
    <xl-button plain type="error">错误按钮</xl-button>
    <xl-button plain type="text">文本按钮</xl-button>
</div>
<div>
    <xl-button round @click='click'>默认按钮</xl-button>
    <xl-button round type="primary">主要按钮</xl-button>
    <xl-button round type="info">信息按钮</xl-button>
    <xl-button round type="success">成功按钮</xl-button>
    <xl-button round type="warning">警告按钮</xl-button>
    <xl-button round type="error">错误按钮</xl-button>
    <xl-button round type="text">文本按钮</xl-button>
</div>
```
:::

## 禁用按钮
按钮处于禁用状态，不可点击

::: demo 使用`disabled`属性将按钮设置成禁用状态

```html
<div>
    <xl-button disabled @click='click'>默认按钮</xl-button>
    <xl-button disabled type="primary">主要按钮</xl-button>
    <xl-button disabled type="info">信息按钮</xl-button>
    <xl-button disabled type="success">成功按钮</xl-button>
    <xl-button disabled type="warning">警告按钮</xl-button>
    <xl-button disabled type="error">错误按钮</xl-button>
    <xl-button disabled type="text">文本按钮</xl-button>
</div>
<div>
    <xl-button disabled plain @click='click'>默认按钮</xl-button>
    <xl-button disabled plain type="primary">主要按钮</xl-button>
    <xl-button disabled plain type="info">信息按钮</xl-button>
    <xl-button disabled plain type="success">成功按钮</xl-button>
    <xl-button disabled plain type="warning">警告按钮</xl-button>
    <xl-button disabled plain type="error">错误按钮</xl-button>
    <xl-button disabled plain type="text">文本按钮</xl-button>
</div>
<div>
    <xl-button disabled round @click='click'>默认按钮</xl-button>
    <xl-button disabled round type="primary">主要按钮</xl-button>
    <xl-button disabled round type="info">信息按钮</xl-button>
    <xl-button disabled round type="success">成功按钮</xl-button>
    <xl-button disabled round type="warning">警告按钮</xl-button>
    <xl-button disabled round type="error">错误按钮</xl-button>
    <xl-button disabled round type="text">文本按钮</xl-button>
</div>
```
:::

## 长按钮
100%宽度的按钮

::: demo 使用`long`属性设置成长按钮
```html
<xl-button type="primary" long>默认按钮</xl-button>
<xl-button type="primary" round long>默认按钮</xl-button>
<xl-button type="primary" plain long>默认按钮</xl-button>

```
:::

## 图标按钮
按钮中包含图标

::: demo 使用`icon`属性设置图标
```html
<xl-button type="primary" icon="locked"></xl-button>
<xl-button type="primary" icon="locked"/>图标按钮</xl-button>

```
:::

## loading按钮
表示正在加载的按钮,加载中的按钮是不能点击的

::: demo 使用`long`属性设置
```html
<xl-button type="primary" @click="click" loading>加载中</xl-button>
```
:::

## 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   default / primary / success / warning / error / info / text |     default    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |