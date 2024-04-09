import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'
import { Text }     from '@ui/text'

import { TagProps } from './tag.interfaces'

const Tag: FC<TagProps> = ({ padding, fontSize, fontFamily, stateElem, text }) => (
  <Box
    backgroundColor={stateElem ? 'background.blackAmber' : 'background.transparentWhite'}
    borderRadius='semiHuge'
    padding={padding}
    style={{ transition: '0.3s' }}
  >
    <Text
      fontFamily={fontFamily}
      fontWeight='medium'
      fontSize={fontSize}
      lineHeight='default'
      color='text.smokyWhite'
    >
      {text}
    </Text>
  </Box>
)

export { Tag }
