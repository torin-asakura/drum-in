import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useHover }         from '@ui/utils'

import { NavigationBlock }  from '@landing/navigation-fragment'
import { Button }           from '@ui/button'
import { ArrowBottomIcon }  from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

const HeaderBlock = () => {
  const [visibleNav, setVisibleNav] = useState<boolean>(false)
  const [hoverArrow, hoverArrowProps] = useHover()
  return (
    <>
      <NavigationBlock visible={visibleNav} setVisible={setVisibleNav} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[24, 28, 32]} />
        <Box width='100%'>
          <Layout flexBasis={[26, 33, 40]} />
          <Row alignItems='center'>
            <Box width={[120, 170, 220]} height={[24, 34, 44]}>
              <Logo />
            </Box>
            <Layout flexBasis={94} />
            <Box flexShrink={0} width={83} {...hoverArrowProps}>
              <Button
                size='withoutPaddingMicroHeight'
                variant='transparentBackground'
                iconSvg={<ArrowBottomIcon color={hoverArrow ? 'rgb(154,101,242)' : ''} />}
                valueWidth={[0, 0, 16]}
                valueHeight={[0, 0, 16]}
                horizontalLocation='left'
                onClick={() => setVisibleNav(true)}
                fill
              >
                <Row justifyContent='end'>
                  <Text
                    textTransform='uppercase'
                    fontWeight='semiBold'
                    fontSize='medium'
                    lineHeight='default'
                    color='smokyWhite'
                  >
                    <FormattedMessage id='landing_section_courses.courses' defaultMessage='Курсы' />
                  </Text>
                </Row>
              </Button>
            </Box>
            <Layout flexBasis={70} />
            <Box>
              <NextLink path='/'>
                <FormattedMessage id='landing_header.contacts' defaultMessage='Контакты' />
              </NextLink>
            </Box>
            <Row justifyContent='end'>
              <NextLink path='/'>
                <FormattedMessage id='landing_header.connect' defaultMessage='Связаться' />
              </NextLink>
            </Row>
          </Row>
          <Layout flexBasis={[26, 33, 40]} />
        </Box>
        <Layout flexBasis={[24, 28, 32]} />
      </Column>
    </>
  )
}
export { HeaderBlock }
