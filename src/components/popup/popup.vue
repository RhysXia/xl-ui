<template lang="pug">
  div(:class="classes")
    slot
    div(ref='content-wrapper',:class="contentWrapperClasses")
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
      top: 0,
      left: 0
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    },
    contentClasses() {
      return `${name}__content`
    },
    contentWrapperClasses() {
      return `${name}__content--wrapper`
    }
  },
  methods: {
    _setPosition() {
      if (!this.$el) {
        return
      }
      const {top, left, right, bottom} = getOffset(this.$el, this.$refs['content-wrapper'])
      const rect = this.$refs.content.getBoundingClientRect()
      const offsetWidth = rect.width
      const offsetHeight = rect.height
      let toTop, toLeft
      if (this.placement === 'top-start') {
        toTop = top - offsetHeight
        toLeft = left
      } else if (this.placement === 'top') {
        toTop = top - offsetHeight
        toLeft = (left + right - offsetWidth) / 2
      } else if (this.placement === 'top-end') {
        toTop = top - offsetHeight
        toLeft = right - offsetWidth
      } else if (this.placement === 'left-start') {
        toLeft = left - offsetWidth
        toTop = top
      } else if (this.placement === 'left') {
        toLeft = left - offsetWidth
        toTop = (top + bottom - offsetHeight) / 2
      } else if (this.placement === 'left-end') {
        toLeft = left - offsetWidth
        toTop = bottom - offsetHeight
      } else if (this.placement === 'right-start') {
        toLeft = right
        toTop = top
      } else if (this.placement === 'right') {
        toLeft = right
        toTop = (top + bottom - offsetHeight) / 2
      } else if (this.placement === 'right-end') {
        toLeft = right
        toTop = bottom - offsetHeight
      } else if (this.placement === 'bottom-start') {
        toTop = bottom
        toLeft = left
      } else if (this.placement === 'bottom') {
        toTop = bottom
        toLeft = (left + right - offsetWidth) / 2
      } else if (this.placement === 'bottom-end') {
        toTop = bottom
        toLeft = right - offsetWidth
      }
      this.$refs.content.style = `left: ${toLeft}px;top: ${toTop}px`
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
    this.container.appendChild(this.$refs['content-wrapper'])
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
    this.container.removeChild(this.$refs['content-wrapper'])
    clearTimeout(this._resizeTimer)
    window.removeEventListener('resize', this._resizeEvent)
  },
  // keep-alive
  deactivated() {
    this.container.removeChild(this.$refs['content-wrapper'])
  },
  activated() {
    this.container.appendChild(this.$refs['content-wrapper'])
  }
}
</script>
