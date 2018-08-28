<template lang="pug">
    div(:class="classes",@mouseenter="_mouseenter",@mouseleave="_mouseleave",@click="_click",v-clickoutside="_clickoutside")
      div(:class="refClasses",ref="reference")
        slot
      transition(:name="transitionName")
        div(:class="popClasses",ref="popper",v-show="visible",)
          slot(name="dropdown")
</template>
<script>
import popper from '@/mixins/popper'
import clickoutside from '@/directives/clickoutside'
import { oneOf } from '@/utils/array'
const name = 'xl-dropdown'
export default {
  name,
  mixins: [popper],
  directives: {
    clickoutside
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
    hideOnClick: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    transitionName() {
      const placement = this.actualPlacement
      let direction = placement.split('-')[0]
      direction =
        direction === 'left'
          ? 'right'
          : direction === 'right'
            ? 'left'
            : direction === 'top' ? 'bottom' : 'top'
      return `xl-slide-${direction}`
    },
    classes() {
      const arr = [name]
      return arr
    },
    refClasses() {
      const arr = [`${name}__ref`]
      return arr
    },
    popClasses() {
      const arr = [`${name}__popper`]
      return arr
    }
  },
  methods: {
    _mouseenter() {
      if (this.trigger === 'hover') {
        this.visible = true
      }
    },
    _mouseleave() {
      if (this.trigger === 'hover') {
        this.visible = false
      }
    },
    _click() {
      if (this.trigger === 'click') {
        this.visible = true
      }
    },
    _clickoutside() {
      if (this.trigger === 'click') {
        this.visible = false
      }
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>
