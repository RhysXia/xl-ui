<template lang="pug">
  div(:class="classes")
    div(ref="content")
      slot
    div(ref="popupWrapper")
      div(ref="arrow",:style="arrowStyles")
        slot(name="arrow",:placement="placement")
          div(:class="arrowInnerClasses")
      div(ref="popup",:style="popupStyles")
        slot(name="popup")
</template>
<script>
import { oneOf } from '../../utils/array'
import { getPosition } from '../../utils/element'
const name = 'xl-popup'

export default {
  name,
  props: {
    bound: {
      type: Function,
      default: () => document.body
    },
    placement: {
      type: String,
      default: 'top',
      validator(val) {
        return oneOf(
          [
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end'
          ],
          val
        )
      }
    },
    placementOrder: {
      type: Array,
      default: () => ['top', 'bottom', 'left', 'right']
    }
  },
  data() {
    return {
      boundElement: null,
      contentPosition: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      boundPosition: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      arrowSize: {
        height: 0,
        width: 0
      },
      popupSize: {
        height: 0,
        width: 0
      }
    }
  },
  computed: {
    actualPlacement() {
      const placement = this.placement
      const order = this.placementOrder
      if (this._checkPlacement(placement)) {
        return placement
      }
      for (let i = 0; i < order.length; i++) {
        if (placement.indexOf(order[i]) !== -1) {
          continue
        }
        if (this._checkPlacement(order[i])) {
          const arr = placement.split('-')
          let suffix = ''
          if (arr.length > 1) {
            suffix = arr[1]
          }
          return order + suffix
        }
      }
      return placement
    },
    popupPosition() {
      let left = 0
      let right = 0
      let bottom = 0
      let top = 0
      const placement = this.actualPlacement
      // const boundPos = this.boundPosition
      const cntPos = this.contentPosition
      const popupSize = this.popupSize
      if (placement === 'top-start') {
        top = cntPos.top - popupSize.height
        left = cntPos.left
      } else if (placement === 'top') {
        top = cntPos.top - popupSize.height
        left = (cntPos.left + cntPos.right - popupSize.width) / 2
      } else if (placement === 'top-end') {
        top = cntPos.top - popupSize.height
        left = cntPos.right - popupSize.width
      } else if (placement === 'bottom-start') {
        top = cntPos.bottom
        left = cntPos.left
      } else if (placement === 'bottom') {
        top = cntPos.bottom
        left = cntPos.right - popupSize.width
      } else if (placement === 'bottom-end') {
        top = cntPos.bottom
        left = (cntPos.left + cntPos.right - popupSize.width) / 2
      } else if (placement === 'left-start') {
        left = cntPos.left - popupSize.width
        top = cntPos.top
      } else if (placement === 'left') {
        left = cntPos.left - popupSize.width
        top = (cntPos.top + cntPos.bottom - popupSize.height) / 2
      } else if (placement === 'left-end') {
        left = cntPos.left - popupSize.width
        top = cntPos.bottom - popupSize.height
      } else if (placement === 'right-start') {
        left = cntPos.right
        top = cntPos.top
      } else if (placement === 'right') {
        left = cntPos.right
        top = (cntPos.top + cntPos.bottom - popupSize.height) / 2
      } else if (placement === 'right-end') {
        left = cntPos.right
        top = cntPos.bottom - popupSize.height
      }
      right = left + popupSize.width
      bottom = top + popupSize.height

      return {
        left,
        top,
        bottom,
        right
      }
    },
    arrowPosition() {
      let left = 0
      let right = 0
      let bottom = 0
      let top = 0
      return {
        left,
        top,
        bottom,
        right
      }
    },
    classes() {
      return [name]
    },
    arrowInnerClasses() {
      const arrow = name + '__arrow'
      const arr = [arrow]
      const direction = this.actualPlacement.split('-')[0]
      arr.push(`${arrow}--${direction}`)
      return arr
    },
    arrowStyles() {
      const styles = {
        position: 'absolute',
        display: 'inline-block',
        left: this.arrowPosition.left + 'px',
        top: this.arrowPosition.top + 'px'
      }
      return styles
    },
    popupStyles() {
      const style = {
        position: 'absolute',
        display: 'inline-block',
        left: this.popupPosition.left + 'px',
        top: this.popupPosition.top + 'px'
      }
      return style
    }
  },
  methods: {
    _checkPlacement(placement) {
      const needHeight = this.arrowSize.height + this.popupSize.height
      const needWidth = this.arrowSize.width + this.popupSize.width
      const left = this.contentPosition.left - this.boundPosition.left
      const right = this.boundPosition.right - this.contentPosition.right
      const bottom = this.boundPosition.bottom - this.contentPosition.bottom
      const top = this.contentPosition.top - this.boundPosition.top
      if (placement.indexOf('top') !== -1) {
        return needHeight < top
      }
      if (placement.indexOf('bottom' !== -1)) {
        return needHeight < bottom
      }
      if (placement.indexOf('left') !== -1) {
        return needWidth < left
      }
      if (placement.indexOf('right') !== -1) {
        return needWidth < right
      }
      return false
    },
    updatePosition() {
      // 更新content位置
      const contentPos = getPosition(this.$el)
      Object.keys(contentPos).forEach(key => {
        this.contentPosition[key] = contentPos[key]
      })

      // 更新bound位置
      const boundPos = getPosition(this.boundElement)
      Object.keys(boundPos).forEach(key => {
        this.boundPosition[key] = boundPos[key]
      })

      // 更新popup尺寸
      const popupRect = this.$refs.popup.getBoundingClientRect()
      this.popupSize.width = popupRect.width
      this.popupSize.height = popupRect.height

      // 更新arrow尺寸
      const arrowRect = this.$refs.arrow.getBoundingClientRect()
      this.arrowSize.width = arrowRect.width
      this.arrowSize.height = arrowRect.height
    }
  },
  mounted() {
    document.body.appendChild(this.$refs.popupWrapper)
    this.boundElement = this.bound()
    this.updatePosition()
    window.addEventListener('scroll', this.updatePosition)
  },
  updated() {},
  beforeDestroy() {
    window.removeEventListener('scroll', this.updatePosition)
    this.container.removeChild(this.$slots.popup)
  },
  activated() {},
  deactivated() {}
}
</script>
