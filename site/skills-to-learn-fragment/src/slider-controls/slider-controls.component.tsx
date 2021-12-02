import React from 'react'
import {FC} from 'react'

import {Row} from '@ui/layout'
import {Layout} from '@ui/layout'
import {Box} from '@ui/layout'

const SliderControls:FC = () => 
<Row justifyContent='center' display={['flex', 'flex', 'none']}>
<Layout width='26px' height='6px'>
  <Layout>
    <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
  </Layout>
  <Layout flexBasis={10} flexShrink={0} />
  <Layout>
    <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
  </Layout>
</Layout>
</Row>

export {SliderControls}
