import { addClass, removeClass, getPxNumber } from '@/utils/dom'

const Transition = {
  beforeEnter(el) {
    addClass(el, 'collapse-transition')
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldHeight = el.style.height
    el.dataset.oldOverflow = el.style.overflow
    el.dataset.oldBoxSizing = el.style.boxSizing

    const style = getComputedStyle(el, null)
    el.__style__ = {
      paddingTop: style.paddingTop,
      paddingBottom: style.paddingBottom
    }
    el.style.boxSizing = 'border-box'
    el.style.overflow = 'hidden'
    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },

  enter(el) {
    el.style.height = el.dataset.oldHeight || (el.scrollHeight + getPxNumber(el.__style__.paddingTop) + getPxNumber(el.__style__.paddingBottom) + 'px')
    el.style.paddingTop = el.__style__.paddingTop
    el.style.paddingBottom = el.__style__.paddingBottom
  },

  afterEnter(el) {
    // for safari: remove class then reset height is necessary
    removeClass(el, 'collapse-transition')
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
    el.style.boxSizing = el.dataset.oldBoxSizing
  },
  enterCancelled(el) {
    removeClass(el, 'collapse-transition')
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
    el.style.boxSizing = el.dataset.oldBoxSizing
  },
  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldHeight = el.style.height
    el.dataset.oldOverflow = el.style.overflow
    el.dataset.oldBoxSizing = el.style.boxSizing

    el.style.boxSizing = 'border-box'
    el.style.overflow = 'hidden'
    el.style.height = el.dataset.oldOverflow || (el.scrollHeight + 'px')
  },
  leave(el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, 'collapse-transition')
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },
  afterLeave(el) {
    removeClass(el, 'collapse-transition')
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
    el.style.boxSizing = el.dataset.oldBoxSizing
  },
  leaveCancelled(el) {
    removeClass(el, 'collapse-transition')
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
    el.style.boxSizing = el.dataset.oldBoxSizing
  }
}

export default {
  name: 'CollapseTransition',
  functional: true,
  render(h, { children }) {
    const data = {
      on: Transition
    }
    return h('transition', data, children)
  }
}
