import React      from 'react'
import { FC }       from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const Footer: FC = () => {
  return (
    <Box width='1440px' height='570px'>
      <Column width='100%'>
        <Row>
          <Box width='720px' height='255px' border='1px solid black'>
            <Row>
              <Layout flexBasis={138} />
              <Column width='100%'>
                <Layout flexBasis={52} />
                <Box width='349px' height='23px' border='1px solid black'>
                  <Layout>
                    <Text>address</Text>
                  </Layout>
                </Box>
                <Layout flexBasis={60} />
                <Box width='469px' height='70px' border='1px solid black'>
                  <Layout>
                    <Text>text</Text>
                  </Layout>
                </Box>
                <Layout flexBasis={52} />
              </Column>
              <Layout flexBasis={119} />
            </Row>
          </Box>
          <Box width='720px' height='255px' border='1px solid black'>
            yandex map
          </Box>
        </Row>
        <Layout flexBasis={60} />
        <Box width='1440px' height='252px' border='1px solid black'>
          <Row>
            <Layout flexBasis='138px' flexShrink={0} />
            <Column>
              <Layout flexBasis={60} />
              <Box width='502px' height='23px' border='1px solid black'>
                <Layout>
                  <Text>text</Text>
                </Layout>
              </Box>
              <Layout flexBasis={56} />
              <Row>
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
                <Layout flexBasis={103} flexShrink={0} />
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
                <Layout flexBasis={103} flexShrink={0} />
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
                <Layout flexBasis={103} flexShrink={0} />
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
              </Row>
            </Column>
            <Layout flexBasis='800px' flexShrink={0} />
          </Row>
        </Box>
      </Column>
    </Box>
  )
}

export { Footer }
