<template lang="pug">
  div(:class="classes",v-clickoutside="_clickoutside",@mouseleave="_mouseleave",@mouseenter="_mouseenter")
    div(ref="reference",:class="refClasses",@click="_click")
      slot
    transition(:name="transitionName")
      div(v-show="visible",:class="popClasses",ref="popper",:style="popStyles",:data-transfer="transfer", v-transfer-dom="",@click="_transferClick",@mouseleave="_transferMouseleave",@mouseenter="_transferMouseenter")
        div(:class="arrowClasses",x-arrow,v-if="arrow")
        div(:class="bodyClasses",:style="bodyStyles")
          div(:class="titleClasses",v-if="this.$slots.title||title")
            slot(name="title")
              div(v-if="dangerousHtml",v-html="title")
              div(v-else,v-text="title")
          div(:class="contentClasses")
            slot(name="content")
              div(v-if="dangerousHtml",v-html="content")
              div(v-else,v-text="content")
</template>
<script>
import Popper from '@/mixins/popper'
import transferDom from '@/directives/transfer-dom'
import clickoutside from '@/directives/clickoutside'
import { oneOf } from '@/utils/array'
import { generateZIndex } from '@/utils/zIndex-manager'
const name = 'xl-poptip'
export default {
  name,
  mixins: [Popper],
  directives: {
    transferDom,
    clickoutside
  },
  props: {
    arrow: {
      type: Boolean,
      default: true
    },
    popClass: String,
    transfer: {
      type: Boolean,
      default: false
    },
    dangerousHtml: {
      type: Boolean,
      default: false
    },
    title: String,
    content: String,
    trigger: {
      default: 'hover',
      validator(val) {
        return oneOf(['hover', 'click', 'custom'], val)
      }
    },
    width: {
      type: [String, Number, Object],
      default: () => ({
        min: 0
      })
    },
    padding: {
      type: String,
      default: '0.5em 1em'
    },
    transitionName: {
      type: String,
      default: `${name}-fade`
    }
  },
  data() {
    return {
      zIndex: generateZIndex(),
      transferClicked: false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.zIndex = generateZIndex()
      }
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    },
    refClasses() {
      return `${name}__ref`
    },
    popClasses() {
      const arr = [`${name}__popper`]
      if (this.popClass) {
        arr.push(this.popClass)
      }
      return arr
    },
    arrowClasses() {
      return `${name}__popper__arrow`
    },
    contentClasses() {
      return `${name}__popper__content`
    },
    titleClasses() {
      return `${name}__popper__title`
    },
    bodyClasses() {
      return `${name}__popper__body`
    },
    popStyles() {
      const style = {
        zIndex: this.zIndex
      }
      if (!this.arrow) {
        style.paddingTop = 0
      }
      return style
    },
    bodyStyles() {
      const styles = {
        padding: this.padding
      }
      const width = this.width
      if (typeof width === 'object') {
        if (width.min) {
          styles.minWidth = this._formatWidth(width.min)
        }
        if (width.max) {
          styles.maxWidth = this._formatWidth(width.max)
        } else {
          // 如果只有最小宽度，说明不希望换行
          styles.whiteSpace = 'nowrap'
        }
      } else {
        styles.width = this._formatWidth(width)
      }
      return styles
    }
  },
  methods: {
    _formatWidth(width) {
      if (typeof width === 'number') {
        return width + 'px'
      }
      return width
    },
    _clickoutside(e) {
      if (this.transferClicked) {
        this.transferClicked = false
        return
      }
      this.$emit('on-clickoutside', e)
      if (this.trigger === 'custom') {
        return
      }
      this.visible = false
    },
    _mouseleave() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this._enterTimer = setTimeout(() => {
        if (this.trigger === 'hover') {
          this.visible = false
        }
        this.$emit('on-mouseleave')
      }, 100)
    },
    _mouseenter() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this._enterTimer = setTimeout(() => {
        if (this.trigger === 'hover') {
          this.visible = true
        }
        this.$emit('on-mouseenter')
      }, 100)
    },
    _transferMouseleave() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      if (!this.transfer) {
        return
      }
      this._enterTimer = setTimeout(() => {
        if (this.trigger === 'hover') {
          this.visible = false
        }
      }, 100)
    },
    _transferMouseenter() {
      this._enterTimer = setTimeout(() => {
        if (this.trigger === 'hover') {
          this.visible = true
        }
      }, 100)
    },
    _click() {
      this.$emit('on-click')
      if (this.trigger === 'custom') {
        return
      }
      this.visible = true
    },
    _transferClick() {
      if (this.transfer) {
        this.transferClicked = true
      }
    }
  },
  mounted() {
    this.$nextTick(() => this.updatePopper())
  }
}
</script>
