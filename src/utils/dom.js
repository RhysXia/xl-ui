import { oneOf } from './array'
// 返回当前页面相对于窗口显示区左上角的 X ，Y 的位置
export function getScroll(top) {
  let ret = window[`page${top ? 'Y' : 'X'}Offset`]
  const method = `scroll${top ? 'Top' : 'Left'}`
  if (typeof ret !== 'number') {
    const d = window.document
    // ie6,7,8 standard mode
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method]
    }
  }
  return ret
}

// 获取元素的绝对坐标
export function getPosition(element) {
  const top = getScroll(true)
  const left = getScroll()
  const elRect = element.getBoundingClientRect()
  return {
    top: top + elRect.top,
    bottom: top + elRect.bottom,
    left: left + elRect.left,
    right: left + elRect.right
  }
}

export function getClasses(element) {
  const classes = (element.className || '').trim()
  return classes.split(/\s+/)
}

export function containClass(element, className) {
  return oneOf(getClasses(element), className)
}

export function addClass(element, className) {
  if (containClass(element, className)) {
    return
  }
  let _className = (element.className || '') + ` ${className}`
  element.className = _className.replace(/\s+/, ' ')
}

export function removeClass(element, className) {
  if (!containClass(element, className)) {
    return
  }
  let _className = (element.className || '').replace(className, ' ')
  element.className = _className.replace(/\s+/, ' ')
}

export function getPxNumber(px) {
  if (typeof px === 'number') {
    return px
  }
  if (!px.endsWith('px')) {
    return Number(px)
  }
  return Number(px.substring(0, px.length - 2))
}
