import React         from 'react'
import { useIntl }   from 'react-intl'

import { Circle }    from '@ui/figures'
import { Rectangle } from '@ui/figures'
import { Square }    from '@ui/figures'
import { Box }       from '@ui/layout'

const Figures = () => {
  const { formatMessage } = useIntl()

  return (
    <Box display={['none', 'none', 'flex']}>
      <Box position='absolute' left={20} bottom={20}>
        <Square
          firstLine={formatMessage({
            id: 'landing_price.thirty_nine',
            defaultMessage: '39',
          })}
          secondLine={formatMessage({
            id: 'landing_price.video_lessons',
            defaultMessage: 'видео-уроков',
          })}
          rotate={20}
        />
      </Box>
      <Box position='absolute' left={205} bottom={1}>
        <Circle
          firstLine={formatMessage({
            id: 'landing_price.three',
            defaultMessage: '3',
          })}
          secondLine={formatMessage({
            id: 'landing_price.level',
            defaultMessage: '"уровня',
          })}
          rotate={-20}
        />
      </Box>
      <Box position='absolute' right={0} bottom={79}>
        <Rectangle
          color='transparentPurpleGradient'
          firstLine={formatMessage({
            id: 'landing_price.fifteen',
            defaultMessage: '15',
          })}
          secondLine={formatMessage({
            id: 'landing_price.months',
            defaultMessage: 'месяцев',
          })}
          rotate={-30}
        />
      </Box>
    </Box>
  )
}
export { Figures }
