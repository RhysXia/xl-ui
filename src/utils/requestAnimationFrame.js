export function requestAnimationFrame(callback, element) {
  let lastTime = 0
  const vendors = ['ms', 'moz', 'webkit', 'o']
  let tempRequestAnimationFrame
  for (var x = 0; x < vendors.length && !tempRequestAnimationFrame; ++x) {
    tempRequestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
  }
  if (!requestAnimationFrame) {
    tempRequestAnimationFrame = (cb2, element) => {
      const currTime = new Date().getTime()
      const timeToCall = Math.max(0, 16 - (currTime - lastTime))
      const id = window.setTimeout(() => {
        cb2(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  return tempRequestAnimationFrame(callback, element)
}

export function cancelAnimationFrame(id) {
  let tempCancelAnimationFrame
  const vendors = ['ms', 'moz', 'webkit', 'o']
  for (var x = 0; x < vendors.length && !tempCancelAnimationFrame; ++x) {
    tempCancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
  }
  if (!cancelAnimationFrame) {
    tempCancelAnimationFrame = id => {
      clearTimeout(id)
    }
  }
  return tempCancelAnimationFrame(id)
}
