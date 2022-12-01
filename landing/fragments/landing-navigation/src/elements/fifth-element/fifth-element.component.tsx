import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { Circle }           from '../circle'
import { ElementProps }     from '../element.interfaces'
import { Rectangle }        from '../rectangle'
import { Square }           from '../square'

const FifthElement: FC<ElementProps> = ({ stateHover }) => {
  const [fifthElemHover, fifthElemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...(stateHover ? fifthElemHoverProps : null)}>
      <Condition match={fifthElemHover}>
        <Box display={['none', 'none', 'flex']} position='absolute' right={227} bottom={163}>
          <Rectangle
            color='transparentPurpleGradient'
            firstLine={formatMessage({
              id: 'landing_header.fourth',
              defaultMessage: '4',
            })}
            secondLine={formatMessage({
              id: 'landing_header.months_with_different_ending',
              defaultMessage: 'месяца',
            })}
            rotate={-15}
          />
        </Box>
        <Box display={['none', 'none', 'flex']} position='absolute' right={203} bottom={1}>
          <Circle
            secondLine={formatMessage({
              id: 'landing_header.bonus_module',
              defaultMessage: 'бонус-модуль',
            })}
          />
        </Box>
        <Box display={['none', 'none', 'flex']} position='absolute' right={25} bottom={112}>
          <Square
            firstLine={formatMessage({
              id: 'landing_header.sixth',
              defaultMessage: '6',
            })}
            secondLine={formatMessage({
              id: 'landing_header.video_lessons',
              defaultMessage: 'видео-уроков',
            })}
            rotate={15}
          />
        </Box>
      </Condition>
      <Box opacity={[1, 1, fifthElemHover ? 1 : 0.3]}>
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiModerate', 'big']}
          >
            <FormattedMessage id='landing_header.connacol' defaultMessage='Коннакол' />
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}

export { FifthElement }
