<template lang="pug">
  .demo-block
    .demo-code
      slot
    .demo-desc
      slot(name='desc')
      xl-icon.demo-desc__icon(:style='iconStyle',type='android-arrow-dropup-circle',@click='expand=!expand')
    .demo-source(v-show='expand',@mouseenter="mouseenter",@mouseleave="mouseleave")
      slot(name="source")
      transition(name="icon-fade")
        xl-icon.demo-source__icon(v-show="iconShow",type="code-working",@click="jsfiddleClick")

</template>
<script>
import { version } from '@'

export default {
  name: 'demo-block',
  props: {
    jsfiddle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      expand: false,
      iconShow: false
    }
  },
  computed: {
    iconStyle() {
      return this.expand
        ? { transform: 'rotate(0deg)' }
        : { transform: 'rotate(180deg)' }
    }
  },
  methods: {
    mouseleave() {
      this.iconShow = false
    },
    mouseenter() {
      this.iconShow = true
    },
    jsfiddleClick() {
      const { script, html, style } = this.jsfiddle
      const resourcesTpl = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>' +
        '\n<scr' + `ipt src="//unpkg.com/xl-vision@${version}/dist/xl-vision.min.js"></scr` + 'ipt>'
      let jsTpl = (script || '').replace(/export default/, 'var Main =').trim()
      let htmlTpl = `${resourcesTpl}\n<div id="app">\n${html.trim()}\n</div>`
      let cssTpl = `@import url("//unpkg.com/xl-vision@${version}/styles/theme-default/lib/index.css");\n${(
        style || ''
      ).trim()}\n`
      jsTpl = jsTpl
        ? jsTpl + "\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')"
        : "new Vue().$mount('#app')"
      const data = {
        js: jsTpl,
        css: cssTpl,
        html: htmlTpl,
        panel_js: 3,
        panel_css: 1
      }
      const form =
        document.getElementById('fiddle-form') || document.createElement('form')
      form.innerHTML = ''
      const node = document.createElement('textarea')
      form.method = 'post'
      form.action = 'https://jsfiddle.net/api/post/library/pure/'
      form.target = '_blank'
      for (let name in data) {
        node.name = name
        node.value = data[name].toString()
        form.appendChild(node.cloneNode())
      }
      form.setAttribute('id', 'fiddle-form')
      form.style.display = 'none'
      document.body.appendChild(form)
      form.submit()
    }
  }
}
</script>
<style lang="scss">
@import '@docs/style/variables.scss';
.demo-block {
  border: 1px solid $--border-color;
  font-size: 1em;
  transition: box-shadow $--transition-time ease-in-out;
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  &:hover {
    box-shadow: 0 0 0.5em $--border-color;
  }
  .demo-code {
    padding: 1em;
    border-bottom: 1px solid $--border-color;
  }
  .demo-desc {
    position: relative;
    padding: 1em 3em 1em 1em;
    .demo-desc__icon {
      font-size: 2.5em;
      right: 0.3em;
      top: 0.25em;
      transition: transform $--transition-time ease-in-out;
    }
    p {
      margin: 0;
      padding: 0;
      line-height: 2;
    }
    code {
      background-color: #e6effb;
      display: inline-block;
      margin: 0 0.2em;
      padding: 0.1em 0.4em;
      height: 1.1em;
      line-height: 1.1em;
    }
  }
  .demo-source {
    position: relative;
    border-top: 1px solid $--border-color;
    pre {
      margin: 0;
    }
    .demo-source__icon {
      font-size: 1.5em;
      right: 0.3em;
      top: 0.3em;
      padding: 0.5em;
      &:hover {
        color: $--link-color;
      }
    }
  }

  .demo-desc__icon,
  .demo-source__icon {
    position: absolute;
    display: block;
    cursor: pointer;
    color: #888;
  }

  .icon-fade-enter-active,
  .icon-fade-leave-active {
    transition: opacity $--transition-time ease-in-out;
  }
  .icon-fade-enter,
  .icon-fade-leave-to {
    opacity: 0;
  }
  .icon-fade-enter-to,
  .icon-fade-leave {
    opacity: 1;
  }
}
</style>
