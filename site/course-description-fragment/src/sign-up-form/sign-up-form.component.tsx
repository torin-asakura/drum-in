import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Input }  from '@ui/input'

const SignUpFrom: FC = () => (
  <Box width='611px' height='461px' border='1px solid black'>
    <Layout flexBasis={92} />
    <Column style={{ border: '1pxsolid black' }}>
      <Layout flexBasis={64} />
      <Layout style={{ border: '1pxsolid black' }}>
        <Input />
      </Layout>
      <Layout flexBasis={64} />
      <Layout style={{ border: '1pxsolid black' }}>
        <Input />
      </Layout>
      <Layout flexBasis={64} />
      <Layout style={{ border: '1pxsolid black' }} width='426px' height='70px'>
        sign up
      </Layout>
      <Layout flexBasis={64} />
    </Column>
    <Layout flexBasis={92} />
  </Box>
)

export { SignUpFrom }
