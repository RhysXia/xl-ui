<script>
    export default {
        data() {
            return {
                value1: null,
                value2: null
            }
        }
    }
</script>

# Collapse 折叠面板

将内容区域折叠/展开

## 基础用法

基础的按钮用法

::: demo 基本用法

```html
<xl-collapse>
    <xl-panel title="史蒂夫·乔布斯" :index="1">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫" :index="3">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
</xl-collapse>
```

:::

## 嵌套使用

::: demo 嵌套使用

```html
<xl-collapse>
    <xl-panel title="史蒂夫·乔布斯" :index="1">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫" :index="3">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
    <xl-panel title="嵌套" :index="4">
        <xl-collapse>
            <xl-panel title="史蒂夫·乔布斯" :index="1">
                <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </xl-panel>
            <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
                <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
            </xl-panel>
            <xl-panel title=" 乔纳森·伊夫" :index="3">
                <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
            </xl-panel>
        </xl-collapse>
    </xl-panel>
</xl-collapse>
```

:::

## 手风琴效果

::: demo 使用`accordion`属性启动手风琴效果

```html
<xl-collapse accordion>
    <xl-panel title="史蒂夫·乔布斯" :index="1">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫" :index="3">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
</xl-collapse>
```

:::

## 简洁模式

::: demo 使用`simple`属性使用简洁模式

```html
<xl-collapse simple>
    <xl-panel title="史蒂夫·乔布斯" :index="1">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫" :index="3">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
</xl-collapse>
```

:::

## 隐藏箭头

::: demo 使用`hide-arrow`属性使用简洁模式

```html
<xl-collapse hide-arrow>
    <xl-panel title="史蒂夫·乔布斯" :index="1">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel :hide-arrow="false
    " title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫" :index="3">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
</xl-collapse>
```

:::

## 支持数据绑定

::: demo 使用v-model绑定数据

```html
<p>展开的panel的index为:{{value1}}</p>

<xl-collapse v-model="value1">
    <xl-panel title="史蒂夫·乔布斯" :index="1">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫" :index="3">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
</xl-collapse>

<p>展开的panel的index为:{{value2}}</p>

<xl-collapse v-model="value2" accordion>
    <xl-panel title="史蒂夫·乔布斯" :index="1">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克" :index="2">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫" :index="3">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
</xl-collapse>


<script>
    export default {
        data() {
            return {
                value1: null,
                value2: null
            }
        }
    }
</script>
```

:::

## collapse 属性

| 参数       | 说明                                                                                      | 类型         | 可选值 | 默认值 |
| ---------- | ----------------------------------------------------------------------------------------- | ------------ | ------ | ------ |
| accordion  | 手风琴模式                                                                                | boolean      | false  |
| value      | 展开的 panel 的`index`值(如果是手风琴模式，则为单个 number 值，否则为数组，支持`v-model`) | number/array | —      | -      |
| simple     | 是否为简洁模式                                                                            | boolean      | —      | false  |
| hide-arrow | 是否隐藏箭头，全局配置，其下的 panel 都不展示箭头                                         | boolean      | —      | false  |

## collapse 事件

| 事件名    | 说明                      | 参数                   |
| --------- | ------------------------- | ---------------------- |
| on-change | 当展开的 panel 改变时触发 | 展开的 panel 的`index` |

## collapse slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 插入 panle |

## panel 属性

| 参数       | 说明                                                      | 类型    | 可选值 | 默认值 |
| ---------- | --------------------------------------------------------- | ------- | ------ | ------ |
| title      | 显示的标题                                                | string  | -      |
| index      | 标识当前 panel，需要唯一                                  | number  | —      | -      |
| hide-arrow | 是否隐藏箭头，配置这个值后，collapse 的`hide-arrow`将失效 | boolean | —      | false  |

## panel slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | panel 展开后的内容 |
| title   | 自定义 panel 标题  |
