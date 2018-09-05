<template lang="pug">
  div(:class="classes")
    div(ref="reference",:class="referenceClasses")
      slot
    div(ref="popup",:style="popupStyles",v-show="actualVisible")
      slot(name="popup")
</template>

<script>
import { getPosition } from '@/utils/dom'
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
      originPopupPosition: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      arrowSize: {
        width: 0,
        height: 0
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
    destPopupPosition() {
      const refPos = this.referencePosition
      const popPos = this.originPopupPosition
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
      let right = left + popPos.right - popPos.left
      let bottom = top + popPos.bottom - popPos.top
      return {
        left,
        top,
        right,
        bottom
      }
    },
    arrowPosition() {
      let left = 0
      let top = 0

      return {
        left,
        top
      }
    },
    popupStyles() {
      return {
        position: 'absolute',
        zIndex: this.zIndex,
        left: this.destPopupPosition.left + 'px',
        top: this.destPopupPosition.top + 'px'
      }
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
        refPos[key] = Math.floor(pos[key])
      })
    },
    _updateArrowSize() {
      if (!this.$slots.arrow) {
        return
      }
      const size = this.arrowSize
      const pos = getPosition(this.$slots.arrow[0].elm)
      size.width = pos.right - pos.left
      size.height = pos.bottom - pos.top
    },
    _updateOriginPopupPosition() {
      const popEle = this.$refs.popup
      const popPos = this.originPopupPosition
      const left = this.destPopupPosition.left
      const top = this.destPopupPosition.top
      const pos = getPosition(popEle)
      Object.keys(popPos).forEach(key => {
        let sp = left
        if (key === 'top' || key === 'bottom') {
          sp = top
        }
        popPos[key] = Math.floor(pos[key] - sp)
      })
    },
    updatePosition() {
      this.$nextTick(() => {
        this._updateOriginPopupPosition()
        this._updateReferencePosition()
        this._updateArrowSize()
      })
    }
  },
  mounted() {
    this.popupContainer = this.getPopupContainer()
  }
}
</script>
