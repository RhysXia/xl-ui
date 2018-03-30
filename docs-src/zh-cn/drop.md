<script>
    export default{
        data(){
            return{
                visiable:false
            }
        }
    }
</script>

<style>
    .demo-drop{
        margin-bottom:2em;
    }
    .demo-content{
        background-color: rgba(70,76,91,.9);
        color:#fff;
        padding: 0.8em 1.5em;
        border-radius: 4px;

    }
</style>

# Drop 下拉组件

将动作或菜单折叠到下拉菜单中。

## 基本用法

::: demo 基本的使用方法

```html
<xl-row class='demo-drop'>
    <xl-col :span='4' :offset='4'>
        <xl-drop v-model='visiable' placement='top-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>top-start</div>
            </div>
        </xl-drop>
    </xl-col>
    <xl-col :span='4'>
        <xl-drop v-model='visiable' placement='top'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>top</div>
            </div>
        </xl-drop>
    </xl-col>
    <xl-col :span='4'>
        <xl-drop v-model='visiable' placement='top-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>top-end</div>
            </div>
        </xl-drop>
    </xl-col>
</xl-row>

<xl-row class='demo-drop'>
    <xl-col :span='4' :offset='4'>
        <xl-drop v-model='visiable' placement='left-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>left-start</div>
            </div>
        </xl-drop>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-drop v-model='visiable' placement='right-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>right-start</div>
            </div>
        </xl-drop>
    </xl-col>
</xl-row>

<xl-row class='demo-drop'>
    <xl-col :span='4' :offset='4'>
        <xl-drop v-model='visiable' placement='left'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>left</div>
            </div>
        </xl-drop>
    </xl-col>
    <xl-col :span='4'>
        <xl-button @on-click='visiable=!visiable'>{{visiable?'隐藏':'显示'}}</xl-button>
    </xl-col>
    <xl-col :span='4'>
        <xl-drop v-model='visiable' placement='right'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>right</div>
            </div>
        </xl-drop>
    </xl-col>
</xl-row>

<xl-row class='demo-drop'>
    <xl-col :span='4' :offset='4'>
        <xl-drop v-model='visiable' placement='left-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>left-end</div>
            </div>
        </xl-drop>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-drop v-model='visiable' placement='right-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>right-end</div>
            </div>
        </xl-drop>
    </xl-col>
</xl-row>
<xl-row class='demo-drop'>
    <xl-col :span='4' :offset='4'>
        <xl-drop v-model='visiable' placement='bottom-start'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>bottom-start</div>
            </div>
        </xl-drop>
    </xl-col>
    <xl-col :span='4'>
        <xl-drop v-model='visiable' placement='bottom'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>bottom</div>
            </div>
        </xl-drop>
    </xl-col>
    <xl-col :span='4'>
        <xl-drop v-model='visiable' placement='bottom-end'>
            <xl-button>下拉菜单</xl-button>
            <div slot="drop">
                <div class='demo-content'>bottom-end</div>
            </div>
        </xl-drop>
    </xl-col>
</xl-row>
```

:::

## Drop 属性

| 参数           | 说明                                       | 类型     | 可选值                                                                                                      | 默认值            |
| -------------- | ------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------- | ----------------- |
| value          | 是否显示弹出框，支持 v-model               | boolean  | -                                                                                                           | false             |
| popupContainer | 弹出框所处的父元素                         | function | -                                                                                                           | ()=>document.body |
| placement      | 弹出框相对显示框的位置                     | string   | 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end' | top               |
| position       | 弹出框位置                                 | string   | absolute/relative                                                                                           | absolute          |
| renderDuration | 修改窗口大小时重新渲染弹出框位置的时间间隔 | number   | -                                                                                                           | 200               |

## Drop slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 插入显示框 |
| drop    | 插入弹出框 |
