import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'

export const ContainerMobileSized: FC<string> = ({ children, width }) => (
  <Layout width={width} style={{ position: 'relative' }}>
    {children}
  </Layout>
)
