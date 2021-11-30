import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Row }    from '@ui/layout'

const Reviews: FC = () => (
  <Box
    width={['320px', '320px', '1440px']}
    height={['240px', '240px', '430px']}
    border='1px solid black'
  >
    <Layout flexBasis={138} flexShrink={0} display={['none', 'none', 'flex']} />
    <Column width='100%' display={['none', 'none', 'flex']}>
      <Box width='116px' height='25px' border='1px solid black'>
        <Layout>
          <Text> text</Text>
        </Layout>
      </Box>
      <Layout flexBasis={56} flexShrink={0} />
      <Row>
        <Box width='527px' height='284px' border='1px solid black'>
          yotube player
        </Box>
        <Layout flexBasis={92} flexShrink={0} />
        <Box width='527px' height='284px' border='1px solid black'>
          yotube player
        </Box>
      </Row>
      <Layout flexBasis={64} />
    </Column>
    <Layout flexBasis={156} flexShrink={0} display={['none', 'none', 'flex']} />
    <Row display={['flex', 'flex', 'none']}>
      <Layout flexBasis={10} />
      <Column width='100%'>
        <Layout flexBasis={15} />
        <Box border='1px solid black'>
          <Layout>
            <Text>reviews</Text>
          </Layout>
        </Box>
        <Layout flexBasis={15} />
        <Box border='1px solid black' width='300px' height='160px'>
          <Layout>youtube player</Layout>
        </Box>
        <Layout flexBasis={10} />
        <Row justifyContent='center' display={['flex', 'flex', 'none']}>
          <Layout width='26px' height='6px'>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
            <Layout flexBasis={10} flexShrink={0} />
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
        </Row>
        <Layout flexBasis={15} />
      </Column>
      <Layout flexBasis={10} />
    </Row>
  </Box>
)

export { Reviews }
