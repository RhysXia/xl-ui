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
        form(v-show="iconShow",action="https://codepen.io/pen/define",method="post",target="_blank")
          input(type="hidden",name="data",:value="codepenData")
          xl-button.demo-source__icon(native-type="submit",type="text",icon="code-working")

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
    },
    html() {
      const resourcesTpl =
        '<scr' +
        'ipt src="//unpkg.com/vue/dist/vue.js"></scr' +
        'ipt>' +
        '\n<scr' +
        `ipt src="//unpkg.com/xl-vision@${version}"></scr` +
        'ipt>'
      return `${resourcesTpl}\n<div id="app">\n${this.jsfiddle.html.trim()}\n</div>`
    },
    style() {
      return `@import url("//unpkg.com/xl-vision@${version}/styles/theme-default/lib/index.css");\n${(
        this.jsfiddle.style || ''
      ).trim()}\n`
    },
    script() {
      let jsTpl = (this.jsfiddle.script || '')
        .replace(/export default/, 'var Main =')
        .trim()
      return jsTpl
        ? jsTpl + "\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')"
        : "new Vue().$mount('#app')"
    },
    codepenData() {
      const data = {
        title: 'xl-vision demo',
        js: this.script,
        css: this.style,
        html: this.html,
        editors: '001'
      }
      return JSON.stringify(data)
    }
  },
  methods: {
    mouseleave() {
      this.iconShow = false
    },
    mouseenter() {
      this.iconShow = true
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
