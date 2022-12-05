import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Condition }        from '@ui/condition'
import { Circle }           from '@ui/figures'
import { Rectangle }        from '@ui/figures'
import { Square }           from '@ui/figures'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { ElementProps }     from '../element.interfaces'

const FirstElement: FC<ElementProps> = ({ stateHover }) => {
  const [firstElemHover, firstElemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...(stateHover ? firstElemHoverProps : null)}>
      <Condition match={firstElemHover}>
        <Box display={['none', 'none', 'flex']} position='absolute' right={192} bottom={141}>
          <Circle
            firstLine={formatMessage({
              id: 'landing_header.three',
              defaultMessage: '3',
            })}
            secondLine={formatMessage({
              id: 'landing_header.levels',
              defaultMessage: 'уровня',
            })}
          />
        </Box>
        <Box display={['none', 'none', 'flex']} position='absolute' right={2} bottom={27}>
          <Rectangle
            color='transparentPurpleGradient'
            firstLine={formatMessage({
              id: 'landing_header.fifteen',
              defaultMessage: '15',
            })}
            secondLine={formatMessage({
              id: 'landing_header.months',
              defaultMessage: 'месяцев',
            })}
            rotate={7}
          />
        </Box>
        <Box display={['none', 'none', 'flex']} position='absolute' right={350} bottom={2}>
          <Square
            firstLine={formatMessage({
              id: 'landing_header.thirty_nine',
              defaultMessage: '39',
            })}
            secondLine={formatMessage({
              id: 'landing_header.video_lessons',
              defaultMessage: 'видео-уроков',
            })}
            rotate={-4}
          />
        </Box>
      </Condition>
      <Box opacity={[1, 1, firstElemHover ? 1 : 0.3]}>
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiModerate', 'big']}
          >
            <FormattedMessage
              id='landing_header.opening_the_rhythm'
              defaultMessage='Открытие ритма'
            />
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}

export { FirstElement }
