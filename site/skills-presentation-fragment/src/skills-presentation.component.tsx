import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { columnLeft }  from '@site/data'
import { columnRight } from '@site/data'

import { Item }        from './item'

const SkillsPresentation: FC = () => (
  <Box width={['320px', '320px', '1440px']} height={['1075px', '1075px', '585px']}>
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

export { SkillsPresentation }
