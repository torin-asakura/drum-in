export const throttle = (func: Function, ms: number) => {
  let locked = false
  // eslint-disable-next-line
  return function (...args) {
    if (locked) return
    locked = true
    setTimeout(() => {
      func.apply(this, args)
      locked = false
    }, ms)
  }
}
