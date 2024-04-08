import React               from 'react'
import { FC }              from 'react'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'

import { SkillsListProps } from './skills-list.interfaces'

const SkillsList: FC<SkillsListProps> = ({ images }) => (
    <Column fill>
      <Layout flexGrow={1} />
      <Box display={['none', 'none', 'flex', 'flex']}>
        <ImageBlock src={images?.wideComposition?.node.sourceUrl || ''} />
      </Box>
      <Box display={['flex', 'flex', 'none', 'none']}>
        <ImageBlock src={images?.compactComposition?.node.sourceUrl || ''} />
      </Box>
    </Column>
)

export { SkillsList }
