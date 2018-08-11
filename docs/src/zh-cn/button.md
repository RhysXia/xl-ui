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
  .button-bottom{
    margin-bottom:1em;
  }
</style>
# Button 按钮

常用的操作按钮

## 基础用法

基础的按钮用法

::: demo 使用`type`,`plain`,`round`定义按钮样式

```html
<div class='button-bottom'>
    <xl-button @on-click='click'>默认按钮</xl-button>
    <xl-button type="primary">主要按钮</xl-button>
    <xl-button type="info">信息按钮</xl-button>
    <xl-button type="success">成功按钮</xl-button>
    <xl-button type="warning">警告按钮</xl-button>
    <xl-button type="error">错误按钮</xl-button>
    <xl-button type="text">文本按钮</xl-button>
</div>
<div class='button-bottom'>
    <xl-button plain @on-click='click'>默认按钮</xl-button>
    <xl-button plain type="primary">主要按钮</xl-button>
    <xl-button plain type="info">信息按钮</xl-button>
    <xl-button plain type="success">成功按钮</xl-button>
    <xl-button plain type="warning">警告按钮</xl-button>
    <xl-button plain type="error">错误按钮</xl-button>
    <xl-button plain type="text">文本按钮</xl-button>
</div>
<div class='button-bottom'>
    <xl-button dash plain @on-click='click'>默认按钮</xl-button>
    <xl-button dash plain type="primary">主要按钮</xl-button>
    <xl-button dash plain type="info">信息按钮</xl-button>
    <xl-button dash plain type="success">成功按钮</xl-button>
    <xl-button dash plain type="warning">警告按钮</xl-button>
    <xl-button dash plain type="error">错误按钮</xl-button>
    <xl-button dash plain type="text">文本按钮</xl-button>
</div>
<div>
    <xl-button round @on-click='click'>默认按钮</xl-button>
    <xl-button round type="primary">主要按钮</xl-button>
    <xl-button round type="info">信息按钮</xl-button>
    <xl-button round type="success">成功按钮</xl-button>
    <xl-button round type="warning">警告按钮</xl-button>
    <xl-button round type="error">错误按钮</xl-button>
    <xl-button round type="text">文本按钮</xl-button>
</div>

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
  .button-bottom{
    margin-bottom:1em;
  }
</style>
```

:::

## 禁用按钮

按钮处于禁用状态，不可点击

::: demo 使用`disabled`属性将按钮设置成禁用状态

```html
<div class='button-bottom'>
    <xl-button disabled @on-click='click'>默认按钮</xl-button>
    <xl-button disabled type="primary">主要按钮</xl-button>
    <xl-button disabled type="info">信息按钮</xl-button>
    <xl-button disabled type="success">成功按钮</xl-button>
    <xl-button disabled type="warning">警告按钮</xl-button>
    <xl-button disabled type="error">错误按钮</xl-button>
    <xl-button disabled type="text">文本按钮</xl-button>
</div>
<div class='button-bottom'>
    <xl-button disabled plain @on-click='click'>默认按钮</xl-button>
    <xl-button disabled plain type="primary">主要按钮</xl-button>
    <xl-button disabled plain type="info">信息按钮</xl-button>
    <xl-button disabled plain type="success">成功按钮</xl-button>
    <xl-button disabled plain type="warning">警告按钮</xl-button>
    <xl-button disabled plain type="error">错误按钮</xl-button>
    <xl-button disabled plain type="text">文本按钮</xl-button>
</div>
<div class='button-bottom'>
    <xl-button dash disabled plain @on-click='click'>默认按钮</xl-button>
    <xl-button dash disabled plain type="primary">主要按钮</xl-button>
    <xl-button dash disabled plain type="info">信息按钮</xl-button>
    <xl-button dash disabled plain type="success">成功按钮</xl-button>
    <xl-button dash disabled plain type="warning">警告按钮</xl-button>
    <xl-button dash disabled plain type="error">错误按钮</xl-button>
    <xl-button dash disabled plain type="text">文本按钮</xl-button>
</div>
<div>
    <xl-button disabled round @on-click='click'>默认按钮</xl-button>
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
<xl-button class='button-bottom' type="primary" long>默认按钮</xl-button>
<xl-button class='button-bottom' type="primary" round long>默认按钮</xl-button>
<xl-button class='button-bottom' type="primary" plain long>默认按钮</xl-button>
<xl-button type="primary" dash plain long>默认按钮</xl-button>
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

## loading 按钮

表示正在加载的按钮,加载中的按钮是不能点击的

::: demo 使用`long`属性设置

```html
<xl-button type="primary" @on-click="click" loading>加载中</xl-button>
```

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作

::: demo 使用`button-group`嵌套按钮

```html
<div class='button-bottom'>
    <xl-button-group>
        <xl-button>
            <xl-icon type='chevron-left'></xl-icon>
            上一页
        </xl-button>
        <xl-button>
            下一页
            <xl-icon type='chevron-right'></xl-icon>
        </xl-button>
    </xl-button-group>
</div>
<div class='button-bottom'>
    <xl-button-group>
        <xl-button round dash>
            <xl-icon type='chevron-left'></xl-icon>
            上一页
        </xl-button>
        <xl-button>
            下一页
            <xl-icon type='chevron-right'></xl-icon>
        </xl-button>
    </xl-button-group>
</div>
<div class='button-bottom'>
    <xl-button-group vertical>
        <xl-button round dash icon='chevron-up'>上一页</xl-button>
        <xl-button icon='chevron-down'>下一页</xl-button>
    </xl-button-group>
</div>
<div>
    <xl-button-group vertical>
        <xl-button icon='chevron-up'>上一页</xl-button>
        <xl-button icon='chevron-down'>下一页</xl-button>
    </xl-button-group>
</div>
```

:::

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
