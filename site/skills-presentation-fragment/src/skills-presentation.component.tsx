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
        <Layout flexBasis={65} />
        <Row flexWrap='wrap' justifyContent='center'>
          {skills.map((item) => (
            <>
              <Item item={item} />
              <Layout flexBasis={200} />
            </>
          ))}
        </Row>
        <Layout flexBasis={65} />
      </Column>
      <Layout flexBasis={80} flexShrink={0} />
    </Box>
  )
}

export { SkillsPresentation }
