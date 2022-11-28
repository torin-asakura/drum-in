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

const FourthElement = () => {
  const [fourthElemHover, fourthElemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...fourthElemHoverProps} alignItems='start'>
      <Condition match={fourthElemHover}>
        <Box position='absolute' right={10} bottom={44}>
          <Rectangle
            color='transparentPinkGradient'
            firstLine={formatMessage({
              id: 'landing_header.fifth',
              defaultMessage: '5',
            })}
            secondLine={formatMessage({
              id: 'landing_header.months',
              defaultMessage: 'месяцев',
            })}
            rotate={-15}
          />
        </Box>
        <Box position='absolute' right={369} bottom={2}>
          <Circle
            firstLine={formatMessage({
              id: 'landing_header.twenty',
              defaultMessage: '20',
            })}
            secondLine={formatMessage({
              id: 'landing_header.live_broadcasts',
              defaultMessage: 'прямых эфиров',
            })}
          />
        </Box>
        <Box position='absolute' right={207} bottom={135}>
          <Square
            firstLine={formatMessage({
              id: 'landing_header.thirteens',
              defaultMessage: '13',
            })}
            secondLine={formatMessage({
              id: 'landing_header.video_lessons',
              defaultMessage: 'видео-уроков',
            })}
            rotate={0}
          />
        </Box>
      </Condition>
      <Box opacity={fourthElemHover ? 1 : .3}>
        <Background
          display='flex'
          alignItems='center'
          justifyContent='center'
          textAlign='right'
          gradient='pinkGradient'
          borderRadius='medium'
          width={64}
          height={24}
        >
          <Text
            textTransform='uppercase'
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize='micro'
            color='text.smokyWhite'
          >
            <FormattedMessage id='landing_header.level_three' defaultMessage='ур. 3' />
          </Text>
        </Background>
        <Layout flexBasis={12} />
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiIncreased', 'big']}
          >
            <FormattedMessage id='landing_header.seventh_heaven' defaultMessage='Седьмое небо' />
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}

export { FourthElement }
