<template lang="pug">
  div(:class="classes",@mouseenter="_mouseenter",@mouseleave="_mouseleave")
    div(:class="headerClasses",:style="headerStyle",v-if="this.$slots.title||title||this.$slots.extra")
      div(:class="titleClasses",v-if="this.$slots.title||title")
        slot(name="title") {{title}}
      div(:class="extraClasses",v-if="this.$slots.extra")
        slot(name="extra")
    div(:class="bodyClasses",:style="bodyStyle")
      slot
    div(:class="footerClasses",:style="footerStyle",v-if="this.$slots.footer")
      slot(name="footer")
</template>
<script>
import {oneOf} from '@/utils/array'
const name = 'xl-card'
export default {
  name,
  props: {
    title: {
      type: String
    },
    border: {
      type: Boolean,
      default: true
    },
    shadow: {
      default: 'never',
      validator(val) {
        return oneOf(['never', 'hover', 'always'], val)
      }
    },
    headerStyle: {
      type: Object,
      default: () => ({})
    },
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    footerStyle: {
      type: Object,
      default: () => ({})
    },
    headerClass: {
      type: String
    },
    bodyClass: {
      type: String
    },
    footerClass: {
      type: String
    }
  },
  data() {
    return {
      isHover: false
    }
  },
  computed: {
    isShadow() {
      const shadow = this.shadow
      if (shadow === 'never') {
        return false
      }
      if (shadow === 'hover') {
        return this.isHover
      }
      return true
    },
    classes() {
      const arr = [name]
      if (this.border) {
        arr.push(`${name}--border`)
      }
      if (this.isShadow) {
        arr.push(`${name}--shadow`)
      }
      return arr
    },
    headerClasses() {
      const arr = [`${name}__header`]
      if (this.headerClass) {
        arr.push(this.headerClass)
      }
      return arr
    },
    titleClasses() {
      const arr = [`${name}__header__title`]
      return arr
    },
    extraClasses() {
      const arr = [`${name}__header__extra`]
      return arr
    },
    bodyClasses() {
      const arr = [`${name}__body`]
      if (this.bodyClass) {
        arr.push(this.bodyClass)
      }
      return arr
    },
    footerClasses() {
      const arr = [`${name}__footer`]
      if (this.bodyClass) {
        arr.push(this.footerClass)
      }
      return arr
    }
  },
  methods: {
    _mouseenter() {
      this.isHover = true
    },
    _mouseleave() {
      this.isHover = false
    }
  }
}
</script>
