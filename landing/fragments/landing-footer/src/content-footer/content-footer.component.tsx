import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { BottomRow }        from './bottom-row'
import { ButtonUp }         from './button-up'
import { LinkSocial }       from './link-social'

const ContentFooter = () => {
  const { formatMessage } = useIntl()

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[40, 85, 128]} />
          <Box width='100%' flexDirection={['column', 'column', 'row']}>
            <Box width={[120, 170, 220]} height={[24, 34, 44]} flexShrink={0}>
              <Logo />
            </Box>
            <Layout flexGrow={[0, 0, 2]} flexBasis={[40, 50, 0]} flexShrink={0} />
            <Column>
              <Box>
                <Text
                  textTransform='uppercase'
                  fontWeight='semiBold'
                  fontSize={['semiMedium', 'medium', 'regular']}
                  lineHeight='default'
                  color={[
                    'text.transparentSmokyWhite',
                    'text.transparentSmokyWhite',
                    'text.smokyWhite',
                  ]}
                >
                  <FormattedMessage id='landing_footer.courses' defaultMessage='Курсы' />
                </Text>
              </Box>
              <Layout flexBasis={[20, 22, 24]} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.opening_the_rhythm',
                  defaultMessage: 'Открытие ритма',
                })}
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.sense_of_time',
                  defaultMessage: 'Ощущение времени',
                })}
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.fifth_dimension',
                  defaultMessage: 'Пятое измрение',
                })}
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.seventh_heaven',
                  defaultMessage: 'Седьмое небо',
                })}
              />
              <Layout flexBasis={[28, 30, 32]} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.connacol',
                  defaultMessage: 'Коннакол',
                })}
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.polyrhythmic_keys',
                  defaultMessage: 'Ключи полиритмии',
                })}
              />
            </Column>
            <Layout flexGrow={[0, 0, 1]} flexBasis={[52, 62, 0]} flexShrink={0} />
            <Column>
              <Box>
                <Text
                  textTransform='uppercase'
                  fontWeight='semiBold'
                  fontSize={['semiMedium', 'medium', 'regular']}
                  lineHeight='default'
                  color={[
                    'text.transparentSmokyWhite',
                    'text.transparentSmokyWhite',
                    'text.smokyWhite',
                  ]}
                >
                  <FormattedMessage
                    id='landing_footer.social_networks'
                    defaultMessage='Соц. сети'
                  />
                </Text>
              </Box>
              <Layout flexBasis={[20, 22, 24]} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.instagram',
                  defaultMessage: 'Instagram',
                })}
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.facebook',
                  defaultMessage: 'Facebook',
                })}
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.telegram',
                  defaultMessage: 'Telegram',
                })}
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.vk',
                  defaultMessage: 'VK',
                })}
              />
            </Column>
            <Layout flexGrow={[0, 0, 4]} />
            <ButtonUp />
          </Box>
          <Layout flexBasis={[83, 83, 77]} />
          <BottomRow />
          <Layout flexBasis={[24, 32, 39]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}
export { ContentFooter }
