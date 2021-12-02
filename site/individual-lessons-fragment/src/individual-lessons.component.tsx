import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const IndividualLessons: FC = () => (
  <Box
    width={['320px', '320px', '1440px']}
    height={['290px', '290px', '581px']}
    border='1px solid black'
  >
    <Row
      justifyContent='center'
      display={['none', 'none', 'flex']}
      style={{ border: '1px solid black' }}
    >
      <Layout flexBasis={138} flexShrink={0} />
      <Column width='100%' style={{ border: '1px solid black' }}>
        <Layout flexBasis={60} />
        <Layout style={{ border: '1px solid black' }}>
          <Text>individual lessons</Text>
        </Layout>
        <Layout />
        <Layout flexBasis={20} />
        <Layout style={{ border: '1px solid black' }}>
          <Text>individual lessons description</Text>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button width='426px' height='70px' border='1px solid black'>
            <Layout>
              <Text>sign up</Text>
            </Layout>
          </Button>
        </Layout>
        <Layout flexBasis={60} />
      </Column>
      <Layout flexBasis={120} flexShrink={0} />
      <Column style={{ border: '1px solid black' }}>
        <Layout flexBasis={60} />
        <Layout style={{ border: '1px solid black' }}>video</Layout>
        <Layout flexBasis={20} />
      </Column>
      <Layout flexBasis={77} />
    </Row>
    <Column
      width='100%'
      alignItems='center'
      display={['flex', 'flex', 'none']}
      style={{ border: '1px solid black' }}
    >
      <Box border='1px solid black' width='320px' height='290px'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column width='100%' style={{ border: '1px solid black' }}>
          <Layout flexBasis={25} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>
            <Text>header</Text>
          </Layout>
          <Layout flexBasis={30} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>
            <Text>main text</Text>
          </Layout>
          <Layout flexBasis={180} flexShrink={0} />
          <Row
            justifyContent='center'
            display={['flex', 'flex', 'none']}
            style={{ border: '1px solid black' }}
          >
            <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
            <Layout width='26px' height='6px' style={{ border: '1px solid black' }}>
              <Layout>
                <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
              </Layout>
              <Layout flexBasis={10} flexShrink={0} />
              <Layout>
                <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
              </Layout>
            </Layout>
            <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
          </Row>
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
        <Layout flexBasis={20} flexShrink={0} />
      </Box>
      <Layout flexBasis={55} flexShrink={0} />
      <Layout>
        <Button width='237px' height='41px' border='1px solid black'>
          <Layout>
            <Text>Buy</Text>
          </Layout>
        </Button>
      </Layout>
    </Column>
  </Box>
)

export { IndividualLessons }
