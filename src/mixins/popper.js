import Vue from 'vue'
const isServer = Vue.prototype.$isServer

const Popper = isServer ? function () { } : require('popper.js/dist/umd/popper')

export default {
  model: {
    prop: 'value',
    event: 'on-change'
  },
  props: {
    reference: Object,
    popper: Object,
    placement: {
      default: 'bottom',
      validator(val) {
        return /^(auto|top|bottom|left|right)(-start|-end)?$/g.test(val)
      }
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
      default() {
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
        this.$emit('on-change', val)
      }
    },
    visible(val) {
      if (val) {
        this.updatePopper()
        this.popperJS && this.popperJS.enableEventListeners()
        this.$emit('on-popper-show')
      } else {
        this.popperJS && this.popperJS.disableEventListeners()
        this.$emit('on-popper-hide')
      }
      this.$emit('on-change', val)
    }
  },
  methods: {
    createPopper() {
      const defaultOptions = {
        placement: this.placement,
        eventsEnabled: this.visible
      }
      if (isServer) return
      const popper = this.$refs.popper || this.popper
      const reference = this.$refs.reference || this.reference
      if (!popper || !reference) return
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy()
      }

      const options = Object.assign(this.options, defaultOptions)

      if (!options.modifiers.offset) {
        options.modifiers.offset = {}
      }
      options.modifiers.offset.offset = this.offset

      options.onCreate = (obj) => {
        this.actualPlacement = obj.placement
        this.$emit('on-popper-created', this)
      }
      options.onUpdate = (obj) => {
        this.actualPlacement = obj.placement
        this.$emit('on-popper-updated', this)
      }
      this.popperJS = new Popper(reference, popper, options)
    },
    updatePopper() {
      if (isServer || !this.visible) return
      if (this.popperJS) {
        this.popperJS.scheduleUpdate()
      } else {
        this.createPopper()
      }
    },
    doDestroy() {
      if (isServer) return
      this.popperJS.destroy()
      this.popperJS = null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updatePopper()
    })
  },
  beforeDestroy() {
    if (isServer) return
    if (this.popperJS) {
      this.popperJS.destroy()
    }
  }
}
