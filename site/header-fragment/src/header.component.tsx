import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { Navigation } from './navigation'

const Header: FC = () => (
  <Box
    width={['320px', '320px', '1440px']}
    height={['355px', '355px', '285px']}
    border='1px solid black'
    position={['relative', 'relative', 'relative']}
    zIndex={0}
  >
    <Row>
      <Layout flexBasis={20} display={['none', 'none', 'flex']} />
      <Box
        flexBasis={214}
        height='216px'
        flexShrink={0}
        border='1px solid black'
        display={['none', 'none', 'flex']}
      >
        <Layout> {/* Logo */} </Layout>
      </Box>
      <Layout flexBasis={22} flexShrink={0} display={['none', 'none', 'flex']} />
      <Box width='100%' zIndex={[1, 1, 5]} position={['relative', 'relative', 'relative']}>
        <Column width='100%' alignItems={['center', 'center', 'flex-start']}>
          <Layout flexBasis={[30, 30, 66]} flexShrink={0} />
          <Layout>
            <Text> барабанный инструктор </Text>
          </Layout>
          <Layout flexBasis={[14, 14, 20]} flexShrink={0} />
          <Layout>
            <Text> чуприкова марина </Text>
          </Layout>
          <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
          <Layout display={['flex', 'flex', 'none']}>
            <Text> phone number </Text>
          </Layout>
          <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
          <Box
            display={['flex', 'flex', 'none']}
            width='78px'
            height='78px'
            border='1px solid black'
            flexShrink={0}
          >
            <Layout>logo</Layout>
          </Box>
          <Layout flexBasis={[20, 20, 35]} flexShrink={0} />
          <Layout display={['none', 'none', 'flex']}>
            <Text> написать в whatsapp </Text>
          </Layout>
          <Column
            width='100%'
            display={['flex', 'flex', 'none']}
            alignItems='center'
            justifyContent='center'
          >
            <Layout display={['flex', 'flex', 'none']}>
              <Text> ударная установка </Text>
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
            <Layout display={['flex', 'flex', 'none']}>
              <Text> ритм сольфеджо </Text>
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
            <Layout display={['flex', 'flex', 'none']}>
              <Text> о преподавателе </Text>
            </Layout>
            <Layout display={['flex', 'flex', 'none']} flexBasis={14} flexShrink={0} />
            <Layout display={['flex', 'flex', 'none']}>
              <Text> отзывы </Text>
            </Layout>
          </Column>
          <Layout flexBasis={[20, 20, 35]} flexShrink={0} display={['none', 'none', 'flex']} />
          <Navigation />
        </Column>
      </Box>
      <Box
        width={['105px', '105px', '375px']}
        height={['355px', '355px', '285px']}
        flexShrink={0}
        border='1px solid black'
        position={['absolute', 'absolute', 'relative']}
        left={[215, 215, 0]}
        zIndex={[-1, -1, 0]}
      >
        <Column width='100%'>
          <Layout flexBasis={106} />
          <Row>
            <Layout flexBasis={[14, 14, 71]} flexShrink={0} />
            <Box
              height='17px'
              width='18px'
              border='1px solid black'
              display={['none', 'none', 'flex']}
            ></Box>
            <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
            <Box
              height='17px'
              width='18px'
              border='1px solid black'
              display={['none', 'none', 'flex']}
            >
              <Layout>{/* inst */}</Layout>
            </Box>
            <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
            <Box
              height='17px'
              width='18px'
              border='1px solid black'
              display={['none', 'none', 'flex']}
            >
              <Layout>{/* whatsapp */}</Layout>
            </Box>
            <Layout flexBasis={[14, 14, 52]} flexShrink={0} />
            <Box
              height='17px'
              width='18px'
              border='1px solid black'
              display={['none', 'none', 'flex']}
            >
              <Layout>{/* vk */}</Layout>
            </Box>
            <Layout flexBasis={[14, 14, 78]} flexShrink={0} />
          </Row>
        </Column>
      </Box>
      <Layout flexShrink={0} flexBasis={[0, 0, 118]} />
    </Row>
  </Box>
)

export { Header }
