<style>
  .demo-item{
    height: 4em;
  }
  .demo-item1{
    background-color: #409eff;
  }
  .demo-item2{
    background-color: #67c23a;
  }
  .demo-item3{
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 4em;
    cursor: pointer;
    font-weight: bold;
  }
  .collapse1.collapse-transition{
    transition: all 2s ease-in-out !important;
  }
</style>
<script>
  export default {
    data() {
      return {
        show1: false,
        direction: 'top',
        show2: false
      }
    },
    methods: {
      click1() {
        this.show1 = !this.show1
      },
      click2() {
        this.show2 = !this.show2
      }
    }
  }
</script>

# 动画组件
`xl-vision`内置了多种动画效果，可以直接使用

## Collapse Transition
折叠组件，可以参看`collapse`组件的动画效果

:::demo 折叠组件,可以指定class `collapse-transition`来自定义动画效果，通常内容是`transition: all 2s ease-in-out;`

```html
<div class='demo-item2 demo-item3' @click="click1">点击{{show1?'隐藏':'展开'}}</div>
<xl-collapse-transition>
  <div v-show="show1" class="collapse1">
    <div class='demo-item demo-item1'></div>
    <div class='demo-item demo-item2'></div>
    <div class='demo-item demo-item1'></div>
    <div class='demo-item demo-item2'></div>
  </div>
</xl-collapse-transition>

<style>
  .demo-item{
    height: 4em;
  }
  .demo-item1{
    background-color: #409eff;
  }
  .demo-item2{
    background-color: #67c23a;
  }
  .demo-item3{
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 4em;
    cursor: pointer;
    font-weight: bold;
  }
  .collapse1.collapse-transition{
    transition: all 2s ease-in-out;
  }
</style>
<script>
  export default {
    data() {
      return {
        show1: false
      }
    },
    methods: {
      click1() {
        this.show1 = !this.show1
      }
    }
  }
</script>
```
:::

## Slide Transition

:::demo 使用`xl-slide-*`实现不同方向的滑动效果

```html
<xl-row>
  <xl-col :span="6">
    <xl-radio-group type="button" v-model="direction">
      <xl-radio label="top"></xl-radio>
      <xl-radio label="bottom"></xl-radio>
      <xl-radio label="left"></xl-radio>
      <xl-radio label="right"></xl-radio>
    </xl-radio-group>
  </xl-col>
  <xl-col :span="12">
    <xl-button @on-click="click2">点击向{{direction==='top'?'上':direction==='bottom'?'下':direction==='left'?'左':'右'}}{{show2?'隐藏':'展开'}}</xl-button>
  </xl-col>
</xl-row>
<transition :name="'xl-slide-'+direction">
  <div v-show="show2">
    <div class='demo-item demo-item1'></div>
    <div class='demo-item demo-item2'></div>
    <div class='demo-item demo-item1'></div>
    <div class='demo-item demo-item2'></div>
  </div>
</transition>

<script>
  export default {
    data() {
      return {
        direction: 'top',
        show2: false
      }
    },
    methods: {
      click2() {
        this.show2 = !this.show2
      }
    }
  }
</script>

<style>
  .demo-item{
    height: 4em;
  }
  .demo-item1{
    background-color: #409eff;
  }
  .demo-item2{
    background-color: #67c23a;
  }
  .demo-item3{
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 4em;
    cursor: pointer;
    font-weight: bold;
  }
</style>

```

:::