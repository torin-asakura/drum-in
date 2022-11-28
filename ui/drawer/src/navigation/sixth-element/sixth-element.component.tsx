import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Background }       from '@ui/background'
import { Condition }        from '@ui/condition'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { Circle }           from '../circle'
import { Rectangle }        from '../rectangle'
import { Square }           from '../square'

const SixthElement = () => {
  const [sixthElemHover, sixthElemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...sixthElemHoverProps}>
      <Condition match={sixthElemHover}>
        <Box position='absolute' right={2} bottom={35}>
          <Rectangle
            color='transparentPurpleGradient'
            firstLine={formatMessage({
              id: 'landing_header.thirst',
              defaultMessage: '1',
            })}
            secondLine={formatMessage({
              id: 'landing_header.month',
              defaultMessage: 'месяц',
            })}
            rotate={10}
          />
        </Box>
        <Box position='absolute' right={368} bottom={0}>
          <Square
            firstLine={formatMessage({
              id: 'landing_header.fifth',
              defaultMessage: '5',
            })}
            secondLine={formatMessage({
              id: 'landing_header.video_lessons',
              defaultMessage: 'видео-уроков',
            })}
            rotate={0}
          />
        </Box>
      </Condition>
      <Box opacity={sixthElemHover ? 1 : .3}>
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiIncreased', 'big']}
          >
            <FormattedMessage
              id='landing_header.polyrhythmic_keys'
              defaultMessage='Ключи полиритмии'
            />
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}

export { SixthElement }
