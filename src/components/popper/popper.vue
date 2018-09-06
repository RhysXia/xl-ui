<template lang="pug">
  div(:class="classes")
    div(ref="reference",:class="referenceClasses")
      slot
    div(ref="popup",:style="popupStyles",v-show="actualVisible")
      div(ref="arrow",:style="arrowStyles",v-if="arrowShow")
        slot(name="arrow",:arrow="arrowStyles",:placement="actualPlacement")
          div(:class="arrowClasses")
      div(:style="contentStyles")
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
    },
    offset: {
      type: [String, Number],
      default: 0
    },
    arrowShow: {
      type: Boolean,
      default: true
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
    arrowClasses() {
      return [`${name}__arrow`, `${name}__arrow--${this.prefixPlacement}`]
    },
    actualPlacement() {
      return this.placement
    },
    prefixPlacement() {
      return this.actualPlacement.split('-')[0]
    },
    suffixPlacement() {
      const arr = this.actualPlacement.split('-')
      if (arr.length === 2) {
        return arr[1]
      }
      return ''
    },
    destPopupPosition() {
      const refPos = this.referencePosition
      const popPos = this.originPopupPosition
      let left = 0
      let top = 0
      const prefixPlacement = this.prefixPlacement
      const suffixPlacement = this.suffixPlacement

      if (prefixPlacement === 'top' || prefixPlacement === 'bottom') {
        if (prefixPlacement === 'top') {
          top = refPos.top - popPos.bottom
        } else {
          top = refPos.bottom - popPos.top
        }
        if (suffixPlacement === 'start') {
          left = refPos.left - popPos.left
        } else if (suffixPlacement === 'end') {
          left = refPos.right - popPos.right
        } else {
          left = (refPos.left + refPos.right - popPos.left - popPos.right) / 2
        }
      } else {
        if (prefixPlacement === 'left') {
          left = refPos.left - popPos.right
        } else {
          left = refPos.right - popPos.left
        }
        if (suffixPlacement === 'start') {
          top = refPos.top - popPos.top
        } else if (suffixPlacement === 'end') {
          top = refPos.bottom - popPos.bottom
        } else {
          top = (refPos.top + refPos.bottom - popPos.top - popPos.bottom) / 2
        }
      }
      left += popPos.left
      top += popPos.top
      let right = left + popPos.right - popPos.left
      let bottom = top + popPos.bottom - popPos.top
      return {
        left,
        top,
        right,
        bottom
      }
    },
    popupAbsPosition() {
      const ret = {}
      const destPos = this.destPopupPosition
      const originPos = this.originPopupPosition
      Object.keys(destPos).forEach(key => {
        ret[key] = destPos[key] - originPos[key]
      })
      return ret
    },
    popupStyles() {
      const map = {
        top: 'padding-bottom',
        bottom: 'padding-top',
        left: 'padding-right',
        right: 'padding-left'
      }
      const prefixPlacement = this.prefixPlacement
      let offset = this.offset
      if (typeof offset === 'number') {
        offset += 'px'
      }
      return {
        position: 'absolute',
        zIndex: this.zIndex,
        left: this.popupAbsPosition.left + 'px',
        top: this.popupAbsPosition.top + 'px',
        [map[prefixPlacement]]: offset
      }
    },
    arrowStyles() {
      const ret = {
        position: 'absolute',
        display: 'inline-block'
      }
      const prefixPlacement = this.prefixPlacement
      const refPos = this.referencePosition
      const popPos = this.destPopupPosition
      if (prefixPlacement === 'top' || prefixPlacement === 'bottom') {
        if (prefixPlacement === 'top') {
          ret.bottom = 0
        } else {
          ret.top = 0
        }
        ret.left = (Math.max(refPos.left, popPos.left) + Math.min(refPos.right, popPos.right) - this.arrowSize.width) / 2 - popPos.left + 'px'
      } else {
        if (prefixPlacement === 'left') {
          ret.right = 0
        } else {
          ret.left = 0
        }
        ret.top = (Math.max(refPos.top, popPos.top) + Math.min(refPos.bottom, popPos.bottom) - this.arrowSize.height) / 2 - popPos.top + 'px'
      }

      return ret
    },
    contentStyles() {
      const map1 = {
        top: 'padding-bottom',
        bottom: 'padding-top',
        left: 'padding-right',
        right: 'padding-left'
      }
      const map2 = {
        top: 'height',
        bottom: 'height',
        left: 'width',
        right: 'width'
      }
      const prefixPlacement = this.prefixPlacement
      return {
        boxSize: 'border-box',
        [map1[prefixPlacement]]: this.arrowSize[map2[prefixPlacement]] + 'px'
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
      if (!this.arrowShow) {
        return
      }
      const size = this.arrowSize
      const pos = getPosition(this.$refs.arrow)
      size.width = pos.right - pos.left
      size.height = pos.bottom - pos.top
    },
    _updateOriginPopupPosition() {
      const popEle = this.$refs.popup
      const popPos = this.originPopupPosition
      const left = this.popupAbsPosition.left
      const top = this.popupAbsPosition.top
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
        this._updateArrowSize()
        this._updateReferencePosition()
      })
    }
  },
  mounted() {
    this.popupContainer = this.getPopupContainer()
  }
}
</script>
