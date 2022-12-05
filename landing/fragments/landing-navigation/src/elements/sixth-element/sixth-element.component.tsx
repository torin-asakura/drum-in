import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Condition }        from '@ui/condition'
import { Rectangle }        from '@ui/figures'
import { Square }           from '@ui/figures'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { ElementProps }     from '../element.interfaces'

const SixthElement: FC<ElementProps> = ({ stateHover }) => {
  const [sixthElemHover, sixthElemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...(stateHover ? sixthElemHoverProps : null)}>
      <Condition match={sixthElemHover}>
        <Box display={['none', 'none', 'flex']} position='absolute' right={2} bottom={35}>
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
        <Box display={['none', 'none', 'flex']} position='absolute' right={368} bottom={0}>
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
      <Box opacity={[1, 1, sixthElemHover ? 1 : 0.3]}>
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiModerate', 'big']}
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
