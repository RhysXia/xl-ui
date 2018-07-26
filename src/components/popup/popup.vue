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
import { getOffset, containClass } from '../../utils/element'
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
      const { top, left, right, bottom } = getOffset(
        this.$el,
        this.$refs['content-wrapper']
      )
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
    },
    _addEvent() {
      this._resizeEvent = () => {
        cancelAnimationFrame(this._timer)
        this._timer = requestAnimationFrame(this._setPosition)
      }
      window.addEventListener('resize', this._resizeEvent)
      const obersver = new MutationObserver((records, obersve) => {
        const ele = records[0].target
        let temp = ele
        while (temp) {
          if (containClass(temp, `${name}__content--wrapper`)) {
            return
          }
          temp = temp.parentElement
        }
        this._resizeEvent()
      })

      this._obersver = obersver

      obersver.observe(document.body, {
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'width', 'height']
      })
    },
    _removeEvent() {
      window.removeEventListener('resize', this._resizeEvent)
      this._obersver.disconnect()
      this._obersver = null
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
    this._addEvent()
  },
  beforeDestroy() {
    this.container.removeChild(this.$refs['content-wrapper'])
    this._removeEvent()
  },
  // keep-alive
  deactivated() {
    this.container.removeChild(this.$refs['content-wrapper'])
    this._removeEvent()
  },
  activated() {
    this.container.appendChild(this.$refs['content-wrapper'])
    this._addEvent()
  }
}
</script>
