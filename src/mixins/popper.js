import Vue from 'vue'
const isServer = Vue.prototype.$isServer

const Popper = isServer ? function () {} : require('popper.js/dist/umd/popper')

export default {
  model: {
    prop: 'value',
    event: 'on-input'
  },
  props: {
    reference: Object,
    popper: Object,
    placement: {
      type: String,
      default: 'bottom',
      validator(val) {
        return /^(top|bottom|left|right)(-start|-end)?$/g.test(val)
      }
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    offset: {
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default () {
        return {
          modifiers: {
            computeStyle: {
              gpuAcceleration: false
            },
            preventOverflow: {
              boundariesElement: 'window'
            }
          }
        }
      }
    }
  },
  data() {
    return {
      visible: this.value,
      actualPlacement: this.placement
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.visible = val
        this.$emit('on-input', val)
      }
    },
    visible(val) {
      if (val) {
        this.updatePopper()
        this.$emit('on-popper-show')
      } else {
        this.$emit('on-popper-hide')
      }
      this.$emit('on-input', val)
    }
  },
  methods: {
    createPopper() {
      if (isServer) return
      const options = this.options
      const popper = this.$refs.popper || this.popper
      const reference = this.$refs.reference || this.reference
      if (!popper || !reference) return
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy()
      }
      options.placement = this.placement

      if (!options.modifiers.offset) {
        options.modifiers.offset = {}
      }
      options.modifiers.offset.offset = this.offset
      options.onCreate = () => {
        this.$emit('on-popper-created', this)
      }
      options.onUpdate = (obj) => {
        this.$emit('on-popper-updated', this)
      }
      this.popperJS = new Popper(reference, popper, options)
    },
    updatePopper() {
      if (isServer) return
      this.popperJS ? this.popperJS.update() : this.createPopper()
    },
    doDestroy() {
      if (isServer) return
      if (this.visible) return
      this.popperJS.destroy()
      this.popperJS = null
    }
  },
  updated() {
    this.$nextTick(() => this.updatePopper())
  },
  beforeDestroy() {
    if (isServer) return
    if (this.popperJS) {
      this.popperJS.destroy()
    }
  }
}
