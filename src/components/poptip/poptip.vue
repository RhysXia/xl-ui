<template lang="pug">
  div(:class="classes",v-clickoutside="_clickoutside",@mouseleave="_mouseleave",@mouseenter="_mouseenter")
    div(ref="reference",:class="refClasses",@click="_click")
      slot
    transition(:name="transitionName")
      div(v-show="visible",:class="popClasses",ref="popper",:style="{zIndex}",:data-transfer="transfer", v-transfer-dom="")
        div(:class="arrowClasses" x-arrow)
        div(:class="bodyClasses",:style="bodyStyles")
          div(:class="titleClasses",v-if="this.$slots.title||title")
            slot(name="title") {{title}}
          div(:class="contentClasses")
            slot(name="content") {{content}}
</template>
<script>
import Popper from '../../mixins/popper'
import transferDom from '../../directives/transfer-dom'
import clickoutside from '../../directives/clickoutside'
import { oneOf } from '../../utils/array'
import { generateZIndex } from '../../utils/zIndex-manager'
const name = 'xl-poptip'
export default {
  name,
  mixins: [Popper],
  directives: {
    transferDom,
    clickoutside
  },
  props: {
    transfer: {
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
        min: 150,
        max: 300
      })
    },
    padding: {
      type: String,
      default: '0.5em 1em'
    }
  },
  data() {
    return {
      zIndex: generateZIndex()
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
      return `${name}__popper`
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
    transitionName() {
      return `${name}-fade`
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
    _clickoutside() {
      this.visible = false
    },
    _mouseleave() {
      if (this.trigger === 'hover') {
        this.visible = false
      }
    },
    _mouseenter() {
      if (this.trigger === 'hover') {
        this.visible = true
      }
    },
    _click() {
      if (this.trigger === 'custom') {
        return
      }
      this.visible = true
    }
  },
  mounted() {
    this.$nextTick(() => this.updatePopper())
  }
}
</script>
