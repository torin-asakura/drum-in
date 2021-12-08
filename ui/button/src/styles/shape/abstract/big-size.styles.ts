import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getBigSizeStyles = (): styleFn => {
  const bigSizeStyles = createShapeStyles({
    size: 70,
  })
  return bigSizeStyles
}

export { getBigSizeStyles }
