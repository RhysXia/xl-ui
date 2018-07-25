let globalRequestAnimationFrame
let globalCancelAnimationFrame
export function requestAnimationFrame(callback, element) {
  if (globalRequestAnimationFrame) {
    return globalRequestAnimationFrame(callback, element)
  }
  let lastTime = 0
  const vendors = ['ms', 'moz', 'webkit', 'o']
  for (var x = 0; x < vendors.length && !globalRequestAnimationFrame; ++x) {
    globalRequestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
  }
  if (!globalRequestAnimationFrame) {
    globalRequestAnimationFrame = (cb2, element) => {
      const currTime = new Date().getTime()
      const timeToCall = Math.max(0, 16 - (currTime - lastTime))
      const id = window.setTimeout(() => {
        cb2(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  return globalRequestAnimationFrame(callback, element)
}

export function cancelAnimationFrame(id) {
  if (globalCancelAnimationFrame) {
    return globalCancelAnimationFrame(id)
  }
  const vendors = ['ms', 'moz', 'webkit', 'o']
  for (var x = 0; x < vendors.length && !globalCancelAnimationFrame; ++x) {
    globalCancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
  }
  if (!cancelAnimationFrame) {
    globalCancelAnimationFrame = id => {
      clearTimeout(id)
    }
  }
  return globalCancelAnimationFrame(id)
}
