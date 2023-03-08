import React                         from 'react'
import { FormattedMessage }          from 'react-intl'

import { useIntl } from 'react-intl'

import { Background }                from '@ui/background'
import { LightningIcon }             from '@ui/icons'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Space }                     from '@ui/text'
import { Text }                      from '@ui/text'

const ContentMobileCourse = () => {
  const { formatMessage } = useIntl()

  return (
    <Box
      display='block'
      position='relative'
      id='scroll-mobile'
      data-scroll-position='bottom'
      width={[335, 446, 0]}
      height={[1005, 1298, 0]}
    >
      <Background
        display='flex'
        position='relative'
        backgroundPosition='left top'
        backgroundSize='100% 100%'
        backgroundRepeat='repeat-y'
        gradient='mobileProgressLineWithBlackBackground'
        flexDirection='column'
        zIndex={4}
      >
        <Layout flexBasis={[160, 200, 0]} />
        <Row>
          <Layout flexBasis={[90, 120, 0]} />
          <Column alignItems='end'>
            <Box>
              <Text
                whiteSpace='nowrap'
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={['micro', 'medium', 'medium']}
                lineHeight='default'
                color='text.smokyWhite'
              >
                <FormattedMessage
                  id='landing_program_fifth_dimension.twenty_online_lessons'
                  defaultMessage='20 онлайн-занятий'
                />
              </Text>
            </Box>
            <Layout flexBasis={[8, 12, 12]} flexShrink={0} />
            <Box>
              <Text
                fontWeight='medium'
                fontSize={['micro', 'medium', 'medium']}
                lineHeight='primary'
                color='text.smokyWhite'
              >
                <FormattedMessage
                  id='landing_program_fifth_dimension.five_moths'
                  defaultMessage='5 месяцев'
                />
              </Text>
            </Box>
          </Column>
        </Row>
        <Layout flexBasis={[96, 130, 0]} />
        <Row>
          <Layout flexBasis={[151, 181, 0]} />
          <Box flexDirection='column' height={[85, 110, 0]}>
            {formatMessage({
              id: 'landing_program_fifth_dimension.konokol_phrases',
              defaultMessage: 'Конокол 3;Фразы;Ключ 2-3 на фортепиано;Конокол 4',
            })
              .split(';')
              .map((element) => (
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize={['micro', 'medium', 'medium']}
                    lineHeight='primary'
                    color='text.smokyWhite'
                  >
                    <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                    <Space />
                    {element}
                  </Text>
                </Box>
              ))}
          </Box>
        </Row>
        <Layout flexBasis={[93, 130, 0]} />
        <Row>
          <Layout flexBasis={[80, 110, 0]} />
          <Box flexDirection='column' height={[68, 100, 0]}>
            {formatMessage({
              id: 'landing_program_fifth_dimension.score_fractions_and_accents',
              defaultMessage: 'Счёт 12345 доли и акценты;Чтение 5/8;Ключ 3-4;Компинг на фортепиано',
            })
              .split(';')
              .map((element) => (
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize={['micro', 'medium', 'medium']}
                    lineHeight='primary'
                    color='text.smokyWhite'
                  >
                    <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                    <Space />
                    {element}
                  </Text>
                </Box>
              ))}
          </Box>
        </Row>
        <Layout flexBasis={[125, 143, 0]} />
        <Row>
          <Layout flexBasis={[146, 176, 0]} />
          <Box alignItems='center'>
            <Box width={[70, 85, 0]}>
              <LightningIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={[12, 16, 0]} flexShrink={0} />
            <Box>
              <Text
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={['medium', 'regular', 'regular']}
                lineHeight='default'
                color='text.smokyWhite'
              >
                <FormattedMessage id='landing_program.bonus' defaultMessage='Бонус' />
              </Text>
            </Box>
          </Box>
        </Row>
        <Layout flexBasis={[140, 170, 0]} />
        <Row>
          <Layout flexBasis={[124, 154, 0]} />
          <Box flexDirection='column' height={[85, 110, 0]}>
            {formatMessage({
              id: 'landing_program_fifth_dimension.swing_solo',
              defaultMessage: 'Свинг-соло;Чтение 12/8;Конокол 6;Пирамидка с квинтолями',
            })
              .split(';')
              .map((element) => (
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize={['micro', 'medium', 'medium']}
                    lineHeight='primary'
                    color='text.smokyWhite'
                  >
                    <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                    <Space />
                    {element}
                  </Text>
                </Box>
              ))}
          </Box>
        </Row>
        <Layout flexBasis={[77, 107, 0]} />
      </Background>
      <Box
        data-scroll
        data-scroll-sticky
        data-scroll-target='#scroll-mobile'
        width='100%'
        position='absolute'
        top={0}
        left={0}
        zIndex={1}
      >
        <Box
          height={[200, 300, 0]}
          width='100%'
          flexShrink={0}
          backgroundColor='background.smokyWhite'
        />
      </Box>
    </Box>
  )
}

export { ContentMobileCourse }
