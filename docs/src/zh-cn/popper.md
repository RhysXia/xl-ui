<script>
export default {
    data() {
        return {
            visible: false,
            visible2: false,
            visible3: false
        }
    },
    methods: {
        click1() {
            this.visible = !this.visible
        },
        click2() {
            this.visible2 = !this.visible2
        },
        click3() {
            this.visible3 = !this.visible3
        },
        getPopupContainer() {
            return document.querySelector('.demo-container')
        }
    }
}
</script>
<style>
    .demo-popper{
        margin-bottom:2em;
    }
    .demo-popup {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #eee;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
    .demo-container{
        position: relative;
    }
    .demo-arrow{
        width: 1rem;
        height: 1rem;
        background-color: red;
    }
</style>

# Popper组件
基础的弹出框组件，其他弹出框都是基于这个组件进行开发的，如果你需要基于弹出框功能进行二次开发，可以选择使用这个组件

## 基本使用

:::demo 通过属性`visible`控制组件的显示或隐藏

```html
<xl-button @on-click="click1">点击{{visible?'隐藏':'展示'}}</xl-button>

<br/>
<br/>
<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='top-start' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='top' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='top-end' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top-end</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left-start' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popper placement='right-start' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right-start</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='right' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left-end' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left-end</div>
        </xl-popper>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popper placement='right-end' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right-end</div>
        </xl-popper>
    </xl-col>
</xl-row>
<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='bottom-start' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='bottom' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='bottom-end' v-model="visible">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom-end</div>
        </xl-popper>
    </xl-col>
</xl-row>
<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        click1() {
            this.visible = !this.visible
        }
    }
}
</script>
<style>
    .demo-popper{
        margin-bottom:2em;
    }
    .demo-popup {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #eee;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
</style>
```

:::


## 指定弹出框的父容器
> 即使父容器使用`position:relative`限制子元素，依然可以正常定位，但是**请不要使用`overflow:hidden`**,否则弹出框可能无法显示

:::demo 通过属性`get-popup-container`指定父容器

```html
<xl-button @on-click="click2">点击{{visible2?'隐藏':'展示'}}</xl-button>

<br/>
<br/>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='top-start' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top-start</div>
        </xl-popu>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='top' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='top-end' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">top-end</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left-start' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popper placement='right-start' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right-start</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='right' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left-end' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">left-end</div>
        </xl-popper>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popper placement='right-end' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">right-end</div>
        </xl-popper>
    </xl-col>
</xl-row>
<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='bottom-start' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='bottom' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='bottom-end' v-model="visible2" :get-popup-container="getPopupContainer">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-popup" slot="popup">bottom-end</div>
        </xl-popper>
    </xl-col>
</xl-row>
<div class="demo-container"></div>
<script>
export default {
    data() {
        return {
            visible2: false,
            getPopupContainer: () => {
                return document.querySelector('.demo-container')
            }
        }
    },
    methods: {
        click2() {
            this.visible2 = !this.visible2
        }
    }
}
</script>
<style>
    .demo-popper{
        margin-bottom:2em;
    }
    .demo-popup {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #eee;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
    .demo-container{
        position: relative;
    }
</style>
```

:::

## 自定义箭头

:::demo 通过`arrow`插槽设置箭头

```html
<xl-button @on-click="click3">点击{{visible3?'隐藏':'展示'}}</xl-button>

<br/>
<br/>
<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='top-start' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">top-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='top' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">top</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='top-end' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">top-end</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left-start' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">left-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popper placement='right-start' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">right-start</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">left</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='right' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">right</div>
        </xl-popper>
    </xl-col>
</xl-row>

<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='left-end' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">left-end</div>
        </xl-popper>
    </xl-col>
    <xl-col :offset='4' :span='4'>
        <xl-popper placement='right-end' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">right-end</div>
        </xl-popper>
    </xl-col>
</xl-row>
<xl-row class='demo-popper'>
    <xl-col :span='4' :offset='4'>
        <xl-popper placement='bottom-start' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">bottom-start</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='bottom' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">bottom</div>
        </xl-popper>
    </xl-col>
    <xl-col :span='4'>
        <xl-popper placement='bottom-end' v-model="visible3">
            <xl-button>下拉菜单</xl-button>
            <div class="demo-arrow" slot="arrow"></div>
            <div class="demo-popup" slot="popup">bottom-end</div>
        </xl-popper>
    </xl-col>
</xl-row>

<script>
export default {
    data() {
        return {
            visible3: false
        }
    },
    methods: {
        click3() {
            this.visible3 = !this.visible3
        }
    }
}
</script>
<style>
    .demo-popper{
        margin-bottom:2em;
    }
    .demo-popup {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #eee;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
    .demo-arrow{
        width: 1rem;
        height: 1rem;
        background-color: red;
    }
</style>
```

:::
