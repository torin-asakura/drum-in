import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'

import { Item }      from './item'
import { useSkills } from './data'

const SkillsPresentation: FC = () => {
  const skills = useSkills()

  const left = skills.filter((skill) => skill.addons.side === 'left')
  const right = skills.filter((skill) => skill.addons.side === 'right')
  const mid = skills.filter((skill) => skill.addons.side === 'unset')

  return (
    <Box width={['320px', '320px', '100%']} height={['1075px', '1075px', '585px']}>
      <Layout flexBasis={40} flexShrink={0} />
      <Column width='100%'>
        <Layout justifyContent='center'>
          <Row display={['none', 'none', 'flex']} justifyContent='center'>
            <Layout>
              <Column>
                <Layout flexBasis={65} />
                {left.map((item) => (
                  <>
                    <Item item={item?.title} picture={item?.addons.picture} />
                    <Layout flexBasis={60} />
                  </>
                ))}
              </Column>
            </Layout>
            <Layout flexBasis={180} display={['none', 'none', 'flex']} />
            <Layout>
              <Column>
                <Layout flexBasis={65} />
                {right.map((item) => (
                  <>
                    <Item item={item?.title} picture={item?.addons.picture} />
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
                {left.map((item) => (
                  <>
                    <Item item={item?.title} picture={item?.addons.picture} />
                    <Layout flexBasis={30} />
                  </>
                ))}
              </Column>
            </Layout>
            <Layout>
              <Column>
                <Layout flexBasis={65} />
                {right.map((item) => (
                  <>
                    <Item item={item?.title} picture={item?.addons.picture} />
                    <Layout flexBasis={30} />
                  </>
                ))}
              </Column>
            </Layout>
          </Column>
        </Layout>
        <Item item={mid[0]?.title} picture={mid[0]?.addons.picture} />
        <Layout flexBasis={20} flexShrink={0} />
      </Column>
      <Layout flexBasis={80} flexShrink={0} />
    </Box>
  )
}

export { SkillsPresentation }
