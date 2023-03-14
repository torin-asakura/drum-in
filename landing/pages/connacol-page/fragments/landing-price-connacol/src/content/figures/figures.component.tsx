import React            from 'react'
import { FC }           from 'react'
import { useIntl }      from 'react-intl'

import { Circle }       from '@ui/figures'
import { Rectangle }    from '@ui/figures'
import { Square }       from '@ui/figures'
import { Box }          from '@ui/layout'

import { FiguresProps } from './figures.interfaces'

const Figures: FC<FiguresProps> = ({
  quantityVideoLessons,
  quantityMonths,
  secondLineCircle,
  squareRotate,
  circleRotate,
  backgroundRectangle,
  rectangleRotate,
  rectanglePositionY,
  rectanglePositionX,
}) => {
  const { formatMessage } = useIntl()

  return (
    <Box display={['none', 'none', 'flex']}>
      <Box position='absolute' left={20} bottom={20}>
        <Square
          firstLine={quantityVideoLessons}
          secondLine={formatMessage({
            id: 'landing_price.video_lessons',
            defaultMessage: 'видео-уроков',
          })}
          rotate={squareRotate || 0}
        />
      </Box>
      <Box position='absolute' left={205} bottom={1}>
        <Circle secondLine={secondLineCircle} rotate={circleRotate} />
      </Box>
      <Box position='absolute' right={rectanglePositionX} bottom={rectanglePositionY}>
        <Rectangle
          color={backgroundRectangle}
          firstLine={quantityMonths}
          secondLine={formatMessage({
            id: 'landing_price.months',
            defaultMessage: 'месяцев',
          })}
          rotate={rectangleRotate}
        />
      </Box>
    </Box>
  )
}
export { Figures }
