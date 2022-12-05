import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Background }       from '@ui/background'
import { Condition }        from '@ui/condition'
import { Circle }           from '@ui/figures'
import { Rectangle }        from '@ui/figures'
import { Square }           from '@ui/figures'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { ElementProps }     from '../element.interfaces'

const FourthElement: FC<ElementProps> = ({ stateHover }) => {
  const [fourthElemHover, fourthElemHoverProps] = useHover()
  const { formatMessage } = useIntl()

  return (
    <Box width='max-content' {...(stateHover ? fourthElemHoverProps : null)} alignItems='start'>
      <Condition match={fourthElemHover}>
        <Box display={['none', 'none', 'flex']} position='absolute' right={10} bottom={44}>
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
        <Box display={['none', 'none', 'flex']} position='absolute' right={369} bottom={2}>
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
        <Box display={['none', 'none', 'flex']} position='absolute' right={207} bottom={135}>
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
      <Box opacity={[1, 1, fourthElemHover ? 1 : 0.3]}>
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
        <Layout flexBasis={[8, 10, 12]} />
        <Box>
          <NextLink path='/'>
            <Text
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
            >
              <FormattedMessage id='landing_header.seventh_heaven' defaultMessage='Седьмое небо' />
            </Text>
          </NextLink>
        </Box>
      </Box>
    </Box>
  )
}

export { FourthElement }
