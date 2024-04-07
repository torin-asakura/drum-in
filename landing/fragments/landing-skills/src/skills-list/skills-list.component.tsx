import React         from 'react'
import { Box,Layout,Column }           from '@ui/layout'
import {ImageBlock} from '@ui/image'

const SkillsList = () => (
  <>
      <Column fill >
      <Layout flexGrow={1}/>
        <Box  display={['none','none','flex','flex']}>
          <ImageBlock src='https://wp.drumin.pro/wp-content/uploads/2024/04/wide_flags_and_genres.svg'/>
        </Box>
        <Box  display={['flex','flex','none','none']}>
          <ImageBlock src='https://wp.drumin.pro/wp-content/uploads/2024/04/compact_flags_and_genres.svg'/>
        </Box>
      </Column>
  </>
)

export { SkillsList }
