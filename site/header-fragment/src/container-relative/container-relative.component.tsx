import React      from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Line }   from '@ui/line'

export const ContainerRelative: FC<string> = ({ children, width, height }) => (
  <Layout width={width} style={{ position: 'relative' }}>
    <Layout style={{ zIndex: 1 }}>{children}</Layout>
    <Line height={height} />
  </Layout>
)
