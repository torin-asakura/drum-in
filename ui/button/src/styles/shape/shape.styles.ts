import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getBigSizeStyles }    from './abstract'

const getShapeStyles = (): styleFn => {
  const normalSizeStyles = getNormalSizeStyles()
  const bigSizeStyles = getBigSizeStyles()

  return switchProp(prop('size', 'normal'), {
    normal: normalSizeStyles,
    big: bigSizeStyles,
  })
}
export { getShapeStyles }
