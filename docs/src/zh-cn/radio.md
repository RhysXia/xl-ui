<script>
    export default{
        data(){
            return{
                value:false,
                groupValue:'bbb',
                customValue:''
            }
        }
    }
</script>

# 单选框

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

## 基础用法

::: demo 基础的使用方式

```html
<xl-radio v-model='value' label='123'></xl-radio>
<p>{{value}}</p>
```

:::

## 禁用单选框

::: demo 使用`disabled`禁用单选框

```html
<xl-radio v-model='value' label='123' disabled></xl-radio>
<p>{{value}}</p>
```

:::

## 只读单选框

::: demo 使用`readonly`只读单选框

```html
<xl-radio v-model='value' label='123' readonly></xl-radio>
<p>{{value}}</p>
```

:::

## 带边框

::: demo 使用`border`设置

```html
<xl-radio v-model='value' label='123' border></xl-radio>
<p>{{value}}</p>
```

:::

## 定制值

::: demo 可以设置`true-value`和`false-value`

```html
<xl-radio label='123' true-value='TRUE' false-value='FALSE' v-model='customValue'></xl-radio>
<p>{{customValue}}</p>
```

:::

## 单选框组

::: demo 使用`xl-radio-group`实现单选框组

```html
<xl-radio-group v-model='groupValue'>
    <xl-radio label='aaa'></xl-radio>
    <xl-radio label='bbb'></xl-radio>
    <xl-radio label='ccc'></xl-radio>
    <xl-radio label='ddd'></xl-radio>
</xl-radio-group>
<xl-radio-group v-model='groupValue'>
    <xl-radio value='123' label='aaa'></xl-radio>
    <xl-radio label='bbb'></xl-radio>
    <xl-radio label='ccc'></xl-radio>
    <xl-radio label='ddd'></xl-radio>
</xl-radio-group>
<xl-radio-group v-model='groupValue'>
    <xl-radio value='123' label='aaa' disabled></xl-radio>
    <xl-radio label='bbb'></xl-radio>
    <xl-radio label='ccc'></xl-radio>
    <xl-radio label='ddd' readonly></xl-radio>
</xl-radio-group>
<p>{{groupValue}}</p>
```

:::

## 按钮样式的单选框组

::: demo 使用`type='button'`实现单选框组

```html
<xl-radio-group v-model='groupValue' type='button'>
    <xl-radio label='aaa'></xl-radio>
    <xl-radio label='bbb'></xl-radio>
    <xl-radio label='ccc'></xl-radio>
    <xl-radio label='ddd'></xl-radio>
</xl-radio-group>
<p>{{groupValue}}</p>
```

:::

## radio 属性

| 参数        | 说明                                  | 类型                      | 可选值 | 默认值 |
| ----------- | ------------------------------------- | ------------------------- | ------ | ------ |
| label       | radio 显示值                          | string                    | -      | -      |
| name        | radio 的 name（单独使用时有效）       | string                    | -      | -      |
| value       | radio 单独使用时，支持 v-model 绑定   | string / number / boolean | -      | false  |
| true-value  | 选中时的 value 值（单独使用时有效）   | string / number / boolean | —      | true   |
| false-value | 未选中时的 value 值（单独使用时有效） | string / number / boolean | —      | false  |
| border      | 是否显示 radio 边框                   | boolean                   | —      | false  |
| readonly    | 是否只读                              | boolean                   | —      | false  |
| disabled    | 是否禁用状态                          | boolean                   | —      | false  |

## radio 事件

| 事件名    | 说明               | 参数                    |
| --------- | ------------------ | ----------------------- |
| on-change | radio 改变事件     | 选中时的值（trueValue） |
| on-focus  | radio 获得焦点事件 | 表单元素事件 e          |
| on-blur   | radio 失去焦点事件 | 表单元素事件 e          |

## radio slots

| 名称    | 说明                                                                                 |
| ------- | ------------------------------------------------------------------------------------ |
| default | radio 显示的 label，如果没有设置插槽，默认使用 label 参数，如果 label 也没有，就为空 |

## radio group 属性

| 参数  | 说明                            | 类型                      | 可选值 | 默认值 |
| ----- | ------------------------------- | ------------------------- | ------ | ------ |
| value | 选中的 radio，支持 v-model 绑定 | string / number / boolean | -      | -      |
| name  | 单选框组的名称 ，默认随机生成   | string                    | -      | -      |
| type  | 单选框组类型                    | string                    | button | -      |

## radio group 事件

| 事件名    | 说明           | 参数                |
| --------- | -------------- | ------------------- |
| on-change | radio 选中事件 | 选中时的 radio 的值 |

## radio group slots

| 名称    | 说明              |
| ------- | ----------------- |
| default | 用来设置 radio 组 |
