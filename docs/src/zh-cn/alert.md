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
# Alert 警告提示

静态地呈现一些警告信息，可手动关闭

## 基础用法

::: demo 使用`type`指定样式，有四种样式可以选择`info`、`success`、`warning`、`error`

```html
<xl-alert>info alert</xl-alert>
<xl-alert type="success">success alert</xl-alert>
<xl-alert type="warning">warning alert</xl-alert>
<xl-alert type="error">error alert</xl-alert>
```

:::

## 附带描述信息

::: demo 使用`desc`插槽

```html
<xl-alert>
  info alert
  <template slot="desc">Content of alert. Content of alert. Content of alert. Content of alert.</template>
</xl-alert>
<xl-alert type="success">
  success alert
  <template slot="desc">Content of alert. Content of alert. Content of alert. Content of alert.</template>
</xl-alert>
<xl-alert type="warning">
  warning alert
  <template slot="desc">Content of alert. Content of alert. Content of alert. Content of alert.</template>
</xl-alert>
<xl-alert type="error">
  error alert
  <template slot="desc">Content of alert. Content of alert. Content of alert. Content of alert.</template>
</xl-alert>
```

:::

## 支持点击关闭

::: demo指定`closable`，点击关闭

```html
<xl-alert closable>
  info alert
</xl-alert>
<xl-alert closable>
  success alert
  <template slot="desc">Content of alert. Content of alert. Content of alert. Content of alert.</template>
</xl-alert>
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
