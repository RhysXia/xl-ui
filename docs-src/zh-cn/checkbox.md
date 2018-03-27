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
