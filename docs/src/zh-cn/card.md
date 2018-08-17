<script>
  export default {
    methods: {
      plusClick() {
        alert("添加成功")
      },
      trashClick() {
        alert("删除成功")
      }
    }
  }
</script>
<style>
.demo-card__border {
  padding: 2em;
  background-color: #eee;
}

.demo-card__card{
    display: flex;
    justify-content: space-around;
  }
</style>

# Card 卡片

基本容器，用来进行文字、列表、图文等展示

## 基础用法

::: demo 使用`title`指定标题

```html
<xl-card title="列表展示">
  <p>item1</p>
  <p>item2</p>
  <p>item3</p>
</xl-card>
```
:::

## 无边框
::: demo 使用`border`指定是否显示边框

```html
<div class="demo-card__border">
  <xl-card title="列表展示" :border="false">
    <p>item1</p>
    <p>item2</p>
    <p>item3</p>
  </xl-card>
</div>
<style>
.demo-card__border {
  padding: 2em;
  background-color: #eee;
}
</style>
```
:::

## 显示阴影
::: demo 使用`shadow`指定是否显示阴影

```html
<xl-row :gutter="20">
  <xl-col :span="8">
    <xl-card title="一直不显示阴影" shadow="never">
      <p>item1</p>
      <p>item2</p>
      <p>item3</p>
    </xl-card>
  </xl-col>
  <xl-col :span="8">
    <xl-card title="一直显示阴影" shadow="always">
      <p>item1</p>
      <p>item2</p>
      <p>item3</p>
    </xl-card>
  </xl-col>
  <xl-col :span="8">
    <xl-card title="鼠标悬停显示阴影" shadow="hover">
      <p>item1</p>
      <p>item2</p>
      <p>item3</p>
    </xl-card>
  </xl-col>
</xl-row>
```
:::

## 定制标题和内容

::: demo 自定义插槽

```html
<xl-card>
  <p slot="title" style="margin:0;">
    <xl-icon type="ios-film"></xl-icon>
    热门电影
  </p>
  <div slot="extra">
    <xl-icon style="padding-right:1em;cursor:pointer;color:#409eff;" type="plus" @on-click="plusClick"></xl-icon>
    <xl-icon style="cursor:pointer;color:#f56c6c;" type="trash-b" @on-click="trashClick"></xl-icon>
  </div>
  <p>
    <a href="#">
    一出好戏
    </a>
  </p>
  <p>
    <a href="#">
    西红柿首富
    </a>
  </p>
  <p>
    <a href="#">
    摩天救援
    </a>
  </p>
</xl-card>

<script>
export default {
  methods: {
    plusClick() {
      alert("添加成功")
    },
    trashClick() {
      alert("删除成功")
    }
  }
}
</script>
```
:::

## 卡片式布局

::: demo 使用`footer`插槽

```html
<xl-card style="width:300px;overflow:hidden" :body-style="{padding:0}">
  <img style="width:300px;vertical-align:top;" src="/static/card_1.png"/>
  <div slot="footer" class="demo-card__card">
    <xl-button icon="gear-b" type="text"></xl-button>
    <xl-button icon="edit" type="text"></xl-button>
    <xl-button icon="more" type="text"></xl-button>
  </div>
</xl-card>
<style>
  .demo-card__card{
    display: flex;
    justify-content: space-around;
  }
</style>
```
:::

## card 属性

| 参数        | 说明           | 类型    | 可选值                                                      | 默认值  |
| ----------- | -------------- | ------- | ----------------------------------------------------------- | ------- |
| title        | 标题（如果使用了title插槽，则这个属性不生效）           | string  | - | - |
| border       | 是否显示边框   | boolean | —                                                           | true   |
| shadow       | 是否显示阴影   | string | hover/always/never                              | never   |
| headerStyle       | 定制头部的样式   | object | —                                                           | {}   |
| bodyStyle       | 定制body的样式   | object | —                                                           | {}   |
| footerStyle       | 定制footer的样式   | object | —                                                           | {}   |
| headerClass     | 头部添加样式 | string | —                                                           | -   |
| bodyClass     | body添加样式 | string | —                                                           | -   |
| footerClass     | footer添加样式 | string | —                                                           | -   |

## Poptip slots

| 名称    | 说明       |
| ------- | ---------- |
| default | card显示的主题内容 |
| title   | 定制标题 |
| footer   | 定制底部 |
| extra   | 定制标题栏的额外显示内容，主要用于交互操作 |
