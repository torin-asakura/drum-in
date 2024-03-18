import React            from 'react'
import { FC }           from 'react'

import { Circle }       from '@ui/figures'
import { Rectangle }    from '@ui/figures'
import { Square }       from '@ui/figures'
import { Box }          from '@ui/layout'

import { FiguresProps } from './figures.interfaces'

const Figures: FC<FiguresProps> = ({
  quantityVideoLessons,
  quantityMonths,
  firstLineCircle,
  secondLineCircle,
  squareRotate,
  circleRotate,
  backgroundRectangle,
  rectangleRotate,
  rectanglePositionY,
  rectanglePositionX,
  secondLineRectangle,
}) => (
  <Box display={['none', 'none', 'flex']}>
    <Box position='absolute' left={20} bottom={20}>
      <Square firstLine={quantityVideoLessons} rotate={squareRotate || 0} />
    </Box>
    <Box position='absolute' left={205} bottom={1}>
      <Circle firstLine={firstLineCircle} secondLine={secondLineCircle} rotate={circleRotate} />
    </Box>
    <Box position='absolute' right={rectanglePositionX} bottom={rectanglePositionY}>
      <Rectangle color={backgroundRectangle} firstLine={quantityMonths} rotate={rectangleRotate} />
    </Box>
  </Box>
)

export { Figures }
