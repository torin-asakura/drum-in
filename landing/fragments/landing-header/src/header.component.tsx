import React                   from 'react'
import { useState }            from 'react'
import { useEffect }           from 'react'

import { NavigationBlock }     from '@landing/navigation-fragment'
import { Button }              from '@ui/button'
import { MenuIcon }            from '@ui/icons'
import { ImageBlock }          from '@ui/image'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { NextLink }            from '@ui/link'
import { useLocomotiveScroll } from '@forks/react-locomotive-scroll'
import { useHeader }           from '@globals/data'

import { CtaButton }           from './cta-button'
import { DrawerButton }        from './drawer-button'
import { ItemLink }            from './item-link'

const HeaderBlock = () => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false)
  const [isNavBackground, setNavBackground] = useState<boolean>(true)
  const { scroll } = useLocomotiveScroll()

  const { header } = useHeader()

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
      <NavigationBlock headerData={header} visible={visibleDrawer} setVisible={setVisibleDrawer} />
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
                  onClick={() => setVisibleDrawer(true)}
                >
                  <MenuIcon width={40} height={40} />
                </Button>
              </Box>
              <Layout flexBasis={[16, 26, 0]} display={['flex', 'flex', 'none']} />
              <Box width={[120, 170, 220]} height={[24, 34, 44]} flexShrink={0}>
                <NextLink path='/'>
                  <ImageBlock src={header?.logo?.node.sourceUrl || ''} alt='logo' />
                </NextLink>
              </Box>
              <Layout flexBasis={94} display={['none', 'none', 'flex']} />
              <DrawerButton
                title={header?.dropdownList?.title}
                visibleDrawer={visibleDrawer}
                setVisibleDrawer={setVisibleDrawer}
              />
              <Layout flexBasis={70} display={['none', 'none', 'flex']} />
              {header?.links?.map((item) => (
                <ItemLink item={item} />
              ))}
              <CtaButton title={header?.ctaButton} />
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
