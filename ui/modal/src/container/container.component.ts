import styled                           from '@emotion/styled'

import { motion }                       from 'framer-motion'
import { layout }                       from 'styled-system'

import { ContainerProps }               from './container.interface'
import { createAppearanceMobileStyles } from './appearance'
import { createAppearanceStyles }       from './appearance'
import { createBaseStyles }             from './base'
import { createShapeStyles }            from './shape'

const Container = styled(motion.div)<ContainerProps>(
  createBaseStyles(),
  createShapeStyles(),
  createAppearanceStyles(),
  layout
)
const ContainerMobile = styled(motion.div)<ContainerProps>(
  createBaseStyles(),
  createShapeStyles(),
  createAppearanceMobileStyles(),
  layout
)

export { Container, ContainerMobile }
