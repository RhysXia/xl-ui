<style>
    .content .xl-input{
        width: 20em;
    }

    .content .xl-input + .xl-input{
        margin-top:1em;
    }
</style>
<script>
    export default{
        data(){
            return {
                minRows:'0',
                maxRows:'5'
            }
        }
    }
</script>
# input 输入框

通过鼠标或键盘输入字符

## 基础用法

::: demo 基本的使用方式

```html
<xl-input placeholder='请输入内容'></xl-input>
```

:::

## 禁用状态

::: demo 使用`disabled`禁止输入

```html
<xl-input placeholder='请输入内容' disabled></xl-input>
```

:::

## 只读状态

::: demo 使用`readonly`只读

```html
<xl-input placeholder='请输入内容' readonly></xl-input>
```

:::

## 可清空

::: demo 使用`clearable`

```html
<xl-input placeholder='请输入内容' clearable></xl-input>
```

:::

## 带 icon 的输入框

::: demo 使用`suffix-icon`添加后置图标，使用`prefix-icon`添加前置图标

```html
<xl-input placeholder='请输入内容' suffix-icon='calendar'></xl-input>
<xl-input placeholder='请输入内容' prefix-icon='search'></xl-input>
```

:::

## 复合型输入框

::: demo 使用 slot 名`suffix`添加后置元素，使用 slot 名`prefix`添加前置元素

```html
<xl-input placeholder='请输入内容'>
    <span slot='prefix'>Http://</span>
    <span slot='suffix'>.com</span>
</xl-input>
```

:::

## 文本域

::: demo 使用`type`='textarea'

```html
<xl-input type='textarea' placeholder='请输入内容'></xl-input>
```

:::

## 文本域自适应高度

::: demo 使用`autosize`

```html
<xl-input type='textarea' autosize placeholder='请输入内容'></xl-input>
```

:::

## 限制极限高度的自适应方式

::: demo 将`autosize`设置成对象，其中包含 `minRows`和 `maxRows`，可以只设置其中一个

```html
<xl-input v-model="minRows" placeholder="最小高度"></xl-input>
<xl-input v-model="maxRows" placeholder="最大高度"></xl-input>
<xl-input type='textarea' :autosize="{minRows:Number(minRows),maxRows:Number(maxRows)}" placeholder='请输入内容'></xl-input>
```
:::

## input 属性

| 参数        | 说明                                                                      | 类型           | 可选值                                         | 默认值 |
| ----------- | ------------------------------------------------------------------------- | -------------- | ---------------------------------------------- | ------ |
| type        | 类型                                                                      | string         | text / password /textarea / url / email / date | text   |
| value       | 输入参数，支持 v-model 绑定                                               | string         | —                                              | -      |
| prefix-icon | 前置图标                                                                  | string         | —                                              | -      |
| suffix-icon | 后置图标                                                                  | string         | —                                              | -      |
| autosize    | 针对 textarea 文本域的自适应高度,设置成对象时格式为{minRows:1,maxRows:10} | boolean/object | -                                              | false  |
| clearable   | 可清空输入框                                                              | boolean        | -                                              | false  |
| disabled    | 禁用文本框                                                                | boolean        | -                                              | false  |
| readonly    | 只读文本框                                                                | boolean        | -                                              | false  |

## input 方法

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | -    |
| blur   | 使 input 失去焦点 | -    |

## input 事件

| 事件名        | 说明             | 参数           |
| ------------- | ---------------- | -------------- |
| on-input      | 输入事件         | 输入框值       |
| on-focus      | 获得焦点事件     | 原生事件对象 e |
| on-blur       | 获得失去焦点事件 | 原生事件对象 e |
| on-icon-click | 图标点击事件     | -              |
