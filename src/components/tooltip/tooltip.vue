<template lang="pug">
  Poptip(:dangerousHtml="dangerousHtml",:placement="placement",:pop-class="popClass",:content="content",:value="actualVisible",:transfer="transfer",:width="width",:padding="padding",trigger="custom",@on-click="_click",@on-mouseenter="_mouseenter",@on-mouseleave="_mouseleave")
    slot
</template>
<script>
import Poptip from '../poptip'

const name = 'xl-tooltip'
export default {
  name,
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
    width: {
      type: [String, Number, Object],
      default: () => ({
        min: 100
      })
    },
    padding: {
      type: String,
      default: '0.5em 1em'
    },
    delay: {
      type: Number,
      default: 0
    },
    always: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    popClass() {
      return `${name}__popper`
    },
    actualVisible() {
      if (this.disabled) {
        return false
      }
      if (this.always) {
        return true
      }
      return this.visible
    }
  },
  methods: {
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
