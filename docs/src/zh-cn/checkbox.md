<script>
    export default{
        data(){
            return {
                value:false,
                value2:'TRUE',
                arr:[],
                arr2:[],
                arr3:[],
            }
        },
        computed:{
            indeterminate(){
                return this.arr3.length>0 && this.arr3.length<3
            },
            checkAll() {
                return this.arr3.length === 3
            } 
        },
        methods: {
            click() {
                if(!this.checkAll){
                    this.arr3 = ['123','456','789']
                }else{
                    this.arr3 = []
                }
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

<script>
    export default{
        data(){
            return {
                value:false
            }
        }
    }
</script>
```

:::

## 自定义值

::: demo 使用`true-value`和`false-value`自定义值

```html
<xl-checkbox v-model="value2" true-value='TRUE' false-value='FALSE' label='选择框'></xl-checkbox>
<p>{{value2}}</p>
<script>
    export default{
        data(){
            return {
                value2:'TRUE'
            }
        }
    }
</script>
```

:::

## 边框

::: demo 使用`bordered`给多选框设置边框

```html
<xl-checkbox v-model="value" bordered label='选择框'></xl-checkbox>
<p>{{value}}</p>
<script>
    export default{
        data(){
            return {
                value:false
            }
        }
    }
</script>
```

:::


## 多选框组

::: demo 使用`xl-checkbox-group`实现多选框组,必须制定每个 checkbox 的`value`值，`label`不存在的时候，默认使用`value`值作为 label

```html
<xl-checkbox-group v-model='arr'>
    <xl-checkbox value='a' label='A'></xl-checkbox>
    <xl-checkbox value='b'></xl-checkbox>
    <xl-checkbox value='c' label='C'></xl-checkbox>
</xl-checkbox-group>
<p>{{arr}}</p>

<script>
    export default{
        data(){
            return {
                arr:[]
            }
        }
    }
</script>
```

:::

## 多选框组可以和 grid 结合使用

::: demo 结合使用`xl-checkbox-group`组件和`grid`组件实现布局

```html
<xl-checkbox-group v-model='arr2'>
    <xl-row :gutter="20">
        <xl-col :span="8">
            <xl-checkbox value='a'></xl-checkbox>
        </xl-col>
        <xl-col :span="8">
            <xl-checkbox value='b'></xl-checkbox>
        </xl-col>
        <xl-col :span="8">
            <xl-checkbox value='c' label='C'></xl-checkbox>
        </xl-col>
    </xl-row>
</xl-checkbox-group>
<p>{{arr2}}</p>

<script>
    export default{
        data(){
            return {
                arr2:['123','456']
            }
        }
    }
</script>
```

:::

## 按钮样式的多选框组

::: demo 使用`type="button"`实现多选框组

```html
<xl-checkbox-group type='button'>
    <xl-checkbox value='123'>aaa</xl-checkbox>
    <xl-checkbox value='456'>bbb</xl-checkbox>
    <xl-checkbox value='987' label='789'>ccc</xl-checkbox>
</xl-checkbox-group>
```

:::

## indeterminate 状态

::: demo 使用`indeterminate`实现多选框组

```html
<xl-checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="click">全选</xl-checkbox>
<xl-checkbox-group type='button' v-model='arr3'>
    <xl-checkbox value='123'>aaa</xl-checkbox>
    <xl-checkbox value='456'>bbb</xl-checkbox>
    <xl-checkbox value='789'>ccc</xl-checkbox>
</xl-checkbox-group>
<p>{{arr3}}</p>
<script>
    export default{
        data(){
            return {
                arr3:[]
            }
        },
        computed:{
            indeterminate(){
                return this.arr3.length>0 && this.arr3.length<3
            },
            checkAll() {
                return this.arr3.length === 3
            } 
        },
        methods: {
            click() {
                if(!this.checkAll){
                    this.arr3 = ['123','456','789']
                }else{
                    this.arr3 = []
                }
            }
        }
    }
</script>
```

:::

## 禁用

::: demo 使用`disabled`禁用多选框

```html
<xl-checkbox-group type='button'>
    <xl-checkbox disabled value='123'>aaa</xl-checkbox>
    <xl-checkbox value='456'>bbb</xl-checkbox>
    <xl-checkbox value='987' label='789'>ccc</xl-checkbox>
</xl-checkbox-group>

<xl-checkbox v-model="value" disabled label='选择框'></xl-checkbox>
<xl-checkbox v-model="value" disabled bordered label='选择框'></xl-checkbox>
<p>{{value}}</p>
<script>
    export default{
        data(){
            return {
                value:false
            }
        }
    }
</script>
```

:::

## 只读

::: demo 使用`readonly`只读多选框

```html
<xl-checkbox-group type='button'>
    <xl-checkbox readonly value='123'>aaa</xl-checkbox>
    <xl-checkbox value='456'>bbb</xl-checkbox>
    <xl-checkbox value='987' label='789'>ccc</xl-checkbox>
</xl-checkbox-group>

<xl-checkbox v-model="value" readonly label='选择框'></xl-checkbox>
<xl-checkbox v-model="value" readonly bordered label='选择框'></xl-checkbox>

<p>{{value}}</p>
<script>
    export default{
        data(){
            return {
                value:false
            }
        }
    }
</script>
```

:::

## checkbox 属性

| 参数          | 说明                                           | 类型                      | 可选值 | 默认值 |
| ------------- | ---------------------------------------------- | ------------------------- | ------ | ------ |
| label         | checkbox 显示值                                | string                    | -      | -      |
| name          | checkbox 的 name（单独使用时有效）             | string                    | -      | -      |
| value         | checkbox 单独使用时，支持 v-model 绑定         | string / number / boolean | -      | false  |
| true-value    | 选中时的 value 值（单独使用时有效）            | string / number / boolean | -      | true   |
| false-value   | 未选中时的 value 值（单独使用时有效）          | string / number / boolean | -      | false  |
| bordered      | 是否显示 checkbox 边框                         | boolean                   | -      | false  |
| readonly      | 是否只读                                       | boolean                   | -      | false  |
| disabled      | 是否禁用状态                                   | boolean                   | -      | false  |
| indeterminate | 半选状态 (一旦为 true，多选框就不能为其他状态) | boolean                   | -      | false  |

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
