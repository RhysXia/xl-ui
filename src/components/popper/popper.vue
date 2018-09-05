<template lang="pug">
  div(:class="classes")
    div(ref="reference",:class="referenceClasses")
      slot
    div(ref="popup",:style="popupStyles",v-show="actualVisible")
      slot(name="popup")
</template>

<script>
import { getPosition, getPxNumber } from '@/utils/dom'
import { generateZIndex } from '@/utils/zIndex-manager'

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
    getPopupContainer: {
      type: Function,
      default: function() {
        return this.$el
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      actualVisible: this.visible,
      zIndex: generateZIndex(),
      popupContainer: null,
      referencePosition: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      popupPosition: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }
  },
  computed: {
    classes() {
      return name
    },
    referenceClasses() {
      return `${name}__reference`
    },
    actualPlacement() {
      return this.placement
    },
    popupStyles() {
      const ret = {
        position: 'absolute',
        zIndex: this.zIndex,
        display: 'inline-block'
      }

      const refPos = this.referencePosition
      const popPos = this.popupPosition

      let left = 0
      let top = 0
      const placement = this.actualPlacement
      if (placement.indexOf('top') > -1 || placement.indexOf('bottom') > -1) {
        if (placement.indexOf('top') > -1) {
          top = refPos.top - popPos.bottom
        } else {
          top = refPos.bottom - popPos.top
        }
        if (placement.indexOf('start') > -1) {
          left = refPos.left - popPos.left
        } else if (placement.indexOf('end') > -1) {
          left = refPos.right - popPos.right
        } else {
          left = (refPos.left + refPos.right - popPos.left - popPos.right) / 2
        }
      } else {
        if (placement.indexOf('left') > -1) {
          left = refPos.left - popPos.right
        } else {
          left = refPos.right - popPos.left
        }
        if (placement.indexOf('start') > -1) {
          top = refPos.top - popPos.top
        } else if (placement.indexOf('end') > -1) {
          top = refPos.bottom - popPos.bottom
        } else {
          top = (refPos.top + refPos.bottom - popPos.top - popPos.bottom) / 2
        }
      }
      ret.left = parseInt(left) + 'px'
      ret.top = parseInt(top) + 'px'
      return ret
    }
  },
  watch: {
    visible(val) {
      this.actualVisible = val
    },
    actualVisible(val) {
      if (val) {
        this.zIndex = generateZIndex()
        this.updatePosition()
      }
      this.$emit('on-change', val)
    },
    getPopupContainer(func) {
      this.popupContainer = func()
    },
    popupContainer(newVal, oldVal) {
      const popup = this.$refs.popup
      if (oldVal) {
        oldVal.removeChild(popup)
      }
      newVal.appendChild(popup)
      if (this.actualVisible) {
        this.updatePosition()
      }
    }
  },
  methods: {
    _updateReferencePosition() {
      const refPos = this.referencePosition
      const pos = getPosition(this.$refs.reference)
      Object.keys(refPos).forEach(key => {
        refPos[key] = pos[key]
      })
    },
    _updatePopupPosition() {
      const popEle = this.$refs.popup
      const popPos = this.popupPosition
      const pos = getPosition(popEle)
      const left = getPxNumber(popEle.style.left)
      const top = getPxNumber(popEle.style.top)
      Object.keys(popPos).forEach(key => {
        let sp = left
        if (key === 'top' || key === 'bottom') {
          sp = top
        }
        popPos[key] = pos[key] - sp
      })
    },
    updatePosition() {
      this.$nextTick(() => {
        this._updateReferencePosition()
        this._updatePopupPosition()
      })
    }
  },
  mounted() {
    this.popupContainer = this.getPopupContainer()
  }
}
</script>
