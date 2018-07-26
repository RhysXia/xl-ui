# 安装

## NPM安装

```cmd
npm install xl-vision --save
```

## 直接页面使用
将dist下的xl-vision.js加入的页面，同时引入样式文件即可使用

```html
<html>
    <head>
        <meta charset="utf-8">
        <title>xl-vision example</title>
        <script src="http://vuejs.org/js/vue.min.js"></script>
        <!-- import stylesheet -->
        <link rel="stylesheet" href="path/to/xl-vision/styles/theme-default/lib/index.min.css">
        <!-- import xl-vision -->
        <script src="path/to/xl-visions/dist/xl-vision.min.js"></script>
    </head>
    <body>
        <div id='app'>
            <XlButton @on-click='click'>Click me!</XlButton>
        </div>
        <script>
            new Vue({
                el: '#app',
                methods: {
                    click: function () {
                        alert('you clicked me!!!')
                    }
                }
            })
        </script>
    </body>
</html>

```
