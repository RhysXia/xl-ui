<template lang="pug">
  Popover(:arrowShow="arrowShow",:class="classes",padding="0",:transitionName="transitionName",:placement="placement",:visible="actualVisible",trigger="custom",@on-clickoutside="_clickoutside",@on-click="_click",@on-mouseenter="_mouseenter",@on-mouseleave="_mouseleave")
    div(:class="refClasses")
      slot
    div(slot="popup")
      slot(name="dropdown")
</template>
<script>
import Popover from '../popover'
import {oneOf} from '@/utils/array'

const name = 'xl-dropdown'
export default {
  name,
  model: {
    prop: 'visible',
    event: 'on-change'
  },
  provide() {
    return {
      xlDropdown: this
    }
  },
  props: {
    arrowShow: {
      type: Boolean,
      default: true
    },
    hideOnClick: {
      type: Boolean,
      default: false
    },
    trigger: {
      default: 'hover',
      validator(val) {
        return oneOf(['hover', 'click', 'custom'], val)
      }
    },
    placement: {
      default: 'bottom',
      validator(val) {
        return /^(left|right|top|bottom)(-start|-end)?$/g.test(val)
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      actualVisible: this.visible
    }
  },
  computed: {
    classes() {
      return name
    },
    refClasses() {
      return `${name}__ref`
    },
    transitionName() {
      const map = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      }
      let placement = this.placement.split('-')[0]
      return `xl-slide-${map[placement]}`
    }
  },
  watch: {
    visible(val) {
      this.actualVisible = val
    },
    actualVisible(val) {
      this.$emit('on-change', val)
    }
  },
  methods: {
    _mouseleave() {
      if (this.trigger === 'hover') {
        this.actualVisible = false
      }
    },
    _mouseenter() {
      if (this.trigger === 'hover') {
        this.actualVisible = true
      }
    },
    _click() {
      if (this.trigger === 'click') {
        this.actualVisible = true
      }
    },
    _clickoutside() {
      if (this.trigger === 'click') {
        this.actualVisible = false
      }
    }
  },
  components: {
    Popover
  }
}
</script>
