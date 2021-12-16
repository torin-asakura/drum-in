import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { ImageBlock } from '@ui/image'
import { Text }       from '@ui/text'
import { genres }       from '@site/data'

const Portfolio: FC = () => 
    <Box width='100%' height='1100px' display={['none', 'none', 'flex']} justifyContent='center'>
      <Layout width='1440px'>
        <Column width='100%'>
          <Row justifyContent='space-between'>
            <Layout flexBasis={65} flexShrink={0} />
            <Column alignItems='center'>
              <Layout flexBasis={70} />
              <Box width='355px' height='64px' backgroundColor='dullRed' />
              <Layout width='505px' height='392px'>
                <ImageBlock />
              </Layout>
              <Box width='355px' height='74px' backgroundColor='dullRed' />
              <Layout width='505px' height='392px'>
                <ImageBlock />
              </Layout>
              <Box width='355px' height='45px' backgroundColor='dullRed' />
            </Column>
            <Layout flexBasis={160} flexShrink={0} />
            <Column>
              <Layout flexBasis='126px' />
              <Layout>
                <Column>
                  {genres.map((item) => (
                    <>
                      <Layout>
                        <Text
                          color='dullBlack'
                          fontWeight='normal'
                          fontSize='normal'
                          lineHeight='normal'
                        >
                          {item}
                        </Text>
                      </Layout>
                      <Layout flexBasis={40} />
                    </>
                  ))}
                </Column>
              </Layout>
              <Layout flexBasis={82} />
            </Column>
            <Layout flexBasis={143} flexShrink={0} />
          </Row>
          <Layout flexBasis={60} />
        </Column>
      </Layout>
    </Box>

export { Portfolio }
