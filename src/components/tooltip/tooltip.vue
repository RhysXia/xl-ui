<template lang="pug">
  Popover(:placement="placement",:contentClass="contentClass",:arrowClassPrefix="arrowClassPrefix",:visible="actualVisible",:getPopupContainer="getPopupContainer",trigger="custom",@on-click="_click",@on-mouseenter="_mouseenter",@on-mouseleave="_mouseleave")
    slot
    div(slot="popup",:style="popupStyles")
      span(v-text="content",v-if="dangerousHtml")
      template(v-html="content",v-else)
</template>
<script>
import Popover from '../popover'

const name = 'xl-tooltip'
export default {
  name,
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    dangerousHtml: {
      type: Boolean,
      default: false
    },
    content: String,
    width: {
      type: [String, Number, Object],
      default: () => ({
        min: 0
      })
    },
    delay: {
      type: Number,
      default: 0
    },
    always: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: '0.5rem 0.5rem'
    }
  },
  data() {
    return {
      visible: false,
      getPopupContainer() {
        return document.body
      }
    }
  },
  computed: {
    popupStyles() {
      const styles = {
        padding: this.padding
      }
      const width = this.width
      if (typeof width === 'object') {
        if (width.min) {
          styles.minWidth = formatWidth(width.min)
        }
        if (width.max) {
          styles.maxWidth = formatWidth(width.max)
        } else {
          // 如果只有最小宽度，说明不希望换行
          styles.whiteSpace = 'nowrap'
        }
      } else {
        styles.width = formatWidth(width)
      }
      return styles
    },
    contentClass() {
      return `${name}__content`
    },
    arrowClassPrefix() {
      return `${name}__arrow`
    },
    actualVisible() {
      if (this.disabled) {
        return false
      }
      if (this.always) {
        return true
      }
      return this.visible
    }
  },
  methods: {
    _mouseleave() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this.visible = false
    },
    _mouseenter() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this._enterTimer = setTimeout(() => {
        this.visible = true
      }, this.delay)
    },
    _click() {
      this.visible = true
    }
  },
  components: {
    Popover
  }
}

const formatWidth = (width) => {
  if (typeof width === 'number') {
    return width + 'px'
  }
  return width
}
</script>
