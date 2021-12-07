import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'

const getShapeStyles = (): styleFn => {
  const normalSizeStyles = getNormalSizeStyles()

  return switchProp(prop('size', 'normal'), {
    normal: normalSizeStyles,
  })
}
export { getShapeStyles }
