import {getPosition} from '@/utils/dom'

const name = 'xl-popper'
export default {
  name,
  model: {
    prop: 'visible',
    event: 'on-change'
  },
  props: {
    placement: {
      default: 'bottom',
      validator(val) {
        return /^(top|bottom|left|right)(-start|-end)?$/g.test(val)
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    getPopperContainer: {
      type: Function,
      default: () => document.body
    }
  },
  data() {
    return {
      actualVisible: this.visible,
      referencePosition: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      popperPosition: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  },
  computed: {
    actualPlacement() {
      return this.placement
    },
    popperStyles() {
      const ret = {
        position: 'absolute',
        top: 0,
        left: 0
      }
      const placement = this.actualPlacement
      // const popper = this.$refs.popper
      // if (!popper) {
      //   return ret
      // }
      const refPos = this.referencePosition
      const popPos = this.popperPosition
      let left = 0
      let top = 0
      if (placement.indexOf('top') > -1 || placement.indexOf('bottom') > -1) {
        if (placement.indexOf('top') > -1) {
          top += refPos.top - popPos.bottom
        } else {
          top += refPos.bottom - popPos.top
        }
        if (placement.indexOf('-start') > -1) {
          left += refPos.left - popPos.left
        } else if (placement.indexOf('-end') > -1) {
          left += refPos.right - popPos.right
        } else {
          left += (refPos.right + refPos.left - popPos.right - popPos.left) / 2
        }
      } else {
        if (placement.indexOf('left') > -1) {
          left += refPos.left - popPos.right
        } else {
          left += refPos.right - popPos.left
        }
        if (placement.indexOf('-start') > -1) {
          top += refPos.top - popPos.top
        } else if (placement.indexOf('-end') > -1) {
          top += refPos.bottom - popPos.bottom
        } else {
          top += (refPos.bottom + refPos.top - popPos.bottom - popPos.top) / 2
        }
      }
      ret.left = Math.floor(left) + 'px'
      ret.top = Math.floor(top) + 'px'
      return ret
    }
  },
  watch: {
    visible(val) {
      this.actualVisible = val
    },
    actualVisible(val) {
      if (val) {
        this.updatePosition()
      }
      this.$emit('on-change', val)
    },
    getPopperContainer(val) {
      const popper = this.$refs.popper
      if (popper) {
        val().appendChild(popper)
        this.updatePosition()
      }
    }
  },
  methods: {
    _updateReferencePosition() {
      const pos = getPosition(this.$refs.reference)
      Object.keys(this.referencePosition).forEach(key => {
        this.referencePosition[key] = pos[key]
      })
    },
    _updatePopperPosition() {
      const pos = getPosition(this.$refs.popper)
      Object.keys(this.popperPosition).forEach(key => {
        this.popperPosition[key] = pos[key]
      })
    },
    updatePosition() {
      this._updateReferencePosition()
      this._updatePopperPosition()
    }
  },
  mounted() {
    // const container = this.getPopperContainer()
    // container.appendChild(this.$refs.popper)
    // if (this.actualVisible) {
    //   this.updatePosition()
    // }
  },
  render: function(h) {
    const popperStyles = this.popperStyles
    if (!this.actualPlacement) {
      popperStyles.display = 'none'
    }
    const popper = this.$slots.popper
    console.log(popper)
    return (<div>
      {this.$slots.default[0]}
    </div>)
  }
}
