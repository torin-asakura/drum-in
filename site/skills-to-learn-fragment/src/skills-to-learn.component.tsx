import React            from 'react'

import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Line }         from '@ui/line'

import { SkillsList }   from './skills-list'
import { AskQuestions } from './ask-questions'

const SkillsToLearn = () => (
  <Layout style={{ position: 'relative' }}>
    <Column width='100%'>
      <Box width={['320px', '320px', '100%']} justifyContent='center'>
        <Layout display={['none', 'none', 'flex']}>
          <SkillsList />
        </Layout>
        <Layout display={['flex', 'flex', 'none']}>
          <SkillsList />
        </Layout>
      </Box>
      <Layout display={['flex', 'flex', 'none']}>
        <AskQuestions />
      </Layout>
      <Layout flexBasis={30} flexShrink={0} display={['flex', 'flex', 'none']}>
        <Line height='30px' />
      </Layout>
    </Column>
  </Layout>
)

export { SkillsToLearn }
