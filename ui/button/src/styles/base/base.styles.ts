import { createBaseStyles } from '@atls-ui-parts/button'
import { styleFn }          from 'styled-system'

const getBaseStyles = (): styleFn => {
  const baseStyles = createBaseStyles()

  return () => ({
    ...baseStyles(),
  })
}
export { getBaseStyles }
