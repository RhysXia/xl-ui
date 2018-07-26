<template lang="pug">
  div(:class="classes")
    slot
    div(ref='content',:class="contentClasses")
      slot(name="popup")
</template>
<script>
import {
  requestAnimationFrame,
  cancelAnimationFrame
} from '../../utils/requestAnimationFrame'
import { getOffset } from '../../utils/element'
import { oneOf } from '../../utils/array'
const name = 'xl-popup'
export default {
  name,
  props: {
    popupContainer: {
      type: Function,
      default: () => document.body
    },
    placement: {
      type: String,
      default: 'top',
      validator(val) {
        return oneOf(
          [
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end'
          ],
          val
        )
      }
    }
  },
  data() {
    return {
      container: null,
      top:0,
      left:0
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    },
    contentClasses() {
      return `${name}__content`
    }
  },
  methods: {
    _setPosition() {
      if (!this.$el) {
        return
      }
      const contentStyles = {
      }
      const {top, left, right, bottom} = getOffset(this.$el, this.container)
      const rect = this.$refs.content.getBoundingClientRect()
      const offsetWidth = rect.width
      const offsetHeight = rect.height
      if (this.placement === 'top-start') {
        contentStyles.top = top - offsetHeight + 'px'
        contentStyles.left = left + 'px'
      } else if (this.placement === 'top') {
        contentStyles.top = top - offsetHeight + 'px'
        contentStyles.left = (left + right - offsetWidth) / 2 + 'px'
      } else if (this.placement === 'top-end') {
        contentStyles.top = top - offsetHeight + 'px'
        contentStyles.left = right - offsetWidth + 'px'
      } else if (this.placement === 'left-start') {
        contentStyles.left = left - offsetWidth + 'px'
        contentStyles.top = top + 'px'
      } else if (this.placement === 'left') {
        contentStyles.left = left - offsetWidth + 'px'
        contentStyles.top = (top + bottom - offsetHeight) / 2 + 'px'
      } else if (this.placement === 'left-end') {
        contentStyles.left = left - offsetWidth + 'px'
        contentStyles.top = bottom - offsetHeight + 'px'
      } else if (this.placement === 'right-start') {
        contentStyles.left = right + 'px'
        contentStyles.top = top + 'px'
      } else if (this.placement === 'right') {
        contentStyles.left = right + 'px'
        contentStyles.top = (top + bottom - offsetHeight) / 2 + 'px'
      } else if (this.placement === 'right-end') {
        contentStyles.left = right + 'px'
        contentStyles.top = bottom - offsetHeight + 'px'
      } else if (this.placement === 'bottom-start') {
        contentStyles.top = bottom + 'px'
        contentStyles.left = left + 'px'
      } else if (this.placement === 'bottom') {
        contentStyles.top = bottom + 'px'
        contentStyles.left = (left + right - offsetWidth) / 2 + 'px'
      } else if (this.placement === 'bottom-end') {
        contentStyles.top = bottom + 'px'
        contentStyles.left = right - offsetWidth + 'px'
      }
      let style = ''
      Object.keys(contentStyles).forEach(key => {
        style += `${key}:${contentStyles[key]};`
      })
      this.$refs.content.style = style
    }
  },
  updated() {
    this.$nextTick(() => {
      this._setPosition()
    })
  },
  mounted() {
    // 获取当前元素位置
    this.container = this.popupContainer()
    this.container.appendChild(this.$refs.content)
    this.$nextTick(() => {
      this._setPosition()
    })
    this._resizeEvent = () => {
      const oldTimer = this._timer
      this._timer = requestAnimationFrame(() => {
        cancelAnimationFrame(oldTimer)
        this.$nextTick(() => {
          this._setPosition()
        })
      })
    }
    window.addEventListener('resize', this._resizeEvent)
  },
  beforeDestroy() {
    this.container.removeChild(this.$refs.content)
    clearTimeout(this._resizeTimer)
    window.removeEventListener('resize', this._resizeEvent)
  },
  // keep-alive
  deactivated() {
    this.container.removeChild(this.$refs.content)
  },
  activated() {
    this.container.appendChild(this.$refs.content)
  }
}
</script>
