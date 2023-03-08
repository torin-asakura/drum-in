import React                         from 'react'
import { FormattedMessage }          from 'react-intl'

import { useIntl } from 'react-intl'

import { BullhornIcon }              from '@ui/icons'
import { LightningIcon }             from '@ui/icons'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Space }                     from '@ui/text'
import { Text }                      from '@ui/text'

const ContentCourse = () => {
  const { formatMessage } = useIntl()

  return (
    <Column
      flexShrink={0}
      width={{ _: 0, tablet: 0, laptop: 2190, wide: 2430 }}
      justifyContent='center'
    >
      <Row flexShrink={0} alignItems='end'>
        <Box flexDirection='column' flexShrink={0}>
          <Box>
            <Box width={{ _: 0, tablet: 0, laptop: 73, wide: 83 }}>
              <BullhornIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={{ _: 0, tablet: 0, laptop: 20, wide: 27 }} flexShrink={0} />
            <Column alignItems='end'>
              <Box>
                <Text
                  whiteSpace='nowrap'
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='bold'
                  fontSize={{
                    _: 'semiModerate',
                    tablet: 'semiModerate',
                    laptop: 'semiModerate',
                    wide: 'moderate',
                  }}
                  lineHeight='default'
                  color='text.smokyWhite'
                >
                  <FormattedMessage
                    id='landing_program_seventh_heaven.twenty_online_lessons'
                    defaultMessage='20 онлайн-занятий'
                  />
                </Text>
              </Box>
              <Layout flexBasis={{ _: 0, tablet: 0, laptop: 12, wide: 16 }} flexShrink={0} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage
                    id='landing_program_seventh_heaven.five_moths'
                    defaultMessage='5 месяцев'
                  />
                </Text>
              </Box>
            </Column>
          </Box>
          <Layout flexBasis={93} flexShrink={0} />
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 335, wide: 442 }} flexShrink={0} />
        <Column width={{ _: 0, tablet: 0, laptop: 395, wide: 470 }} flexShrink={0}>
          {formatMessage({
            id: 'landing_program_seventh_heaven.reading',
            defaultMessage: 'Чтение 7/8;Чтение 9/8;Пирамидка с квинтолями на фортепиано;Клаве',
          })
            .split(';')
            .map((element) => (
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
        </Column>
      </Row>
      <Layout flexBasis={{ _: 0, tablet: 0, laptop: 130, wide: 153 }} flexShrink={0} />
      <Row flexShrink={0}>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 425, wide: 545 }} flexShrink={0} />
        <Box
          width={{ _: 0, tablet: 0, laptop: 440, wide: 504 }}
          flexShrink={0}
          flexDirection='column'
        >
          <Layout flexBasis={83} flexShrink={0} />
          <Column>
            {formatMessage({
              id: 'landing_program_seventh_heaven.score',
              defaultMessage: 'Счёт 1234567;Ключ 3-4 на фортепиано;Конокол 5;Трёхдольность',
            })
              .split(';')
              .map((element) => (
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                    lineHeight='primary'
                    color='text.smokyWhite'
                  >
                    <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                    <Space />
                    {element}
                  </Text>
                </Box>
              ))}
          </Column>
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 350, wide: 375 }} flexShrink={0} />
        <Box flexShrink={0} flexDirection='column'>
          <Layout flexBasis={73} flexShrink={0} />
          <Box alignItems='center'>
            <Box width={{ _: 0, tablet: 0, laptop: 110, wide: 120 }}>
              <LightningIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={16} flexShrink={0} />
            <Box>
              <Text
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={{ _: 'small', tablet: 'small', laptop: 'small', wide: 'moderate' }}
                lineHeight='default'
                color='text.smokyWhite'
              >
                <FormattedMessage id='landing_program.bonus' defaultMessage='Бонус' />
              </Text>
            </Box>
          </Box>
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 255, wide: 420 }} flexShrink={0} />
        <Column width={{ _: 0, tablet: 0, laptop: 280, wide: 340 }} flexShrink={0}>
          {formatMessage({
            id: 'landing_program_seventh_heaven.sket',
            defaultMessage:
              'Скет — 16-е триоли в свинге;Конокол Bonus;Пирамидка с септолями;Seven Beat Cycle',
          })
            .split(';')
            .map((element) => (
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
        </Column>
      </Row>
    </Column>
  )
}

export { ContentCourse }
