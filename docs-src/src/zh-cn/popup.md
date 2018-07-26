<script>
    export default{
        data(){
            return{
                visiable:false
            }
        },
        methods:{
          container(){
            return document.getElementById('app')
          }
        }
    }
</script>

<style>
    .demo-popup{
        margin-bottom:2em;
    }
    .demo-content{
        background-color: rgba(70,76,91,.9);
        color:#fff;
        padding: 0.8em 1.5em;
        border-radius: 4px;

    }
</style>

# Popup 下拉组件

将动作或菜单折叠到下拉菜单中。

## 基本用法

::: demo 基本的使用方法

```html
<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='top-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>top-start</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='top'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>top</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='top-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>top-end</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>

<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='left-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>left-start</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popup placement='right-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>right-start</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>

<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='left'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>left</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='right'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>right</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>

<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='left-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>left-end</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popup placement='right-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>right-end</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>
<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='bottom-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>bottom-start</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='bottom'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>bottom</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='bottom-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>bottom-end</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>
```

:::

## 指定父容器

::: demo 指定弹出框所在的父容器

```html
<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='top-start' :popup-container="container">
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>top-start</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='top'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>top</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='top-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>top-end</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>

<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='left-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>left-start</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popup placement='right-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>right-start</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>

<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='left'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>left</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='right'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>right</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>

<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='left-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>left-end</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popup placement='right-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>right-end</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>
<xl-row class='demo-popup'>
    <xl-col :span='4' :offset='4'>
        <xl-popup placement='bottom-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>bottom-start</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='bottom'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>bottom</div>
            </div>
        </xl-popup>
    </xl-col>
    <xl-col :span='4'>
        <xl-popup placement='bottom-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="popup">
                <div class='demo-content'>bottom-end</div>
            </div>
        </xl-popup>
    </xl-col>
</xl-row>
```

:::

## Popup 属性

| 参数            | 说明                                       | 类型     | 可选值                                                                                                      | 默认值            |
| --------------- | ------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------- | ----------------- |
| popup-container | 指定弹出框的父元素(可以减小父容器样式的影响))   | function |                -                | ()=>document.body |
| placement       | 弹出框相对显示框的位置                     | string   | 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end' | top               |

## Popup slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 插入显示框 |
| popup   | 插入弹出框 |
