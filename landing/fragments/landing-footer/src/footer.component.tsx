import React                         from 'react'
import { FormattedMessage }          from 'react-intl'
import { forwardRef }                from 'react'
import { useEffect }                 from 'react'
import { useState }                  from 'react'
import { useIntl }                   from 'react-intl'

import { Navigation as NNavigation } from '@shared/data'
import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Logo }                      from '@ui/logo'
import { Text }                      from '@ui/text'
import { useMockedNavigation }       from '@shared/data'

import { BottomRow }                 from './bottom-row'
import { ButtonUp }                  from './button-up'
import { FooterProps }               from './footer.interfaces'
import { LinkSocial }                from './link-social'

const FooterBlock = forwardRef<HTMLDivElement, FooterProps>(({ buttonUp = true }, ref: any) => {
  const { formatMessage } = useIntl()
  const { navigation: navigationData } = useMockedNavigation()
  const [navigation, setNavigation] = useState<NNavigation[]>([])

  useEffect(() => {
    setNavigation(navigationData)
    // eslint-disable-next-line
  }, [])

  return (
    <Row justifyContent='center' ref={ref}>
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
              {navigation.map(({ title, path }, index) => {
                if (index === 3) {
                  return (
                    <>
                      <LinkSocial text={title} path={path} />
                      <Layout flexBasis={[28, 30, 32]} />
                    </>
                  )
                }
                return (
                  <>
                    <LinkSocial text={title} path={path} />
                    <Layout flexBasis={16} />
                  </>
                )
              })}
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
                path='/'
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.facebook',
                  defaultMessage: 'Facebook',
                })}
                path='/'
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.telegram',
                  defaultMessage: 'Telegram',
                })}
                path='/'
              />
              <Layout flexBasis={16} />
              <LinkSocial
                text={formatMessage({
                  id: 'landing_footer.vk',
                  defaultMessage: 'VK',
                })}
                path='/'
              />
            </Column>
            <Layout flexGrow={[0, 0, 4]} />
            <ButtonUp buttonUp={buttonUp} />
          </Box>
          <Layout flexBasis={[83, 83, 77]} />
          <BottomRow />
          <Layout flexBasis={[24, 32, 39]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
})

export { FooterBlock }
