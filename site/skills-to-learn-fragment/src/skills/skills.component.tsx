import React           from 'react'
import { FC }          from 'react'

import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Box }         from '@ui/layout'

import { Item }        from './item'
import { SkillsProps } from './skills.interface'

const Skills: FC<SkillsProps> = ({ items }) => (
  <Layout width={['280px', '280px', '730px']} flexGrow={0}>
    <Column>
      {items.textBlock.map((item) => (
        <Row>
          <Layout height={['20px', '20px', '30px']} alignItems='flex-end'>
            <Box
              backgroundColor='dullRed'
              borderRadius='circle'
              width={['11px', '11px', '18px']}
              height={['11px', '11px', '18px']}
              flexShrink={0}
            />
          </Layout>
          <Layout flexBasis={['11px', '11px', '18px']} flexShrink={0} />
          <Item header={item.header} content={item.content} />
        </Row>
      ))}
    </Column>
  </Layout>
)

export { Skills }
