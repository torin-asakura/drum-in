import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const IndividualLessonsMobile:FC = () => 
<Column width='100%' alignItems='center' display={['flex', 'flex', 'none']}>
<Box border='1px solid black' width='320px' height='290px'>
  <Layout flexBasis={20} flexShrink={0} />
  <Column width='100%'>
    <Layout flexBasis={25} flexShrink={0} />
    <Box border='1px solid black'>
      <Layout>
        <Text>header</Text>
      </Layout>
    </Box>
    <Layout flexBasis={30} flexShrink={0} />
    <Box border='1px solid black'>
      <Layout>
        <Text>main text</Text>
      </Layout>
    </Box>
    <Layout flexBasis={180} flexShrink={0} />
    <Row justifyContent='center' display={['flex', 'flex', 'none']}>
      <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
      <Layout width='26px' height='6px'>
        <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
        <Layout flexBasis={10} flexShrink={0} />
        <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
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

export {IndividualLessonsMobile}