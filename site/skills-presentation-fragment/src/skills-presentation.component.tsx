import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

import { Item }   from './item.component'

const SkillsPresentation: FC = () => {
  const skills = [
    'постановка рук',
    'постановка ног',
    'развитие координации',
    'чтение с листа',
    'игра под музыку',
    'построение партий',
    'развитие чувства времени',
  ]
  return (
    <Box
      width={['320px', '320px', '1440px']}
      height={['1075px', '1075px', '585px']}
      border='1px solid black'
    >
      <Layout flexBasis={80} flexShrink={0} />
      <Column width='100%' justifyContent='center'>
        <Layout flexBasis={[120, 120, 65]} flexShrink={0} />
        <Row width='100%' flexWrap='wrap' justifyContent='center'>
          {skills.map((item) => (
            <>
              <Layout flexBasis={[30, 30, 100]} />
              <Layout width='420px' height='140px'>
                <Item item={item} />
              </Layout>
              <Layout flexBasis={[30, 30, 100]} />
            </>
          ))}
        </Row>
        <Layout flexBasis={[30, 30, 65]} flexShrink={0} />
      </Column>
      <Layout flexBasis={80} flexShrink={0} />
    </Box>
  )
}

export { SkillsPresentation }
