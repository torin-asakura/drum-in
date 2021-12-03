import React      from 'react'
import {FC} from 'react'

import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Box }    from '@ui/layout'

import { Item }   from '../item'
import { SkillsProps } from './skills.interface'

const Skills:FC<SkillsProps> = ({ skills }) => {
  return skills.map((item) => (
    <>
      <Row style={{ border: '1px solid black' }}>
        <Layout>
          <Box
            height={['11px', '11px', '18px']}
            width={['11px', '11px', '18px']}
            border='1px solid black'
            borderRadius={50}
          />
        </Layout>
        <Layout flexBasis={['11px', '11px', '18px']} flexShrink={0} />
        <Layout flexBasis={['11px', '11px', '18px']} />
        <Item header={item[0]} main={item[1]} />
      </Row>
      <Layout flexBasis={40} flexShrink={0} />
    </>
  ))
}

export { Skills }
