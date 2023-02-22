import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Drawer }           from '@ui/drawer'
import { ArrowTopIcon }     from '@ui/icons'
import { CrossMenuIcon }    from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Elements }         from './elements'
import { NavigationProps }  from './navigation.interfaces'

const NavigationBlock: FC<NavigationProps> = ({ visible, setVisible }) => (
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
              <Logo />
            </Box>
            <Layout flexBasis={94} display={['none', 'none', 'flex']} />
            <Box display={['none', 'none', 'flex']} flexShrink={0} width={83}>
              <Button
                size='withoutPaddingMicroHeight'
                variant='transparentBackgroundPurpleText'
                iconSvg={<ArrowTopIcon width={16} height={16} />}
                horizontalLocation='left'
                onClick={() => setVisible(false)}
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
            <Layout flexBasis={[0, 45, 70]} />
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
          <Layout flexBasis={[60, 70, 125]} flexGrow={2} />
          <Elements stateHover={stateHover} />
          <Layout flexBasis={[55, 50, 40]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    )}
  </Drawer>
)
export { NavigationBlock }
