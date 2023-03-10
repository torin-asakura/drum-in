import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'

import { TitleProps } from './title.interfaces'

const Title: FC<TitleProps> = ({ price }) => (
  <Box>
    <Text
      textTransform='uppercase'
      fontFamily='secondary'
      fontWeight='bold'
      fontSize={['semiBig', 'semiExtra', 'gigantic']}
      lineHeight='default'
      color='text.blackAmber'
    >
      {price}
    </Text>
  </Box>
)
export { Title }
