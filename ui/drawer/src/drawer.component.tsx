import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'

import { Button }           from '@ui/button'
import { ArrowTopIcon }     from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Backdrop }         from './backdrop'
import { DrawerProps }      from './drawer.interfaces'
import { Navigation }       from './navigation'
import { Renderer }         from './renderer'

const Drawer: FC<DrawerProps> = ({ active, onClose }) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 900 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Backdrop onClick={onClose} />
    </motion.div>
    <motion.div
      style={{ position: 'fixed', left: 0, top: '-100%', width: '100%', zIndex: 9999 }}
      animate={{ top: 0 }}
      exit={{ top: '-100%' }}
      transition={{ duration: 0.5 }}
      id='drawer'
    >
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
                onClick={onClose}
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
          <Navigation />
          <Layout flexBasis={[55, 30, 40]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </motion.div>
  </Renderer>
)
export { Drawer }
