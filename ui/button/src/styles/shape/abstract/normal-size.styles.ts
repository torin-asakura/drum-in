import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getNormalSizeStyles = (): styleFn => {
  const normalSizeStyles = createShapeStyles({
    size: 40,
  })
  return normalSizeStyles
}

export { getNormalSizeStyles }
