import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const Education: FC = () => {
  return (
    <Box width={['320px', '320px', '1440px']} border='1px solid black'>
      <Column width='100%' display={['none', 'none', 'flex']}>
        <Layout flexBasis={60} flexShrink={0} />
        <Row>
          <Layout flexBasis={138} flexShrink={0} />
          <Column width='100%'>
            <Box width='572px' height='18px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={50} />
            <Box width='572px' height='300px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
          </Column>
          <Layout flexBasis={118} flexShrink={0} />
          <Box width={536} height={364} border='1px solid black' flexShrink={0}>
            <Layout>img</Layout>
          </Box>
          <Layout flexBasis={74} flexShrink={0} />
        </Row>
        <Layout flexBasis={65} />
      </Column>
      <Column width='100%' display={['flex', 'flex', 'none']} alignItems='center'>
        <Layout flexBasis={25} flexShrink={0} />
        <Row>
          <Layout flexBasis={44} flexShrink={0} />
          <Column width='100%'>
            <Box border='1px solid black'>
              <Layout>
                <Text>header text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={12} />
            <Box border='1px solid black'>
              <Layout>
                <Text>main text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={20}/>
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Box width='320px' height='320px' border='1px solid black'>
              <Layout>
                img
              </Layout>
            </Box>
            <Layout flexBasis={30}/>
            <Row justifyContent='center'>
              <Layout flexBasis={44} flexShrink={0}/>
              <Box border='1px solid black'>
              <Layout>
                <Text> text</Text>
              </Layout>
            </Box>
              <Layout flexBasis={44} flexShrink={0}/>
            </Row>
            <Layout flexBasis={15}/>
            <Box border='1px solid black'>
              <Layout>
                <Text> link text</Text>
              </Layout>
            </Box>
        <Layout flexBasis={25} flexShrink={0} />
      </Column>
    </Box>
  )
}

export { Education }
