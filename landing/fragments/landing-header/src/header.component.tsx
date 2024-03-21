import React                   from 'react'
import { FormattedMessage }    from 'react-intl'
import { useState }            from 'react'
import { useEffect }           from 'react'

import { Consultation }        from '@landing/consultation'
import { MobileConsultation }  from '@landing/consultation'
import { NavigationBlock }     from '@landing/navigation-fragment'
import { Button }              from '@ui/button'
import { ArrowBottomIcon }     from '@ui/icons'
import { MenuIcon }            from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { NextLink }            from '@ui/link'
import { Logo }                from '@ui/logo'
import { Text }                from '@ui/text'
import { useLocomotiveScroll } from '@forks/react-locomotive-scroll'
import { useHover }            from '@ui/utils'
import {useHeader} from '@globals/data'

const HeaderBlock = () => {
  const [visibleNav, setVisibleNav] = useState<boolean>(false)
  const [hoverArrow, hoverArrowProps] = useHover()
  const [hoverLink, hoverLinkProps] = useHover()
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  // const header = useHeader()

  const { scroll } = useLocomotiveScroll()
  const [isNavBackground, setNavBackground] = useState<boolean>(true)

  const {header} = useHeader()
  console.log(header)
  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (instance) => {
        if (instance.scroll.y === 0) {
          setNavBackground(false)
        }
        if (instance.delta.y > instance.scroll.y && isNavBackground) {
          setNavBackground(false)
        }
        if (instance.delta.y < instance.scroll.y && !isNavBackground) {
          setNavBackground(true)
        }
      })
    }
  }, [scroll, isNavBackground, setNavBackground])

  return (
    <>
      <NavigationBlock visible={visibleNav} setVisible={setVisibleNav} />
      <Box
        width='100%'
        zIndex={100}
        height={[72, 72, 109]}
        position='fixed'
        justifyContent='center'
        backgroundColor={isNavBackground ? 'background.blackAmber' : 'transparent'}
        style={{ transition: '0.3s' }}
      >
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
                    >
                      <FormattedMessage id='landing_header.courses' />
                    </Text>
                  </Row>
                </Button>
              </Box>
              <Layout flexBasis={70} display={['none', 'none', 'flex']} />
              <Box display={['none', 'none', 'flex']} {...hoverLinkProps}>
                <NextLink path={'/'}>
                  <Text
                    color={hoverLink ? 'text.purple' : 'text.smokyWhite'}
                    style={{ transition: '0.3s' }}
                  >
                    headerTitle
                  </Text>
                </NextLink>
              </Box>
              <Row justifyContent='end' display={['none', 'flex', 'flex']}>
                <Button
                  size='withoutPaddingMicroHeight'
                  variant='transparentBackground'
                  onClick={() => setVisibleModal(true)}
                >
                  <Text
                    textTransform='uppercase'
                    fontWeight='semiBold'
                    fontSize={['semiMedium', 'medium', 'medium']}
                    lineHeight='default'
                  >
                    headerNameButton
                  </Text>
                </Button>
              </Row>
              <Row justifyContent='end' display={['flex', 'none', 'none']}>
                <Button
                  size='withoutPaddingMicroHeight'
                  variant='transparentBackground'
                  onClick={() => setVisibleModalMobile(true)}
                >
                  <Text
                    textTransform='uppercase'
                    fontWeight='semiBold'
                    fontSize={['semiMedium', 'medium', 'medium']}
                    lineHeight='default'
                  >
                    headerNameButton
                  </Text>
                </Button>
              </Row>
              <Consultation activeRender={visibleModal} onClose={() => setVisibleModal(false)} />
              <MobileConsultation
                activeRender={visibleModalMobile}
                onClose={() => setVisibleModalMobile(false)}
              />
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
