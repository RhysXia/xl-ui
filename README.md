# xl-vision

> A high quality UI components Library with Vue.js

## install

npm install xl-vision --save

## use

> import the lib in the entry(normally `main.js`)

```js
import XlVision from 'xl-vision'
import Vue from 'vue'
import 'xl-vision/styles/theme-default'

Vue.use(XlVision)

//...
```

> you can also import single component like below

```js
import { Button } from 'xl-vision'
import 'xl-vision/styles/theme-default/lib/button.css'

export default {
  components: {
    Button
  }
}
```
> all the components name can be see in [index.js](https://github.com/RhysXia/xl-vision/blob/master/src/index.js)

## docs

> if you want to learn more,you can see our [documents](https://rhysxia.github.io/xl-vision/)