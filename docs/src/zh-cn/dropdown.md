<script>
    export default{
        data(){
            return {
                visiable:false
            }
        }
    }
</script>

# Dropdown 下拉菜单

展示一组折叠的下拉菜单。

## 基础用法

::: demo 基础使用方式

```html
<xl-dropdown>
    <xl-button>下拉菜单</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
```

:::

## 禁用

::: demo 禁止某一项点击

```html
<xl-dropdown>
    <xl-button>下拉菜单</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
```

:::

## 触发弹出框的方式

::: demo 使用`trigger`指定响应事件

```html
<xl-dropdown trigger='click'>
    <xl-button>下拉菜单(click)</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
<xl-dropdown trigger='hover'>
    <xl-button>下拉菜单(hover)</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
```

:::

## 自定义弹出框显示方式

::: demo 使用`trigger="custom"`指定响应事件

```html
<xl-dropdown trigger='custom' v-model='visiable'>
    <xl-button>下拉菜单</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
<xl-button @on-click='visiable=!visiable'>{{visiable?'隐藏':'展开'}}</xl-button>
```

:::

## 弹出框显示在不同位置

::: demo 使用`placement`指定位置

```html
<xl-dropdown placement='top-end'>
    <xl-button>下拉菜单(上方)</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
<xl-dropdown placement='right-end'>
    <xl-button>下拉菜单(右侧)</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
```

:::

## 点击弹出框不隐藏

::: demo 使用`hideOnClick`指定是否隐藏

```html
<xl-dropdown :hide-on-click='true'>
    <xl-button>下拉菜单(点击关闭)</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
<xl-dropdown :hide-on-click='false'>
    <xl-button>下拉菜单(点击不关闭)</xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item disabled>螺蛳粉</xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
```

:::

## 嵌套用法(未完成)

::: demo 多个下拉框嵌套使用，可以模拟文件夹

```html
<xl-dropdown placement='bottom'>
    <xl-button>
        下拉菜单
        <xl-icon type='arrow-down-b'></xl-icon>
    </xl-button>
    <xl-dropdown-menu slot="dropdown">
        <xl-dropdown-item>黄金糕</xl-dropdown-item>
        <xl-dropdown-item>狮子头</xl-dropdown-item>
        <xl-dropdown-item>
            <xl-dropdown placement='right'>
                <span>
                    北京烤鸭
                    <xl-icon type='arrow-right-b'></xl-icon>
                </span>
                <xl-dropdown-menu slot="dropdown">
                    <xl-dropdown-item>挂炉烤鸭</xl-dropdown-item>
                    <xl-dropdown-item>焖炉烤鸭</xl-dropdown-item>
                    <xl-dropdown-item>
                        <xl-dropdown placement='right'>
                            <span>
                                北京烤鸭
                                <xl-icon type='arrow-right-b'></xl-icon>
                            </span>
                            <xl-dropdown-menu slot="dropdown">
                                <xl-dropdown-item>挂炉烤鸭</xl-dropdown-item>
                                <xl-dropdown-item>焖炉烤鸭</xl-dropdown-item>
                            </xl-dropdown-menu>
                        </xl-dropdown>
                    </xl-dropdown-item>
                </xl-dropdown-menu>
            </xl-dropdown>
        </xl-dropdown-item>
        <xl-dropdown-item>双皮奶</xl-dropdown-item>
        <xl-dropdown-item>蚵仔煎</xl-dropdown-item>
    </xl-dropdown-menu>
</xl-dropdown>
```

:::

## Dropdown 属性

| 参数            | 说明                                                                               | 类型             | 可选值             | 默认值            |
| --------------- | ---------------------------------------------------------------------------------- | ---------------- | ------------------ | ----------------- |
| value           | 设置是否显示或隐藏，支持 v-model                                                   | boolean          | -                  | false             |
| trigger         | 触发下拉框显示的方式                                                               | string           | hover/click/custom | hover             |
| popup-container | 弹出框挂载的节点元素，默认 body 元素                                               | function         | -                  | ()=>document.body |
| hide-on-click   | 点击弹出框时是否关闭弹出框（trigger 不为 custom 且点击的条目不是 disabled 时有效） | boolean          | -                  | true              |
| space           | 弹出框距离被显示框的距离（为 number 类型时默认单位是 em）                          | number / boolean | -                  | 0.5em             |
| divide          | 是否显示分割线                                                                     | boolean          | -                  | true              |

## Dropdown slots

| 名称     | 说明       |
| -------- | ---------- |
| default  | 显示框插槽 |
| dropdown | 下拉框插槽 |

## DropdownMenu slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 菜单项插槽 |

## DropdownItem 属性

| 参数     | 说明     | 类型    | 可选值 | 默认值 |
| -------- | -------- | ------- | ------ | ------ |
| disabled | 是否禁用 | boolean | -      | false  |

## DropdownItem 事件

| 事件名   | 说明     | 参数       |
| -------- | -------- | ---------- |
| on-click | 点击事件 | 点击元素 e |

## DropdownItem slots

| 名称    | 说明     |
| ------- | -------- |
| default | 菜单内容 |
