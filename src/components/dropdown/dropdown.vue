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
import { oneOf } from '../../utils/array'
import Popup from '../popup'
import clickoutside from '../../directives/clickoutside'
const name = 'xl-dropdown'
export default {
  name,
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
        return oneOf(['hover', 'click', 'custom'], val)
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
      visiable: this.value
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
      const flag = oneOf(
        [
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'right',
          'right-start'
        ],
        this.placement
      )
      if (flag) {
        return `${name}--slide-down`
      }
      return `${name}--slide-up`
    }
  },
  methods: {
    _clickHandler() {
      if (this.trigger === 'custom') {
        return
      }
      this.visiable = !this.visiable
    },
    _mouseenterHandler() {
      if (this.trigger === 'hover') {
        this.visiable = true
      }
    },
    _mouseleaveHandler(e) {
      if (this.trigger === 'hover') {
        this.visiable = false
      }
    },
    _clickoutside(e) {
      if (this.trigger === 'custom') {
        return
      }
      if (this.$refs.content.contains(e.target)) {
        return
      }
      this.visiable = false
    }
  },
  components: {
    Popup
  }
}
</script>
