import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const Footer: FC = () => (
  <Box width={['320px', '320px', '1440px']} height={['730px', '730px', '570px']}>
    <Column width='100%' display={['none', 'none', 'flex']} style={{ border: '1px solid black' }}>
      <Row style={{ border: '1px solid black' }}>
        <Box width='720px' height='255px' border='1px solid black'>
          <Row style={{ border: '1px solid black' }}>
            <Layout flexBasis={138} />
            <Column width='100%' style={{ border: '1px solid black' }}>
              <Layout flexBasis={52} />
              <Layout style={{ border: '1px solid black' }}>
                <Text>address</Text>
              </Layout>
              <Layout flexBasis={60} />
              <Layout style={{ border: '1px solid black' }}>
                <Text>text</Text>
              </Layout>
              <Layout flexBasis={52} />
            </Column>
            <Layout flexBasis={119} />
          </Row>
        </Box>
        <Layout width='720px' height='255px' style={{ border: '1px solid black' }}>
          yandex map
        </Layout>
      </Row>
      <Layout flexBasis={60} />
      <Box width='1440px' height='252px' border='1px solid black'>
        <Row style={{ border: '1px solid black' }}>
          <Layout flexBasis='138px' flexShrink={0} />
          <Column style={{ border: '1px solid black' }}>
            <Layout flexBasis={60} />
            <Layout style={{ border: '1px solid black' }}>
              <Text>text</Text>
            </Layout>
            <Layout flexBasis={56} />
            <Row style={{ border: '1px solid black' }}>
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
              <Layout flexBasis={103} flexShrink={0} />
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
              <Layout flexBasis={103} flexShrink={0} />
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
              <Layout flexBasis={103} flexShrink={0} />
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
            </Row>
          </Column>
          <Layout flexBasis='800px' flexShrink={0} />
        </Row>
      </Box>
    </Column>
    <Column width='100%' display={['flex', 'flex', 'none']} style={{ border: '1px solid black' }}>
      <Box border='1px solid black' width='320' height='160px'>
        <Row style={{ border: '1px solid black' }}>
          <Layout flexBasis={40} />
          <Column width='100%' style={{ border: '1px solid black' }}>
            <Layout flexBasis={25} />
            <Layout style={{ border: '1px solid black' }}>
              <Text>address header</Text>
            </Layout>
            <Layout flexBasis={25} />
            <Layout style={{ border: '1px solid black' }}>
              <Text>address</Text>
            </Layout>
            <Layout flexBasis={25} />
          </Column>
          <Layout flexBasis={20} />
        </Row>
      </Box>
      <Layout style={{ border: '1px solid black' }}>yandex map</Layout>
      <Box width='320px' height='400px' border='1px solid black'>
        <Row justifyContent='center' style={{ border: '1px solid black' }}>
          <Layout flexBasis={30} />
          <Column width='100%' alignItems='center' style={{ border: '1px solid black' }}>
            <Layout flexBasis={30} />
            <Layout>
              <Button width='237px' height='40px' border='1px solid black'>
                <Layout>
                  <Text>sign up</Text>
                </Layout>
              </Button>
            </Layout>
            <Layout flexBasis={30} />
            <Layout style={{ border: '1px solid black' }}>
              <Text>phone number</Text>
            </Layout>
            <Layout flexBasis={50} />
            <Row justifyContent='center' style={{ border: '1px solid black' }}>
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
              <Layout flexBasis={100} flexShrink={0} />
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
            </Row>
            <Layout flexBasis={100} flexShrink={0} />
            <Row justifyContent='center' style={{ border: '1px solid black' }}>
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
              <Layout flexBasis={100} flexShrink={0} />
              <Layout style={{ border: '1px solid black' }}>icon</Layout>
            </Row>
          </Column>
          <Layout flexBasis={30} />
        </Row>
      </Box>
    </Column>
  </Box>
)

export { Footer }
