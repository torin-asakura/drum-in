import React              from 'react'
import { FC }             from 'react'

import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Line }           from '@ui/line'

import { ContainerProps } from './container.interface'

const Container: FC<ContainerProps> = ({ children, height }) => (
  <Row>
    <Layout style={{ position: 'relative' }} display='flex'>
      <Layout style={{ zIndex: 1 }}>{children}</Layout>
      <Line height={height} />
    </Layout>
  </Row>
)

export { Container }
