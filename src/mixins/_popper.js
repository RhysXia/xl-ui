import {
  getPosition
} from '../../utils/element'
const name = 'xl-popup'
export default {
  name,
  props: {
    containerFn: {
      type: Function,
      default: () => document.body
    },
    placement: {
      type: String,
      default: 'top',
      validator(val) {
        return /^(top|bottom|left|right)(-start|-end)?$/g.test(val)
      }
    },
    justify: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      container: null,
      visible: false,
      referencePosition: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      popperPosition: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      containerPosition: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    }
  },
  computed: {
    actualPlacement() {
      const placement = this.placement
      if (!this.justify || this._checkPosition(placement)) {
        return placement
      }
      let order = ['top', 'bottom', 'left', 'right']
      order = order
    }
  },
  watch: {
    container(newVal, oldVal) {
      if (oldVal) {
        oldVal.removeChild(this.$ref.popper)
      }
      newVal.appendChild(this.$refs.popper)
      if (this.autoPosition) {
        this._updateContainer()
      }
    },
    containerFn(val) {
      this.container = val()
    }
  },
  methods: {
    update() {
      if (!this.visible) {
        return
      }
      this.$nextTick(() => {
        this._updatePosition()
      })
    },
    _updatePosition() {
      // reference
      let position = getPosition(this.$refs.reference)
      Object.keys(position).forEach(key => {
        this.referencePosition[key] = position[key]
      })
      // popper
      position = getPosition(this.$refs.popper)
      Object.keys(position).forEach(key => {
        this.popperPosition[key] = position[key]
      })
    },
    _updateContainer() {
      // container
      let position = getPosition(this.container)
      Object.keys(position).forEach(key => {
        this.containerPosition[key] = position[key]
      })
    },
    _checkPosition(placement) {
      const popperHeight = this.popperPosition.bottom - this.popperPosition.top
      const popperWidth = this.popperPosition.right - this.popperPosition.left
      if (placement.indexOf('top') !== -1) {
        return this.referencePosition.top - this.containerPosition.top > popperHeight
      }
      if (placement.indexOf('bottom') !== -1) {
        return this.containerPosition.bottom - this.referencePosition.bottom > popperHeight
      }
      if (placement.indexOf('left') !== -1) {
        return this.referencePosition.left - this.containerPosition.left > popperWidth
      }
      return this.containerPosition.right - this.popperPosition.right > popperWidth
    }
  },
  mounted() {
    this.container = this.containerFn()
    this.update()
  },
  updated() {
    this.update()
  }
}
