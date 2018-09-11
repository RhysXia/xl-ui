<template lang="pug">
  Popover(:transitionName="transitionName",:placement="placement",:contentClass="contentClass",:arrowClassPrefix="arrowClassPrefix",:visible="actualVisible",trigger="custom",@on-clickoutside="_clickoutside",@on-click="_click",@on-mouseenter="_mouseenter",@on-mouseleave="_mouseleave")
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
    trigger: {
      default: 'hover',
      validator(val) {
        return oneOf(['hover', 'click', 'custom'], val)
      }
    },
    placement: {
      default: 'bottom',
      validator(val) {
        return /^(left|right|top|bottom)$/g.test(val)
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
    transitionName() {
      let placement = this.placement.split('-')[0]
      placement = placement === 'top' ? 'bottom' : 'top'
      return `xl-slide-${placement}`
    },
    contentClass() {
      return `${name}__popper`
    },
    arrowClassPrefix() {
      return `${name}__arrow`
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
