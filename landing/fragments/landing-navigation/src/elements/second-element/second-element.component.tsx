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

const SecondElement = () => {
  const [secondElemHover, secondElemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...secondElemHoverProps} alignItems='start'>
      <Condition match={secondElemHover}>
        <Box position='absolute' right={202} bottom={1}>
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
        <Box position='absolute' right={218} bottom={172}>
          <Rectangle
            color='transparentBlueGradient'
            firstLine={formatMessage({
              id: 'landing_header.fifth',
              defaultMessage: '5',
            })}
            secondLine={formatMessage({
              id: 'landing_header.months',
              defaultMessage: 'месяцев',
            })}
            rotate={-8}
          />
        </Box>
        <Box position='absolute' right={12} bottom={30}>
          <Square
            firstLine={formatMessage({
              id: 'landing_header.thirteens',
              defaultMessage: '13',
            })}
            secondLine={formatMessage({
              id: 'landing_header.video_lessons',
              defaultMessage: 'видео-уроков',
            })}
            rotate={10}
          />
        </Box>
      </Condition>
      <Box opacity={secondElemHover ? 1 : 0.3}>
        <Background
          display='flex'
          alignItems='center'
          justifyContent='center'
          textAlign='right'
          gradient='blueGradient'
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
            <FormattedMessage id='landing_header.level_one' defaultMessage='ур. 1' />
          </Text>
        </Background>
        <Layout flexBasis={12} />
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiIncreased', 'big']}
          >
            <FormattedMessage id='landing_header.sense_of_time' defaultMessage='Ощущение времени' />
          </Text>
        </NextLink>
      </Box>
    </Box>
  )
}

export { SecondElement }