import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'

const BackgroundField: FC = ({ children }) => (
  <Row /* position='relative' */ display='flex'>
    <Layout style={{ zIndex: 1 }}>{children}</Layout>
    <Box
      backgroundColor='dullRed'
      position='absolute'
      width='115px'
      right='0px'
      height='100%'
      display='flex'
    />
  </Row>
)

export { BackgroundField }
