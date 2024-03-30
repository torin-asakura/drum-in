import React               from 'react'
import { FC }              from 'react'

import { CtaButton }       from '@landing/header-fragment'
import { DrawerButton }    from '@landing/header-fragment'
import { ItemLink }        from '@landing/header-fragment'
import { Button }          from '@ui/button'
import { Drawer }          from '@ui/drawer'
import { CrossMenuIcon }   from '@ui/icons'
import { ImageBlock }      from '@ui/image'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Box }             from '@ui/layout'

import { Elements }        from './elements'
import { NavigationProps } from './navigation.interfaces'

const NavigationBlock: FC<NavigationProps> = ({ headerData, visible, setVisible }) => (
  <Drawer active={visible} onClose={() => setVisible(false)}>
    {(stateHover) => (
      <Box
        width='100%'
        height={[500, 630, 662]}
        backgroundColor='background.blackAmber'
        borderBottomLeftRadius={['medium', 'extra', 'bigger']}
        borderBottomRightRadius={['medium', 'extra', 'bigger']}
      >
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[16, 25, 32]} flexShrink={0} />
          <Row alignItems='center'>
            <Box display={['flex', 'flex', 'none']} flexShrink={0}>
              <Button
                size='withoutPaddingMicroHeight'
                variant='transparentBackground'
                onClick={() => setVisible(false)}
              >
                <CrossMenuIcon width={40} height={40} />
              </Button>
            </Box>
            <Layout flexBasis={[16, 26, 0]} display={['flex', 'flex', 'none']} />
            <Box width={[120, 170, 220]} height={[24, 34, 44]} flexShrink={0}>
              <ImageBlock src={headerData?.logo?.node.sourceUrl || ''} alt='logo' />
            </Box>
            <Layout flexBasis={94} display={['none', 'none', 'flex']} />
            <DrawerButton
              title={headerData?.dropdownList?.title}
              visibleDrawer={visible}
              setVisibleDrawer={setVisible}
            />
            <Layout flexBasis={[0, 45, 70]} />
            <Box display={['none', 'none', 'flex']}>
              {headerData?.navigationElements?.map((item) => (
                <ItemLink item={item} />
              ))}
            </Box>
            <CtaButton title={headerData?.ctaButton} />
          </Row>
          <Layout flexBasis={[60, 70, 125]} flexGrow={2} />
          <Elements list={headerData?.dropdownList} stateHover={stateHover} />
          <Layout flexBasis={[55, 50, 40]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    )}
  </Drawer>
)

export { NavigationBlock }
