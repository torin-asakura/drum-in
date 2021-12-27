import React                      from 'react'
import { FC }                     from 'react'

import { Layout }                 from '@ui/layout'
import { Line }                   from '@ui/line'

import { ContainerRelativeProps } from './container-relative.interface'

export const ContainerRelative: FC<ContainerRelativeProps> = ({ children, width, height }) => (
  <Layout width={width} style={{ position: 'relative' }}>
    <Layout style={{ zIndex: 1 }}>{children}</Layout>
    <Line height={height} />
  </Layout>
)
