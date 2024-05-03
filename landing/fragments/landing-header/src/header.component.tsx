import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { NavigationBlock } from '@landing/navigation-fragment'
import { Button }          from '@ui/button'
import { MenuIcon }        from '@ui/icons'
import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { NextLink }        from '@ui/link'

import { CtaButton }       from './cta-button'
import { DrawerButton }    from './drawer-button'
import { HeaderProps }     from './header.interfaces'
import { ItemLink }        from './item-link'
import { Wrapper }         from './wrapper'

const HeaderBlock: FC<HeaderProps> = ({ consultationFormData, consultationData, headerData }) => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false)

  return (
    <>
      <NavigationBlock
        headerData={headerData}
        visible={visibleDrawer}
        setVisible={setVisibleDrawer}
        consultationData={consultationData}
        consultationFormData={consultationFormData}
      />
      <Wrapper>
        <Column width={['100%', '100%', '100%']} alignItems='center'>
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
                  <ImageBlock src={headerData?.logo?.node.sourceUrl || ''} alt='logo' />
                </NextLink>
              </Box>
              <Layout flexBasis={94} display={['none', 'none', 'flex']} />
              <DrawerButton
                title={headerData?.dropdownList?.title}
                visibleDrawer={visibleDrawer}
                setVisibleDrawer={setVisibleDrawer}
              />
              <Layout flexBasis={70} display={['none', 'none', 'flex']} />
              {headerData?.navigationElements?.map((item) => (
                <ItemLink item={item} />
              ))}
              <CtaButton
                consultationData={consultationData}
                consultationFormData={consultationFormData}
                title={headerData?.ctaButton}
              />
            </Row>
            <Layout flexBasis={[26, 33, 40]} />
          </Box>
          <Layout flexBasis={[24, 28, 32]} />
        </Column>
      </Wrapper>
    </>
  )
}
export { HeaderBlock }
