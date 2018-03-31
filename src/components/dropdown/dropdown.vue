<template lang="pug">
    div(:class="classes",@mouseenter="_mouseenterHandler",@mouseleave="_mouseleaveHandler",v-clickoutside='_clickoutside')
      Popup(:placement="placement",:popupContainer="popupContainer")
        div(@click='_clickHandler')
          slot
        div(@mouseenter="_mouseenterHandler",@mouseleave="_mouseleaveHandler",:style="contentStyles",slot="popup",ref='content')
          transition(:name='slideName')
            div(v-show="visiable")
              slot(name="dropdown")
</template>
<script>
import Popup from '../popup'
import clickoutside from '@/directives/clickoutside'
const name = 'xl-dropdown'
export default {
  name,
  inject: {
    xlDropdown: {
      default: null
    }
  },
  provide() {
    return {
      xlDropdown: this
    }
  },
  directives: {
    clickoutside
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    divide: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: 'hover',
      validator(val) {
        return ['hover', 'click', 'custom'].includes(val)
      }
    },
    popupContainer: {
      type: Function,
      default: () => document.body
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    space: {
      type: [Number, String],
      default: 0.5
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
    }
  },
  data() {
    return {
      visiable: this.value,
      isClicked: false
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
      return [name]
    },
    contentStyles() {
      const space =
        typeof this.space === 'number' ? this.space + 'em' : this.space
      if (this.placement.indexOf('top') !== -1) {
        return { paddingBottom: space }
      } else if (this.placement.indexOf('bottom') !== -1) {
        return { paddingTop: space }
      } else if (this.placement.indexOf('left') !== -1) {
        return { paddingRight: space }
      }
      return { paddingLeft: space }
    },
    slideName() {
      const flag = [
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'right',
        'right-start'
      ].includes(this.placement)
      if (flag) {
        return `${name}--slide-down`
      }
      return `${name}--slide-up`
    }
  },
  methods: {
    _keepVisiable() {
      this.$nextTick(() => {
        this.visiable = true
      })
      if (this.xlDropdown) {
        this.xlDropdown._keepVisiable()
      }
    },
    _hideIfNotThis(element) {
      if (this.$refs.content.contains(element)) {
        return
      }
      this.$nextTick(() => {
        this.visiable = false
      })
      if (this.xlDropdown) {
        this.xlDropdown._hideIfNotThis(element)
      }
    },
    _clickHandler() {
      if (this.trigger === 'custom') {
        return
      }
      this.isClicked = true
      this.visiable = true
    },
    _mouseenterHandler() {
      if (this.trigger === 'custom') {
        return
      }
      if (this.trigger === 'hover') {
        this.$nextTick(() => {
          this.visiable = true
        })
      }
    },
    _mouseleaveHandler(e) {
      if (this.trigger === 'custom') {
        return
      }
      if (this.isClicked) {
        return
      }
      // 判断是否进入子下拉菜单
      this.$nextTick(() => {
        this.visiable = false
      })
    },
    _clickoutside(e) {
      if (this.trigger === 'custom') {
        return
      }
      if (this.$refs.content.contains(e.target)) {
        return
      }
      this.visiable = false
      this.isClicked = false
    }
  },
  components: {
    Popup
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-dropdown {
  display: inline-block;
}
.#{$--clsPrefix}-dropdown--slide-up-enter-active,
.#{$--clsPrefix}-dropdown--slide-down-enter-active,
.#{$--clsPrefix}-dropdown--slide-up-leave-active,
.#{$--clsPrefix}-dropdown--slide-down-leave-active {
  transition: all $--transition-time ease-in-out;
}
.#{$--clsPrefix}-dropdown--slide-up-enter-active,
.#{$--clsPrefix}-dropdown--slide-up-leave-active {
  transform-origin: 0 100%;
}

.#{$--clsPrefix}-dropdown--slide-down-enter-active,
.#{$--clsPrefix}-dropdown--slide-down-leave-active {
  transform-origin: 0 0;
}

.#{$--clsPrefix}-dropdown--slide-up-enter,
.#{$--clsPrefix}-dropdown--slide-down-enter,
.#{$--clsPrefix}-dropdown--slide-up-leave-to,
.#{$--clsPrefix}-dropdown--slide-down-leave-to {
  opacity: 0;
  transform: scaleY(0.3);
}

.#{$--clsPrefix}-dropdown--slide-up-enter-to,
.#{$--clsPrefix}-dropdown--slide-down-enter-to,
.#{$--clsPrefix}-dropdown--slide-up-leave,
.#{$--clsPrefix}-dropdown--slide-down-leave {
  opacity: 1;
  transform: scaleY(1);
}
</style>
