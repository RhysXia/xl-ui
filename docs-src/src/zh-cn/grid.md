<style>
    .grid-content{
        border-radius: 0.25em;
        min-height:2em;
        margin-bottom:1em;
    }
    .bg-purple{
        background-color:#d3dce6;
    }
    .bg-purple--light{
        background-color:#e5e9f2;
    }
    .row-bg{
        height: 4em;
        background-color:#f9fafc;
        margin-bottom:1em;
    }
    .row-bg .grid-content{
        margin-bottom:0 !important;
    }
</style>

# 栅格系统

百分比布局，使用 24 等分

## 基础用法

基础的使用方法

::: demo 使用`span`属性设置元素的栅格大小

```html
<xl-row>
    <xl-col :span='24'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='24'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
<xl-row>
    <xl-col :span='12'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='12'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
<xl-row>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
<xl-row>
    <xl-col :span='4'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='4'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='4'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='4'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='4'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='4'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
```

:::

## 分栏间隔

分栏之间存在间隔

::: demo 使用`gutter`属性设置元素的栅格大小

```html
<xl-row :gutter='10'>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
```

:::

## 混合布局

使用不同大小的分栏混合布局

::: demo 使用不同的`span`属性设置元素的栅格大小

```html
<xl-row>
    <xl-col :span='3'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='7'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='8'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
```

:::

## 分栏偏移

支持设置偏移量

::: demo 使用不同的`offset`属性设置元素的偏移量

```html
<xl-row>
    <xl-col :span='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='2'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='2'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='2'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='2'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='2'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='2'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
<xl-row>
    <xl-col :span='6' :offset='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6' :offset='2'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
<xl-row>
    <xl-col :span='4' :push='2'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='4' :push='2'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
<xl-row>
    <xl-col :span='4'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='4' :pull='2'><div class='grid-content bg-purple--light'></div></xl-col>
</xl-row>
```

:::

## 响应式布局

支持根据设备宽度进行响应式布局

::: demo 预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`,设置为 0 时表示隐藏

```html
<xl-row>
    <xl-col :xl='6' :lg='6' :sm='0'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :xl='6' :lg='4' :sm='4'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :xl='6' :lg='8' :sm='10'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :xl='6' :lg='6' :sm='8'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
```

:::

## 响应式偏移

响应式布局也可以进行偏移

::: demo `xs`、`sm`、`md`、`lg` 和 `xl`设置成对象的形式,`span` `pull` `push` `offset` `order` 属性可以通过内嵌到`xs`、`sm`、`md`、`lg` 和 `xl`属性中来使用

```html
<xl-row>
    <xl-col :lg='{span:4,offset:1}' :sm='{span:4,offset:2}'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :lg='{span:6,offset:1}' :sm='{span:4,offset:2}'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :lg='{span:4,offset:2}' :sm='{span:4,offset:2}'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :lg='{span:5,offset:1}' :sm='{span:4,offset:2}'><div class='grid-content  bg-purple--light'></div></xl-col>
</xl-row>
```

:::

## 对齐方式

可以选择不同的对齐方式

::: demo 将`type`属性赋值为'flex'，可以启用 flex 布局，并可通过`justify`属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式，通过`align`属性来指定 top,middle,bottom 指定上下对齐方式。

```html
<xl-row type='flex' class='row-bg'>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
</xl-row>
<xl-row type='flex' justify='center' class='row-bg'>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
</xl-row>
<xl-row type='flex' justify='end' class='row-bg'>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
</xl-row>

<xl-row type='flex' justify='center' align='middle' class='row-bg'>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
</xl-row>

<xl-row type='flex' justify='center' align='bottom' class='row-bg'>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
    <xl-col :span='6'><div class='grid-content  bg-purple--light'></div></xl-col>
    <xl-col :span='6'><div class='grid-content bg-purple'></div></xl-col>
</xl-row>
```

:::

## Row 属性

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | flex                                        | —      |
| tag     | 自定义元素标签                        | string | —                                           | div    |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | top    |

## Col 属性

| 参数   | 说明                                   | 类型                                       | 可选值 | 默认值 |
| ------ | -------------------------------------- | ------------------------------------------ | ------ | ------ |
| order  | 栅格顺序，flex 布局模式下有效          | number                                     | —      | —      |
| tag    | 自定义元素标签                         | string                                     | —      | div    |
| span   | 栅格占据的列数                         | number                                     | 0-24   | —      |
| offset | 栅格左侧的间隔列数，间隔内不可以有栅格 | number                                     | 1-24   | —      |
| push   | 栅格向右移动的列数                     | number                                     | 1-24   | —      |
| pull   | 栅格向左移动的列数                     | number                                     | 1-24   | —      |
| xs     | ≥0 响应式栅格数或者栅格属性对象        | number/object(例如： {span: 4, offset: 4}) | —      | —      |
| sm     | ≥768px 响应式栅格数或者栅格属性对象    | number/object(例如： {span: 4, offset: 4}) | —      | —      |
| md     | ≥992px 响应式栅格数或者栅格属性对象    | number/object(例如： {span: 4, offset: 4}) | —      | —      |
| lg     | ≥1200px 响应式栅格数或者栅格属性对象   | number/object(例如： {span: 4, offset: 4}) | —      | —      |
| xl     | ≥1920px 响应式栅格数或者栅格属性对象   | number/object(例如： {span: 4, offset: 4}) | —      | —      |
