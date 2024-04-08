import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Text }     from '@ui/text'

import { TagProps } from './tag.interfaces'

const TagBlock: FC<TagProps> = ({ text }) => (
  <Box
    width='max-content'
    padding={['0 12px', '0 22px', '0 32px']}
    height={[36, 42, 48]}
    justifyContent='center'
    alignItems='center'
    border={['none', 'boldTransparentWhite', 'boldTransparentWhite']}
    borderRadius={['semiMedium', 'medium', 'medium']}
    backgroundColor='background.transparentWhite'
    flexShrink={0}
  >
    <Text
      textTransform='uppercase'
      fontWeight='semiBold'
      fontSize={['micro', 'semiMedium','semiMedium', 'medium']}
      lineHeight='default'
      color='text.smokyWhite'
    >
      {text}
    </Text>
  </Box>
)

export { TagBlock }
