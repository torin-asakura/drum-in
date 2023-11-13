import { VoidFunction } from '../progress-bar.interface'

export const throttle = (func: VoidFunction, ms: number): VoidFunction => {
  let locked = false
  return (...args: any[]): void => {
    if (locked) return
    locked = true
    const timeoutId = setTimeout(() => {
      func(args)
      locked = false
      clearTimeout(timeoutId)
    }, ms)
  }
}
