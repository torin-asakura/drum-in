import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

import { Item }   from './item'

const SkillsPresentation: FC = () => {
  const columnLeft = ['ПОСТАНОВКА РУК', 'ПОСТАНОВКА НОГ', 'РАЗВИТИЕ КООРДИНАЦИИ']
  const columnRight = ['ЧТЕНИЕ С ЛИСТА', 'ИГРА ПОД МУЗЫКУ', 'ПОСТРОЕНИЕ ПАРТИЙ']
  const rythm = 'РАЗВИТИЕ ЧУВСТВА ВРЕМЕНИ'
  return (
    <Box width={['320px', '320px', '100%']} height={['1075px', '1075px', '585px']}>
      <Layout flexBasis={40} flexShrink={0} />
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
          <Column display={['flex', 'flex', 'none']} width='100%'>
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
        <Item item={[rythm]} />
        <Layout flexBasis={20} flexShrink={0} />
      </Column>
      <Layout flexBasis={80} flexShrink={0} />
    </Box>
  )
}

export { SkillsPresentation }
