<script>
    export default{
        data(){
            return{
                disabled:false,
                always: false
            }
        }
    }
</script>

<style>
    .demo-tooltip{
        margin-bottom:2em;
    }
</style>

# Tooltip 文字提示框组件

对某些信息进行文字提示。

## 基本用法

::: demo 基本的使用方法

```html
<xl-row class='demo-tooltip'>
    <xl-col :span='4' :offset='4'>
        <xl-tooltip placement='top-start' content="top-start">
            <xl-button>下拉菜单</xl-button>
        </xl-popu>
    </xl-col>
    <xl-col :span='4'>
        <xl-tooltip placement='top' content="top">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
    <xl-col :span='4'>
        <xl-tooltip placement='top-end' content="top-end">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
</xl-row>

<xl-row class='demo-tooltip'>
    <xl-col :span='4' :offset='4'>
        <xl-tooltip placement='left-start' content="left-start">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-tooltip placement='right-start' content="right-start">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
</xl-row>

<xl-row class='demo-tooltip'>
    <xl-col :span='4' :offset='4'>
        <xl-tooltip placement='left' content="left">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-tooltip placement='right' content="right">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
</xl-row>

<xl-row class='demo-tooltip'>
    <xl-col :span='4' :offset='4'>
        <xl-tooltip placement='left-end' content="left-end">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-tooltip placement='right-end' content="right-end">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
</xl-row>
<xl-row class='demo-tooltip'>
    <xl-col :span='4' :offset='4'>
        <xl-tooltip placement='bottom-start' content="bottom-start">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
    <xl-col :span='4'>
        <xl-tooltip placement='bottom' content="bottom">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
    <xl-col :span='4'>
        <xl-tooltip placement='bottom-end' content="bottom-end">
            <xl-button>下拉菜单</xl-button>
        </xl-tooltip>
    </xl-col>
</xl-row>
```
:::

## 长文本

:::demo 通过指定`width`改变弹出框的长度
```html
<xl-tooltip :width="{min:150,max:300}" content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。">
    <xl-button>长文本</xl-button>
</xl-tooltip>
```

:::

## 标题和内容支持html

:::demo 通过指定`dangerousHtml`支持HTML
```html
<xl-tooltip dangerous-html content="<b>这是加粗的内容</b>">
    <xl-button>富文本</xl-button>
</xl-tooltip>
```

:::

## 延迟显示

:::demo 通过指定`dealy`延迟显示
```html
<xl-tooltip content="显示消息" :delay="1000">
    <xl-button>延迟1s显示</xl-button>
</xl-tooltip>
```

:::

## 总是显示

:::demo 通过指定`always`
```html
<xl-checkbox v-model="always" label="是否总显示"></xl-checkbox>
<xl-checkbox v-model="disabled" label="是否总不显示"></xl-checkbox>
<br/>
<br/>
<xl-tooltip content="显示消息" :always="always" :disabled="disabled">
    <xl-button>{{disabled?"禁止提示框":always?"总是显示提示框":"鼠标悬浮显示"}}</xl-button>
</xl-tooltip>
```

:::



## Tooltip 属性

| 参数            | 说明                                | 类型     | 可选值                 | 默认值            |
| --------------- | ---------------------------- | -------- | ---------------- | ----------------- |
| transfer | 是否将弹出框置于body中   | boolean |                -             | false |
| placement       | 弹出框相对显示框的位置                     | string   | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom               |
| width       | 弹出框宽,通过设置{min:10,max:20}来设置最小宽度和最大宽度                   | string/number/object   | - | {min: 150,max: 300}               |
| content       | 内容                   | string   | - | -              |
| padding       | 自定义边距                   | string   | - | '0.5em,1em'              |
| dangerous-html      | 允许嵌入HTML         | boolean   | - | false        |
| delay      | 延迟显示         | number(ms)   | - | 0        |
| disabled      | 是否总不显示         | boolean   | - | false        |
| always      | 是否总是显示(`disabled=false`下可用)         | boolean   | - | false        |


## Tooltip 事件

| 名称    | 说明       |参数                    |
| ------- | ---------- |----------------------- |
| on-input   | 弹出框状态改变时触发 | boolean，true：弹出框显示，false：弹出框隐藏  |

## Tooltip slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 插入显示框 |
| title   | 弹出框标题，定义此 slot 时，会覆盖 props `title` |
| content   | 弹出框内容，定义此 slot 时，会覆盖 props `content` |
