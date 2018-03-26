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

## 指定颜色

::: demo 通过指定`color`选择标签

```html
<xl-icon type='locked' color='red' style='margin-right:1em;'></xl-icon>
<xl-icon type='arrow-swap' color='blue' style='margin-right:1em;'></xl-icon>
<xl-icon type='information' color='yellow' style='margin-right:1em;'></xl-icon>
<xl-icon type='help'></xl-icon>
```

:::

## 指定大小

::: demo 通过指定`size`选择标签

```html
<xl-icon type='locked' :size='1' style='margin-right:1em;'></xl-icon>
<xl-icon type='arrow-swap' size='20px'></xl-icon>
```

:::

## icon 属性

| 参数  | 说明                                        | 类型          | 可选值 | 默认值 |
| ----- | ------------------------------------------- | ------------- | ------ | ------ |
| type  | 图标                                        | string        | -      | —      |
| size  | 图标大小，字符串或者数字，数字时，后缀为 em | string/number | —      | 1      |
| color | 图标颜色                                    | string        | -      | -      |

## 图标搜索

<div class='input-search'>
    <xl-input placeholder='搜索图标' v-model='value'></xl-input>
</div>
<div class='icon-item' :key='index' v-for='(icon,index) in filters'>
    <xl-icon :size='3' :type='icon.name'></xl-icon>
    <p>{{icon.name}}</p>
</div>
<script>
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
        }
    }
</script>
<style>
.icon-item{
    display:inline-block;
    text-align:center;
    width:8em;
    cursor:pointer;
}
.input-search{
    margin-bottom:2em;   
}
.input-search .xl-input{
    margin: 0 auto;
    width: 40em;
}
</style>
