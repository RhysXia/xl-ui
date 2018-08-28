# icon 图标

xl-vision 的图标使用了开源项目<a href='http://ionicons.com' target='_blabk'>ionicons</a>

## 基础用法

::: demo 通过指定`type`选择标签

```html
<xl-icon type='locked' style='margin-right:1em;'></xl-icon>
<xl-icon type='arrow-swap' style='margin-right:1em;'></xl-icon>
<xl-icon type='information' style='margin-right:1em;'></xl-icon>
<xl-icon type='help'></xl-icon>
```
:::

## icon 属性

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| type  | 图标     | string | -      | —      |

## icon 事件

| 事件名   | 说明         | 参数               |
| -------- | ------------ | ------------------ |
| on-click | 图标点击事件 | event 原生点击事件 |

## 图标搜索

<div class='input-search'>
    <xl-input placeholder='搜索图标' v-model='value'></xl-input>
</div>
<button class='icon-item' :key='index' v-for='(icon,index) in filters' :data-clipboard-text="`<xl-icon type='${icon.name}'></xl-icon>`">
    <xl-icon class="icon-icon" :type='icon.name'></xl-icon>
    <div class="icon-name">
        <xl-tooltip content="复制图标">
            <p>{{icon.name}}</p>
        </xl-tooltip>
    </div>
</button>
<script>
    const ClipboardJS = require('clipboard')
    import icons from '../data/icons'
    export default{
        data(){
            return{
                value:'',
            }
        },
        computed:{
            filters(){
                return icons.filter(icon => icon.tag.indexOf(this.value) > -1);
            }
        },
        mounted() {
            this.clipboard = new ClipboardJS('.icon-item')
        },
        beforeDestroy() {
            this.clipboard.destroy()
        }
    }
</script>
<style>
.icon-item{
    border: none;
    outline: none;
    background: transparent;
    display:inline-block;
    text-align:center;
    width:10em;
    cursor:pointer;
    margin: 1em;
}
.icon-icon{
    font-size: 3rem;
}
.icon-name{
    background-color: #eee;
    border-radius: 3px;
}
.icon-name p {
    margin: 0;
    padding: 0.5em 1em;
}
.input-search{
    margin-bottom:2em;   
}
.input-search .xl-input{
    margin: 0 auto;
    width: 40em;
}
</style>
