# 快速上手

## 引入 xl-vision

一般在 webpack 入门页面`main.js`中如下配置

```js
import Vue from 'vue'
import App from 'components/app.vue'
import XlVision from 'xl-vision'
import 'xl-vision/styles/theme-default'

Vue.use(XlVision)

//...
```

## 按需引入

```js
import Vue from 'vue'
import App from 'components/app.vue'
import { Button } from 'xl-vision'
import 'xl-vision/styles/theme-default/lib/button.css'

export default {
  components: {
    Button
  }
}
```
