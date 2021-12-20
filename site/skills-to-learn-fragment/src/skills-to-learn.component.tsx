import React            from 'react'

import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'

import { SkillsList }   from './skills-list'
import { AskQuestions } from './ask-questions'

const SkillsToLearn = () => {
  return (
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
    </Column>
  )
}

export { SkillsToLearn }
