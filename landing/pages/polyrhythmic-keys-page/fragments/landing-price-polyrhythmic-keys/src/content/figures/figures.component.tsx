import React            from 'react'
import { FC }           from 'react'

import { Rectangle }    from '@ui/figures'
import { Square }       from '@ui/figures'
import { Box }          from '@ui/layout'

import { FiguresProps } from './figures.interfaces'

const Figures: FC<FiguresProps> = ({
  quantityVideoLessons,
  quantityMonths,
  squareRotate,
  backgroundRectangle,
  rectangleRotate,
  rectanglePositionY,
  rectanglePositionX,
}) => (
  <Box display={['none', 'none', 'flex']}>
    <Box position='absolute' left={20} bottom={20}>
      <Square firstLine={quantityVideoLessons} rotate={squareRotate || 0} />
    </Box>
    <Box position='absolute' right={rectanglePositionX} bottom={rectanglePositionY}>
      <Rectangle color={backgroundRectangle} firstLine={quantityMonths} rotate={rectangleRotate} />
    </Box>
  </Box>
)

export { Figures }
