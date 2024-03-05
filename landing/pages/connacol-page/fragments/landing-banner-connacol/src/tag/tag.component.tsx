import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Text }     from '@ui/text'

import { TagProps } from './tag.interfaces'

const TagBlock: FC<TagProps> = ({ text }) => (
  <Box
    width='max-content'
    flexShrink={0}
    height={[36, 42, 48]}
    padding={['0 12px', '0 22px', '0 32px']}
    justifyContent='center'
    alignItems='center'
    border={['none', 'boldTransparentWhite', 'boldTransparentWhite']}
    borderRadius={['semiMedium', 'medium', 'medium']}
    backgroundColor='background.transparentWhite'
  >
    <Text
      textTransform='uppercase'
      fontWeight='semiBold'
      fontSize={['micro', 'semiMedium', 'medium']}
      lineHeight='default'
      color='text.smokyWhite'
    >
      {text}
    </Text>
  </Box>
)

export { TagBlock }
