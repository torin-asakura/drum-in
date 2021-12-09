import React           from 'react'
import { FC }          from 'react'

import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Box }         from '@ui/layout'

import { Item }        from './item'
import { SkillsProps } from './skills.interface'

const Skills: FC<SkillsProps> = ({ items }) =>
  items !== null
    ? items.map((item) => (
        <>
          <Row>
            <Layout>
              <Box
                height={['11px', '11px', '18px']}
                width={['11px', '11px', '18px']}
                backgroundColor='dullRed'
                borderRadius={50}
              />
            </Layout>
            <Layout flexBasis={['11px', '11px', '18px']} flexShrink={0} />
            <Layout flexBasis={['11px', '11px', '18px']} />
            <Item header={item !== null ? item[0] : null} main={item !== null ? item[1] : null} />
          </Row>
          <Layout flexBasis={40} flexShrink={0} />
        </>
      ))
    : null

export { Skills }
