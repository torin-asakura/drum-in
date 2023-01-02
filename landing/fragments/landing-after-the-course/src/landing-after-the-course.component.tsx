import React                      from 'react'
import { FormattedMessage }       from 'react-intl'
import { useIntl }                from 'react-intl'

import { TwistedArrowBottomIcon } from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { Tape }                   from './tape'

const AfterTheCourseBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Box width='100%' justifyContent='center' position='relative'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} />
        <Column width='100%'>
          <Layout flexBasis={[40, 65, 91]} />
          <Row>
            <Box width={['100%', 440, 520]}>
              <Text
                textTransform='uppercase'
                fontFamily='DrukWideCy'
                fontWeight='bold'
                fontSize={['regular', 'moderate', 'big']}
                lineHeight='default'
                color='text.smokyWhite'
              >
                <FormattedMessage
                  id='landing_after_the_course.after_the_course_you_will_be_able_to'
                  defaultMessage='После курса вы сможете'
                />
              </Text>
            </Box>
            <Layout display={['none', 'none', 'flex']} flexBasis={36} flexShrink={0} />
            <Box
              display={['none', 'none', 'flex']}
              style={{ transform: 'rotate(195deg) scale(1, -1)' }}
              alignItems='end'
            >
              <TwistedArrowBottomIcon width={252} height={55} />
            </Box>
            <Box width={[0, 0, 940]}>
              <Tape
                firstLine={formatMessage({
                  id: 'landing_after_the_course.make_rhythmically_interesting_arrangements',
                  defaultMessage:
                    '#Делать ритмически-интересные аранжировки;#Делать ритмически-интересные аранжировки',
                })}
                secondLine={formatMessage({
                  id: 'landing_after_the_course.select_parties_and_control_the_pace',
                  defaultMessage: '#Подбирать партии;#Контролировать темп',
                })}
                thirdLine={formatMessage({
                  id: 'landing_after_the_course.feel_confident_when_playing_and_recording',
                  defaultMessage:
                    '#Уверенно чувствовать себя при игре и записи;#Уверенно чувствовать себя при игре и записи',
                })}
              />
            </Box>
          </Row>
          <Layout flexBasis={[185, 315, 445]} />
        </Column>
      </Box>
    </Box>
  )
}

export { AfterTheCourseBlock }
