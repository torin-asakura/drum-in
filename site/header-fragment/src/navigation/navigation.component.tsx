import React        from 'react'
import { useIntl }  from 'react-intl'
import { useState } from 'react'

import { Box }      from '@ui/layout'
import { Row }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'
import { Button }   from '@ui/button'

import messages     from '../messages'

const Navigation = () => {
  const intl = useIntl()
  const [line, setLine] = useState(false)
  return (
    <Box
      width='995px'
      height='44px'
      flexShrink={0}
      alignItems='center'
      zIndex={2}
      display={['none', 'none', 'flex']}
      backgroundColor='semiTransparent'
    >
      <Layout flexBasis={11} flexShrink={0} />
      <Row justifyContent='center'>
        <Layout>
          <Button
            size='ghost'
            variant='ghost'
            onMouseOver={() => setLine('rythm')}
            onMouseLeave={() => setLine(false)}
          >
            <Box height='20px' borderBottom={line === 'rythm' ? '2px solid black' : 'none'}>
              <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.rythm)}
              </Text>
            </Box>
          </Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button
            size='ghost'
            variant='ghost'
            onMouseOver={() => setLine('drum')}
            onMouseLeave={() => setLine(false)}
          >
            <Box height='20px' borderBottom={line === 'drum' ? '2px solid black' : 'none'}>
              <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.drum)}
              </Text>
            </Box>
          </Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button
            size='ghost'
            variant='ghost'
            onMouseOver={() => setLine('about')}
            onMouseLeave={() => setLine(false)}
          >
            <Box height='20px' borderBottom={line === 'about' ? '2px solid black' : 'none'}>
              <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.instructorAbout)}
              </Text>
            </Box>
          </Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button
            size='ghost'
            variant='ghost'
            onMouseOver={() => setLine('reviews')}
            onMouseLeave={() => setLine(false)}
          >
            <Box height='20px' borderBottom={line === 'reviews' ? '2px solid black' : 'none'}>
              <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.reviews)}
              </Text>
            </Box>
          </Button>
        </Layout>
        <Layout flexBasis={11} />
      </Row>
    </Box>
  )
}

export { Navigation }
