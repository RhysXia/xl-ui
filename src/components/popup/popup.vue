<template lang="pug">
  div(:class="classes")
    slot
    div(ref='content',:class="contentClasses")
      slot(name="popup")
</template>
<script>
import { getOffset } from '@/utils/utils.js'
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
        return [
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
        ].includes(val)
      }
    },
    position: {
      type: String,
      default: 'absolute'
    },
    renderDuration: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      container: null
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
        position: this.position
      }
      const { bottom, left, right, top } = getOffset(this.$el, this.container)
      const offsetWidth = this.$refs.content.offsetWidth
      const offsetHeight = this.$refs.content.offsetHeight
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
      clearTimeout(this._resizeTimer)
      this._resizeTimer = setTimeout(() => {
        this._setPosition()
      }, this.renderDuration)
    }
    window.addEventListener('resize', this._resizeEvent)
  },
  beforeDestory() {
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
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-popup {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  &__content {
    display: inline-block;
    box-sizing: border-box;
  }
}
</style>
