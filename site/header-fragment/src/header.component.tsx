import React          from 'react'
import { FC }           from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/layout'
import { Navigation } from './navigation'

const Header: FC = () => {
  return (
    <Box width={['320px', '320px', '1440px']} height='285px' border='1px solid black'>
      <Row>
        <Layout flexBasis={20} />
        <Box flexBasis={214} height='216px' flexShrink={0} border='1px solid black'>
          <Layout> {/* Logo */} </Layout>
        </Box>
        <Layout flexBasis={22} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={66} flexShrink={0} />
          <Layout>
            <Text> барабанный инструктор </Text>
          </Layout>
          <Layout flexBasis={20} flexShrink={0} />
          <Layout>
            <Text> чуприкова марина </Text>
          </Layout>
          <Layout flexBasis={35} flexShrink={0} />
          <Layout>
            <Text> написать в whatsapp </Text>
          </Layout>
          <Layout flexBasis={35} flexShrink={0} />
          <Navigation />
        </Column>
        <Box flexBasis={375} flexShrink={0} border='1px solid black'>
          <Column width='100%'>
            <Layout flexBasis={106} />
            <Row>
              <Layout flexBasis={71} flexShrink={0} />
              <Box height='17px' width='18px' border='1px solid black'></Box>
              <Layout flexBasis={52} flexShrink={0} />
              <Box height='17px' width='18px' border='1px solid black'>
                <Layout>{/* inst */}</Layout>
              </Box>
              <Layout flexBasis={52} flexShrink={0} />
              <Box height='17px' width='18px' border='1px solid black'>
                <Layout>{/* whatsapp */}</Layout>
              </Box>
              <Layout flexBasis={52} flexShrink={0} />
              <Box height='17px' width='18px' border='1px solid black'>
                <Layout>{/* vk */}</Layout>
              </Box>
              <Layout flexBasis={78} flexShrink={0} />
            </Row>
          </Column>
        </Box>
        <Layout flexShrink={0} flexBasis={118} />
      </Row>
    </Box>
  )
}

export { Header }
