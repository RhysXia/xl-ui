import { addClass, removeClass, getPxNumber } from '@/utils/dom'

const className = 'collapse-transition'

const Transition = {
  beforeEnter(el) {
    addClass(el, className)
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldHeight = el.style.height
    el.dataset.oldOverflow = el.style.overflow

    const style = getComputedStyle(el, null)
    el.__style__ = {
      paddingTop: style.paddingTop,
      paddingBottom: style.paddingBottom
    }
    el.style.overflow = 'hidden'
    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },
  enter(el) {
    const style = getComputedStyle(el, null)
    if (style.boxSizing === 'border-box') {
      el.style.height = el.dataset.oldHeight || (el.scrollHeight + getPxNumber(el.__style__.paddingTop) + getPxNumber(el.__style__.paddingBottom) + 'px')
    } else {
      el.style.height = el.dataset.oldHeight || (el.scrollHeight + 'px')
    }
    el.style.paddingTop = el.__style__.paddingTop
    el.style.paddingBottom = el.__style__.paddingBottom
  },

  afterEnter(el) {
    // for safari: remove class then reset height is necessary
    removeClass(el, className)
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  },
  enterCancelled(el) {
    removeClass(el, className)
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  },
  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldHeight = el.style.height
    el.dataset.oldOverflow = el.style.overflow
    const style = getComputedStyle(el, null)
    if (style.boxSizing === 'border-box') {
      el.style.height = el.scrollHeight + 'px'
    } else {
      el.style.height = el.scrollHeight - getPxNumber(style.paddingTop) - getPxNumber(style.paddingBottom) + 'px'
    }
    el.style.overflow = 'hidden'
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
    removeClass(el, className)
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  },
  leaveCancelled(el) {
    removeClass(el, className)
    el.style.height = el.dataset.oldHeight
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }
}

export default {
  name: 'xl-collapse-transition',
  functional: true,
  render(h, { children }) {
    const data = {
      on: Transition
    }
    return h('transition', data, children)
  }
}
