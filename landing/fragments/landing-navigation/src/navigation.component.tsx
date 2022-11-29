import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { Drawer }           from '@ui/drawer'
import { ArrowTopIcon }     from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Elements }         from './elements'
import { NavigationProps }  from './navigation.interfaces'

const NavigationBlock: FC<NavigationProps> = ({ visible, setVisible }) => {

  return (
    <Drawer active={visible} onClose={() => setVisible(false)}>
      <Box
        width='100%'
        height={[500, 600, 662]}
        backgroundColor='background.blackAmber'
        borderBottomLeftRadius={['medium', 'extra', 'bigger']}
        borderBottomRightRadius={['medium', 'extra', 'bigger']}
      >
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[16, 25, 32]} flexShrink={0} />
          <Row alignItems='center'>
            <Box width={[120, 170, 220]} height={[24, 34, 44]}>
              <Logo />
            </Box>
            <Layout flexBasis={94} />
            <Box flexShrink={0} width={83}>
              <Button
                size='withoutPaddingMicroHeight'
                variant='transparentBackgroundPurpleText'
                iconSvg={<ArrowTopIcon />}
                valueWidth={[0, 0, 16]}
                valueHeight={[0, 0, 16]}
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
          <Layout flexBasis={[60, 90, 125]} flexGrow={2} />
          <Elements />
          <Layout flexBasis={[55, 30, 40]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Drawer>
  )
}
export { NavigationBlock }
