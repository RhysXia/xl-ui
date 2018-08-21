<style>
  .demo-item1{
    height: 4em;
    background-color: #409eff;
  }
  .demo-item2{
    height: 4em;
    background-color: #67c23a;
  }
  .demo-item3{
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 4em;
    cursor: pointer;
  }
  .collapse-transition{
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

# 动画组件
内置的动画效果，方便使用

## CollapseTransition
折叠组件，可以参看`collapse`组件的动画效果

:::demo 折叠组件,可以指定class `collapse-transition`来自定义动画效果，通常内容是`transition: all 2s ease-in-out;`

```html
<div class='demo-item2 demo-item3' @click="click1">{{show1?'隐藏':'展开'}}</div>
<xl-collapse-transition>
  <div v-show="show1">
    <div class='demo-item1'></div>
    <div class='demo-item2'></div>
    <div class='demo-item1'></div>
    <div class='demo-item2'></div>
  </div>
</xl-collapse-transition>

<style>
  .demo-item1{
    height: 4em;
    background-color: #409eff;
  }
  .demo-item2{
    height: 4em;
    background-color: #67c23a;
  }
  .demo-item3{
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    line-height: 4em;
    cursor: pointer;
  }
  .collapse-transition{
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