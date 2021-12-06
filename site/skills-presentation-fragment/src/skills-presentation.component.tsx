import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

import { Item }   from './item'

const SkillsPresentation: FC = () => {
  const columnLeft = ['постановка рук', 'постановка ног', 'развитие координации']
  const columnRight = ['чтение с листа', 'игра под музыку', 'построение партий']
  return (
    <Box
      width={['320px', '320px', '1440px']}
      height={['1075px', '1075px', '585px']}
      border='1px solid black'
    >
      <Layout flexBasis={80} flexShrink={0} />
      <Column width='100%'>
        <Layout justifyContent='center'>
          <Row display={['none', 'none', 'flex']} justifyContent='center'>
            <Layout>
              <Column>
                <Layout flexBasis={65} />
                {columnLeft.map((item) => (
                  <>
                    <Item item={item} />
                    <Layout flexBasis={60} />
                  </>
                ))}
              </Column>
            </Layout>
            <Layout flexBasis={180} display={['none', 'none', 'flex']} />
            <Layout>
              <Column>
                <Layout flexBasis={65} />
                {columnRight.map((item) => (
                  <>
                    <Item item={item} />
                    <Layout flexBasis={60} />
                  </>
                ))}
              </Column>
            </Layout>
          </Row>
          <Column display={['flex', 'flex', 'none']}>
            <Layout>
              <Column>
                <Layout flexBasis={65} />
                {columnLeft.map((item) => (
                  <>
                    <Item item={item} />
                    <Layout flexBasis={30} />
                  </>
                ))}
              </Column>
            </Layout>
            <Layout>
              <Column>
                <Layout flexBasis={65} />
                {columnRight.map((item) => (
                  <>
                    <Item item={item} />
                    <Layout flexBasis={30} />
                  </>
                ))}
              </Column>
            </Layout>
          </Column>
        </Layout>
        <Item item={['развитие чувства времени']} />
      </Column>
      <Layout flexBasis={80} flexShrink={0} />
    </Box>
  )
}

export { SkillsPresentation }
