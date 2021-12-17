import React               from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'

import { ImageBlock }      from './image-block'

import { Skills }          from './skills'
import { BackgroundField } from './backgound-field'
import { SkillsList } from './skills-list'

const SkillsToLearn = () => {
 
  return (
    <Box width={['320px', '320px', '100%']}  justifyContent='center'>
      <Layout display={['none','none','flex']}>
      <SkillsList/>
      </Layout>
      <Layout display={['flex','flex','none']}>
        <SkillsList/>
        </Layout>
    </Box>
  )
}

export { SkillsToLearn }
