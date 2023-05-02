import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { forwardRef }       from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { BottomRow }        from './bottom-row'
import { ButtonUp }         from './button-up'
import { FooterProps }      from './footer.interfaces'
import { LinkSocial }       from './link-social'
import { useFooter }        from './data'

const FooterBlock = forwardRef<HTMLDivElement, FooterProps>(({ buttonUp = true }, ref: any) => {
  const footer = useFooter()

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
              {footer?.menuCourses?.nodes?.map(({ title, menuCourse }, index) => {
                if (index === 3) {
                  return (
                    <React.Fragment key={index}>
                      <NextLink path={menuCourse.link} target='_blank'>
                        <Text
                          fontFamily='secondary'
                          fontWeight='bold'
                          fontSize={['medium', 'regular', 'regular']}
                        >
                          {title}
                        </Text>
                      </NextLink>
                      <Layout flexBasis={[28, 30, 32]} />
                    </React.Fragment>
                  )
                }
                return (
                  <React.Fragment key={index}>
                    <NextLink path={menuCourse.link} target='_blank'>
                      <Text
                        fontFamily='secondary'
                        fontWeight='bold'
                        fontSize={['medium', 'regular', 'regular']}
                      >
                        {title}
                      </Text>
                    </NextLink>
                    <Layout flexBasis={16} />
                  </React.Fragment>
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
              {footer?.fragmentNewItem?.footer?.networksList?.map(({ name, link }, index: number) => (
                <React.Fragment key={index}>
                  <LinkSocial text={name} path={link} />
                  <Layout flexBasis={16} />
                </React.Fragment>
              ))}
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
