import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { NavigationBlock }  from '@landing/navigation-fragment'
import { Button }           from '@ui/button'
import { ArrowBottomIcon }  from '@ui/icons'
import { MenuIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

const HeaderBlock = () => {
  const [visibleNav, setVisibleNav] = useState<boolean>(false)
  const [hoverArrow, hoverArrowProps] = useHover()
  return (
    <>
      <NavigationBlock visible={visibleNav} setVisible={setVisibleNav} />
      <Box
        width='100%'
        zIndex={1000}
        height={[72, 72, 109]}
        position='fixed'
        justifyContent='center'>
        <Column width={['100%', '100%', 1920]} alignItems='center'>
          <Layout flexBasis={[24, 28, 32]} />
          <Box width='100%'>
            <Layout flexBasis={[26, 33, 40]} />
            <Row alignItems='center'>
              <Box display={['flex', 'flex', 'none']} flexShrink={0}>
                <Button
                  size='withoutPaddingMicroHeight'
                  variant='transparentBackground'
                  onClick={() => setVisibleNav(true)}
                >
                  <MenuIcon width={40} height={40} />
                </Button>
              </Box>
              <Layout flexBasis={[16, 26, 0]} display={['flex', 'flex', 'none']} />
              <Box width={[120, 170, 220]} height={[24, 34, 44]} flexShrink={0}>
                <Logo />
              </Box>
              <Layout flexBasis={94} display={['none', 'none', 'flex']} />
              <Box
                display={['none', 'none', 'flex']}
                flexShrink={0}
                width={83}
                {...hoverArrowProps}
              >
                <Button
                  size='withoutPaddingMicroHeight'
                  variant='transparentBackground'
                  iconSvg={
                    <ArrowBottomIcon
                      width={16}
                      height={16}
                      color={hoverArrow ? 'rgb(154,101,242)' : ''}
                    />
                  }
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
                      <FormattedMessage id='landing_header.courses' defaultMessage='Курсы' />
                    </Text>
                  </Row>
                </Button>
              </Box>
              <Layout flexBasis={70} display={['none', 'none', 'flex']} />
              <Box display={['none', 'none', 'flex']}>
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
      </Box>
    </>
  )
}
export { HeaderBlock }
