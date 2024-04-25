import { PROGRESS_SCALE }   from '../hooks'
import { MIN_VALUE_COORDS } from '../hooks'
import { MAX_VALUE_COORDS } from '../hooks'

export const getCalculateProgress = (containerBottom: number, elementBottom: number) => {
  const bottomCoords = containerBottom - elementBottom
  const percentageProgress =
    ((MAX_VALUE_COORDS - bottomCoords) / (MAX_VALUE_COORDS - MIN_VALUE_COORDS)) * PROGRESS_SCALE
  return Math.max(0, Math.min(100, Math.round(percentageProgress)))
}
