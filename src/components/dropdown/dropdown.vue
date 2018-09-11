<template lang="pug">
  Popover(ref="poptip",:transitionName="transitionName",:placement="placement",:pop-class="popClass",:value="actualVisible",:padding="padding",trigger="custom",@on-click="_click",@on-mouseenter="_mouseenter",@on-mouseleave="_mouseleave",@on-placement-change="_placementChange")
    slot
    div(slot="content")
      slot(name="dropdown")
</template>
<script>
import Poptip from '../popover'

const name = 'xl-dropdown'
export default {
  name,
  provide() {
    return {
      xlDropdown: this
    }
  },
  props: {
    placement: {
      default: 'bottom',
      validator(val) {
        return /^(top|bottom)(-start|-end)?$/g.test(val)
      }
    },
    padding: {
      type: String,
      default: '0.5em 1em'
    }
  },
  data() {
    return {
      visible: false,
      actualPlacement: this.placement
    }
  },
  computed: {
    transitionName() {
      let placement = this.actualPlacement.split('-')[0]
      placement = placement === 'top' ? 'bottom' : 'top'
      return `xl-slide-${placement}`
    },
    popClass() {
      return `${name}__popper`
    },
    actualVisible() {
      return this.visible
    }
  },
  methods: {
    _placementChange(val) {
      console.log(1)
      this.actualPlacement = val
    },
    _mouseleave() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this.visible = false
    },
    _mouseenter() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this._enterTimer = setTimeout(() => {
        this.visible = true
      }, this.delay)
    },
    _click() {
      this.visible = true
    }
  },
  components: {
    Poptip
  }
}
</script>
