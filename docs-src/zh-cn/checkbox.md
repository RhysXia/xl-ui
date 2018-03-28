<script>
    export default{
        data(){
            return {
                value:false,
                value2:'TRUE',
                arr:[],
                arr2:['123','456']
            }
        }
    }
</script>

# 多选框

一组备选项中进行多选

## 基础用法

::: demo 基础使用方式

```html
<xl-checkbox v-model="value" label='选择框'></xl-checkbox>
<p>{{value}}</p>
```

:::

## 自定义值

::: demo 使用`true-value`和`false-value`自定义值

```html
<xl-checkbox v-model="value2" true-value='TRUE' false-value='FALSE' label='选择框'></xl-checkbox>
<p>{{value2}}</p>
```

:::

## 禁用

::: demo 使用`disabled`禁用多选框

```html
<xl-checkbox v-model="value" disabled label='选择框'></xl-checkbox>
<p>{{value}}</p>
```

:::

## 只读

::: demo 使用`readonly`只读多选框

```html
<xl-checkbox v-model="value" readonly label='选择框'></xl-checkbox>
<p>{{value}}</p>
```

:::

## 边框

::: demo 使用`border`给多选框设置边框

```html
<xl-checkbox v-model="value" border label='选择框'></xl-checkbox>
<p>{{value}}</p>
```

:::

## 多选框组

::: demo 使用`xl-checkbox-group`实现多选框组

```html
<xl-checkbox-group v-model='arr'>
    <xl-checkbox label='123'></xl-checkbox>
    <xl-checkbox value='456'></xl-checkbox>
    <xl-checkbox value='987' label='789'></xl-checkbox>
</xl-checkbox-group>
<p>{{arr}}</p>

<xl-checkbox-group v-model='arr2'>
    <xl-checkbox label='123'></xl-checkbox>
    <xl-checkbox value='456'></xl-checkbox>
    <xl-checkbox value='987' label='789'></xl-checkbox>
</xl-checkbox-group>
<p>{{arr2}}</p>
```

:::

## 按钮样式的多选框组

::: demo 使用`type="button"`实现多选框组

```html
<xl-checkbox-group type='button' v-model='arr2'>
    <xl-checkbox label='123'>aaa</xl-checkbox>
    <xl-checkbox value='456'>bbb</xl-checkbox>
    <xl-checkbox value='987' label='789'>ccc</xl-checkbox>
</xl-checkbox-group>
<p>{{arr2}}</p>
```

:::

## checkbox 属性

| 参数        | 说明                                   | 类型                      | 可选值 | 默认值 |
| ----------- | -------------------------------------- | ------------------------- | ------ | ------ |
| label       | checkbox 显示值                        | string                    | -      | -      |
| name        | checkbox 的 name（单独使用时有效）     | string                    | -      | -      |
| value       | checkbox 单独使用时，支持 v-model 绑定 | string / number / boolean | -      | false  |
| true-value  | 选中时的 value 值（单独使用时有效）    | string / number / boolean | —      | true   |
| false-value | 未选中时的 value 值（单独使用时有效）  | string / number / boolean | —      | false  |
| border      | 是否显示 checkbox 边框                 | boolean                   | —      | false  |
| readonly    | 是否只读                               | boolean                   | —      | false  |
| disabled    | 是否禁用状态                           | boolean                   | —      | false  |

## checkbox 事件

| 事件名    | 说明                  | 参数                    |
| --------- | --------------------- | ----------------------- |
| on-change | checkbox 改变事件     | 选中时的值（trueValue） |
| on-focus  | checkbox 获得焦点事件 | 表单元素事件 e          |
| on-blur   | checkbox 失去焦点事件 | 表单元素事件 e          |

## checkbox slots

| 名称    | 说明                                                                                    |
| ------- | --------------------------------------------------------------------------------------- |
| default | checkbox 显示的 label，如果没有设置插槽，默认使用 label 参数，如果 label 也没有，就为空 |

## checkbox group 属性

| 参数  | 说明                              | 类型   | 可选值 | 默认值 |
| ----- | --------------------------------- | ------ | ------ | ------ |
| value | 选中的 checkbox v-model 绑定      | array  | -      | []     |
| name  | 多选框选框组的名称 ，默认随机生成 | string | -      | -      |
| type  | 多选框组类型                      | string | button | -      |

## checkbox group 事件

| 事件名    | 说明              | 参数                   |
| --------- | ----------------- | ---------------------- |
| on-change | checkbox 选中事件 | 选中时的 checkbox 的值 |

## checkbox group slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 用来设置 checkbox 组 |
