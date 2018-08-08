<template lang="pug">
  Poptip(:dangerousHtml="dangerousHtml",:placement="placement",:pop-class="popClass",:content="content",v-model="visible",:transfer="transfer",:width="width",:padding="padding",trigger="custom",@on-click="_click",@on-clickoutside="_clickoutside",@on-mouseenter="_mouseenter",@on-mouseleave="_mouseleave")
    slot
</template>
<script>
import Poptip from '../poptip'
import clickoutside from '../../directives/clickoutside'
import { oneOf } from '../../utils/array'

const name = 'xl-tooltip'
export default {
  name,
  directives: {
    clickoutside
  },
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    dangerousHtml: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: false
    },
    content: String,
    trigger: {
      default: 'hover',
      validator(val) {
        return oneOf(['hover', 'click'], val)
      }
    },
    width: {
      type: [String, Number, Object],
      default: () => ({
        min: 100,
        max: 300
      })
    },
    padding: {
      type: String,
      default: '0.5em 1em'
    }
  },
  data() {
    return {
      visible: false,
      transferClicked: false
    }
  },
  computed: {
    popClass() {
      return `${name}__popper`
    }
  },
  methods: {
    _clickoutside(e) {
      this.visible = false
    },
    _mouseleave() {
      if (this.trigger !== 'hover') {
        return
      }
      this.visible = false
    },
    _mouseenter() {
      if (this.trigger !== 'hover') {
        return
      }
      this.visible = true
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
