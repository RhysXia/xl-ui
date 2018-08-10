<template lang="pug">
  .demo-block
    .demo-code
      slot
    .demo-desc
      slot(name='desc')
      xl-icon.demo-icon(:style='iconStyle',type='android-arrow-dropup-circle',@click='expand=!expand')
    .demo-source(v-show='expand')
      slot(name="source")
      .code-view

</template>
<script>
import {version} from '@'
console.log(version)

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
      expandDuration: 400,
      perHeight: 10
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
  }
}
</script>
<style lang="scss">
@import "@docs/style/variables.scss";
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
    margin-bottom: 1em;
  }
  .demo-bottom {
    padding: 0 1em;
    position: relative;
    .demo-desc {
      padding-right: 3em;
      min-height: 3em;
      p {
        line-height: 2em;
        margin: 0.5em 0;
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
    .demo-icon {
      position: absolute;
      right: 0.5em;
      top: 0;
      cursor: pointer;
      font-size: 2.5em;
      color: #888;
      transition: transform $--transition-time ease-in-out;
    }
  }
  .demo-source {
    border-top: 1px solid $--border-color;
    pre {
      margin: 0;
    }
  }
}
</style>
