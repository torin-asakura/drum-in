import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

const CourseDescription: FC = () => (
  <Box
    width={['320px', '320px', '1440px']}
    height={['290px', '290px', '722px']}
    border='1px solid black'
  >
    <Layout flexBasis={[20, 20, 137]} />
    <Row style={{ border: '1px solid black' }}>
      <Column alignItems='center' style={{ border: '1px solid black' }} width='100%'>
        <Layout flexBasis={[25, 25, 53]} />
        <Layout display={['none', 'none', 'flex']} style={{ border: '1px solid black' }}>
          course
        </Layout>
        <Layout flexBasis={30} display={['none', 'none', 'flex']} />
        <Layout style={{ border: '1px solid black' }}>rythm</Layout>
        <Layout flexBasis={[30, 30, 39]} />
        <Layout style={{ border: '1px solid black' }} width='517px' height='311px'>
          text
        </Layout>
        <Layout flexBasis={24} flexShrink={0} display={['flex', 'flex', 'none']} />
        <Row
          justifyContent='center'
          display={['flex', 'flex', 'none']}
          style={{ border: '1px solid black' }}
        >
          <Layout style={{ border: '1px solid black' }}>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
          <Layout flexBasis={10} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
        </Row>
        <Layout flexBasis={34} flexShrink={0} display={['flex', 'flex', 'none']} />
        <Layout flexBasis={70} display={['none', 'none', 'flex']} />
        <Layout display={['none', 'none', 'flex']} style={{ border: '1px solid black' }}>
          course description
        </Layout>
        <Layout flexBasis={60} display={['none', 'none', 'flex']} />
        <Layout style={{ border: '1px solid black' }}>sign up</Layout>
        <Layout flexBasis={60} flexShrink={0} display={['none', 'none', 'flex']} />
      </Column>
      <Layout flexBasis={150} flexShrink={0} display={['none', 'none', 'flex']} />
      <Column>
        <Layout flexBasis={65} />
        <Layout
          style={{ border: '1px solid black' }}
          width='494px'
          height='596px'
          display={['none', 'none', 'flex']}
        >
          photo
        </Layout>
      </Column>
    </Row>
    <Layout flexBasis={[20, 20, 118]} />
  </Box>
)

export { CourseDescription }