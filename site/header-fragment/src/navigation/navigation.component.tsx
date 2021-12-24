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
      <Row justifyContent='center'  >
        <Link onMouseOver={()=>setLine('rythm')} >
          {console.log(setLine)}
          <Layout>
            <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                textDecoration ={line==='rythm'?'underline':'none'}
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.rythm)}
             </Text>
        </Layout>
        </Link>
        <Layout flexBasis={20} />
        <Layout>
              <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.drum)}
              </Text>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
              <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.instructorAbout)}
              </Text>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
              <Text
                color='black'
                fontSize='big'
                fontWeight='normal'
                lineHeight='regular'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.reviews)}
              </Text>
        </Layout>
        <Layout flexBasis={11} />
      </Row>
    </Box>
  )
}

export { Navigation }
