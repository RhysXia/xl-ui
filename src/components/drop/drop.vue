<template lang="pug">
  div(:class="classes")
    slot
    div(v-show="visiable && !isHidden",:class="contentClasses",ref='content')
      slot(name="drop")
</template>
<script>
import { getOffset } from '@/utils/utils.js'
const name = 'xl-drop'
export default {
  name,
  props: {
    value: {
      type: Boolean,
      default: false
    },
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
      default: 200
    }
  },
  data() {
    return {
      visiable: this.value,
      container: null,
      isHidden: false
    }
  },
  watch: {
    value(val) {
      this.visiable = val
    },
    visiable(val) {
      this.$emit('input', val)
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    },
    contentClasses() {
      const arr = [`${name}__content`, `${name}__content--${this.placement}`]
      return arr
    }
  },
  methods: {
    _setPosition() {
      if (this.isHidden) {
        return
      }
      if (!this.$el) {
        return
      }
      if (!this.visiable) {
        this.$refs.content.style = 'display:none;'
        return
      }
      let contentStyles = {}
      const { bottom, left, right, top } = getOffset(this.$el, this.container)
      if (this.placement === 'top-start' || this.placement === 'left-start') {
        contentStyles = {
          position: this.position,
          left: left + 'px',
          top: top + 'px'
        }
      } else if (this.placement === 'top') {
        contentStyles = {
          position: this.position,
          left: (left + right) / 2 + 'px',
          top: top + 'px'
        }
      } else if (
        this.placement === 'top-end' ||
        this.placement === 'right-start'
      ) {
        contentStyles = {
          position: this.position,
          left: right + 'px',
          top: top + 'px'
        }
      } else if (this.placement === 'left') {
        contentStyles = {
          position: this.position,
          left: left + 'px',
          top: (top + bottom) / 2 + 'px'
        }
      } else if (
        this.placement === 'left-end' ||
        this.placement === 'bottom-start'
      ) {
        contentStyles = {
          position: this.position,
          left: left + 'px',
          top: bottom + 'px'
        }
      } else if (this.placement === 'right') {
        contentStyles = {
          position: this.position,
          left: right + 'px',
          top: (top + bottom) / 2 + 'px'
        }
      } else if (
        this.placement === 'right-end' ||
        this.placement === 'bottom-end'
      ) {
        contentStyles = {
          position: this.position,
          left: right + 'px',
          top: bottom + 'px'
        }
      } else if (this.placement === 'bottom') {
        contentStyles = {
          position: this.position,
          left: (left + right) / 2 + 'px',
          top: bottom + 'px'
        }
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
  activated() {
    this.isHidden = false
  },
  deactivated() {
    this.isHidden = true
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-drop {
  position: relative;
  display: inline-block;

  &__content--top-start,
  &__content--right-end {
    transform: translateY(-100%);
  }
  &__content--top {
    transform: translate(-50%, -100%);
  }
  &__content--top-end,
  &__content--left-end {
    transform: translate(-100%, -100%);
  }
  &__content--left-start,
  &__content--bottom-end {
    transform: translateX(-100%);
  }
  &__content--left {
    transform: translate(-100%, -50%);
  }
  &__content--right {
    transform: translateY(-50%);
  }
  &__content--bottom {
    transform: translateX(-50%);
  }
}
</style>
