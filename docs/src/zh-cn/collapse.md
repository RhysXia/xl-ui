# Collapse 折叠面板

将内容区域折叠/展开

## 基础用法

基础的按钮用法

::: demo 基本用法

```html
<xl-collapse>
    <xl-panel title="史蒂夫·乔布斯">
        <p>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
    </xl-panel>
    <xl-panel title=" 斯蒂夫·盖瑞·沃兹尼亚克">
        <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
    </xl-panel>
    <xl-panel title=" 乔纳森·伊夫">
        <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
    </xl-panel>
</xl-collapse>
```
:::

## button 属性

| 参数        | 说明           | 类型    | 可选值                                                      | 默认值  |
| ----------- | -------------- | ------- | ----------------------------------------------------------- | ------- |
| type        | 类型           | string  | default / primary / success / warning / error / info / text | default |
| plain       | 是否朴素按钮   | boolean | —                                                           | false   |
| round       | 是否圆形按钮   | boolean | —                                                           | false   |
| dash       | 是否边框为虚线（在`plain`模式下使用，否则可能看不到效果）   | boolean | —                                                           | false   |
| loading     | 是否加载中状态 | boolean | —                                                           | false   |
| disabled    | 是否禁用状态   | boolean | —                                                           | false   |
| icon        | 图标类名       | string  | —                                                           | —       |
| native-type | 原生 type 属性 | string  | button / submit / reset                                     | button  |

## button 方法

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| focus  | 使 button 获取焦点 | -    |

## button 事件

| 事件名 | 说明     | 参数           |
| ------ | -------- | -------------- |
| on-click  | 点击事件 | 原生事件对象 e |

## buttin group 属性

| 参数     | 说明                   | 类型    | 可选值 | 默认值 |
| -------- | ---------------------- | ------- | ------ | ------ |
| vertical | 是否是竖直方向的按钮组 | boolean | -      | false  |
