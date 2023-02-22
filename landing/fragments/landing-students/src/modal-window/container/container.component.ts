import styled                     from '@emotion/styled'

import { motion }                 from 'framer-motion'
import { layout }                 from 'styled-system'

import { ContainerProps }         from './container.interface'
import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape'

const Container = styled(motion.div)<ContainerProps>(
  createBaseStyles(),
  createShapeStyles(),
  createAppearanceStyles(),
  layout
)

export { Container }
