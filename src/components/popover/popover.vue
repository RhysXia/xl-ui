<template lang="pug">
  div(:class="classes")
    div(ref="reference",@click="_click",:class="referenceClasses",v-clickoutside="_clickoutside",@mouseleave="_mouseleave",@mouseenter="_mouseenter")
      slot
    transition(:name="transitionName")
      div(ref="popup",:class="popupClasses",:style="popupStyles",v-show="actualVisible",@click="_popupClick",@mouseleave="_popupMouseleave",@mouseenter="_popupMouseenter")
        div(ref="arrow",:class="arrowClasses",:style="arrowStyles",v-if="arrowShow")
        div(:class="contentClasses",:style="contentStyles")
          slot(name="popup")
</template>

<script>
import clickoutside from '@/directives/clickoutside'
import {oneOf} from '@/utils/array'
import { getPosition, getPxNumber } from '@/utils/dom'
import { generateZIndex } from '@/utils/zIndex-manager'

const name = 'xl-popover'
export default {
  name,
  model: {
    prop: 'visible',
    event: 'on-change'
  },
  directives: {
    clickoutside
  },
  props: {
    padding: {
      type: String,
      default: '0.5rem 0.5rem'
    },
    transitionName: {
      type: String,
      default: `xl-fade`
    },
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
    },
    arrowClassPrefix: {
      type: [String, Array],
      default: `${name}__arrow--default`
    },
    contentClass: {
      type: [String, Array],
      default: `${name}__content--default`
    },
    trigger: {
      default: 'click',
      validator(val) {
        return oneOf(['click', 'hover', 'custom'], val)
      }
    },
    hiddenOnPopupHover: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      popupClicked: false,
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
    popupOffset() {
      let offset = this.offset
      if (typeof offset === 'number') {
        offset += 'px'
      }
      return offset
    },
    popupRef() {
      const refPos = this.referencePosition
      const popPos = this.originPopupPosition
      const prefixPlacement = this.prefixPlacement
      const suffixPlacement = this.suffixPlacement
      let x = 0
      let y = 0

      if (prefixPlacement === 'top' || prefixPlacement === 'bottom') {
        if (prefixPlacement === 'top') {
          y = refPos.top - popPos.bottom
        } else {
          y = refPos.bottom - popPos.top
        }
        if (suffixPlacement === 'start') {
          x = refPos.left - popPos.left
        } else if (suffixPlacement === 'end') {
          x = refPos.right - popPos.right
        } else {
          x = (refPos.left + refPos.right - popPos.left - popPos.right) / 2
        }
      } else {
        if (prefixPlacement === 'left') {
          x = refPos.left - popPos.right
        } else {
          x = refPos.right - popPos.left
        }
        if (suffixPlacement === 'start') {
          y = refPos.top - popPos.top
        } else if (suffixPlacement === 'end') {
          y = refPos.bottom - popPos.bottom
        } else {
          y = (refPos.top + refPos.bottom - popPos.top - popPos.bottom) / 2
        }
      }
      return {
        x,
        y
      }
    },
    destPopupPosition() {
      const offset = this.popupRef
      const refPos = this.originPopupPosition
      const left = refPos.left + offset.x
      const right = refPos.right + offset.x
      const top = refPos.top + offset.y
      const bottom = refPos.bottom + offset.y
      return {
        top,
        left,
        right,
        bottom
      }
    },
    classes() {
      return name
    },
    referenceClasses() {
      return `${name}__reference`
    },
    popupClasses() {
      return `${name}__popup`
    },
    arrowClasses() {
      const placement = this.prefixPlacement
      let cls = this.arrowClassPrefix
      if (typeof cls === 'string') {
        cls = [cls]
      }
      const tmp = []
      cls.forEach(it => {
        tmp.push(it)
        tmp.push(`${it}--${placement}`)
      })
      return [`${name}__arrow`].concat(tmp)
    },
    contentClasses() {
      let cls = this.contentClass
      if (typeof cls === 'string') {
        cls = [cls]
      }
      return [`${name}__content`].concat(cls)
    },
    popupStyles() {
      const map = {
        top: 'padding-bottom',
        bottom: 'padding-top',
        left: 'padding-right',
        right: 'padding-left'
      }
      const prefixPlacement = this.prefixPlacement
      return {
        position: 'absolute',
        zIndex: this.zIndex,
        left: this.popupRef.x + 'px',
        top: this.popupRef.y + 'px',
        [map[prefixPlacement]]: this.popupOffset
      }
    },
    arrowStyles() {
      const ret = {
        position: 'absolute'
      }
      const prefixPlacement = this.prefixPlacement
      const refPos = this.referencePosition
      const popPos = this.destPopupPosition
      if (prefixPlacement === 'top' || prefixPlacement === 'bottom') {
        if (prefixPlacement === 'top') {
          ret.bottom = this.popupOffset
        } else {
          ret.top = this.popupOffset
        }
        ret.left = (Math.max(refPos.left, popPos.left) + Math.min(refPos.right, popPos.right) - this.arrowSize.width) / 2 - popPos.left + 'px'
      } else {
        if (prefixPlacement === 'left') {
          ret.right = this.popupOffset
        } else {
          ret.left = this.popupOffset
        }
        ret.top = (Math.max(refPos.top, popPos.top) + Math.min(refPos.bottom, popPos.bottom) - this.arrowSize.height) / 2 - popPos.top + 'px'
      }

      return ret
    },
    contentStyles() {
      const map1 = {
        top: 'margin-bottom',
        bottom: 'margin-top',
        left: 'margin-right',
        right: 'margin-left'
      }
      const map2 = {
        top: 'height',
        bottom: 'height',
        left: 'width',
        right: 'width'
      }
      const prefixPlacement = this.prefixPlacement
      return {
        padding: this.padding,
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
    }
  },
  methods: {
    _click() {
      this.$emit('on-click')
      if (this.trigger === 'click') {
        this.actualVisible = true
      }
    },
    _clickoutside(e) {
      if (this.popupClicked) {
        this.popupClicked = false
        return
      }
      this.$emit('on-clickoutside', e)
      if (this.trigger === 'click') {
        this.actualVisible = false
      }
    },
    _popupClick() {
      this.popupClicked = true
    },
    _mouseenter() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      if (this.trigger === 'hover') {
        this.actualVisible = true
      }
      this.$emit('on-mouseenter')
    },
    _mouseleave() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this._enterTimer = setTimeout(() => {
        if (this.trigger === 'hover') {
          this.actualVisible = false
        }
        this.$emit('on-mouseleave')
      }, 100)
    },
    _popupMouseenter() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      if (this.hiddenOnPopupHover) {
        if (this.trigger === 'hover') {
          this.actualVisible = false
        }
        this.$emit('on-mouseleave')
        return
      }
      if (this.trigger === 'hover') {
        this.actualVisible = true
      }
      this.$emit('on-mouseenter')
    },
    _popupMouseleave() {
      if (this._enterTimer) {
        clearTimeout(this._enterTimer)
      }
      this._enterTimer = setTimeout(() => {
        if (this.trigger === 'hover') {
          this.actualVisible = false
        }
        this.$emit('on-mouseleave')
      }, 100)
    },
    _updateReferencePosition() {
      updateOriginPosition(this.referencePosition, this.$refs.reference)
    },
    _updateOriginPopupPosition() {
      const popupStyle = this.$refs.popup.style
      const offset = {
        x: Math.floor(getPxNumber(popupStyle.left)),
        y: Math.floor(getPxNumber(popupStyle.top))
      }
      updateOriginPosition(this.originPopupPosition, this.$refs.popup, offset)
    },
    _updateArrowSize() {
      const size = this.arrowSize
      let width = 0
      let height = 0
      if (this.arrowShow) {
        const arrow = this.$refs.arrow
        width = arrow.offsetWidth
        height = arrow.offsetHeight
      }
      size.width = Math.floor(width)
      size.height = Math.floor(height)
    },
    updatePosition() {
      if (!this.actualVisible) {
        return
      }
      this._updateArrowSize()
      this.$nextTick(() => {
        this._updateOriginPopupPosition()
        this._updateReferencePosition()
      })
    }
  },
  updated() {
    this.updatePosition()
  },
  mounted() {
    this.popupContainer = this.getPopupContainer()
    this.updatePosition()
  }
}

const updateOriginPosition = (pos, el, offset = {x: 0, y: 0}) => {
  const x = offset.x
  const y = offset.y
  const tPos = getPosition(el)
  Object.keys(tPos).forEach(key => {
    let sp = x
    if (key === 'top' || key === 'bottom') {
      sp = y
    }
    pos[key] = Math.floor(tPos[key] - sp)
  })
}
</script>
