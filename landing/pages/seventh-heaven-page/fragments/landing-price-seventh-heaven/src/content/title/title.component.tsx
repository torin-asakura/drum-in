import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Space }      from '@ui/text'
import { Text }       from '@ui/text'

import { TitleProps } from './title.interfaces'

const Title: FC<TitleProps> = ({ costPerMonth, currency }) => (
  <>
    <Box display={['none', 'none', 'flex']}>
      <Text
        textTransform='uppercase'
        fontFamily='secondary'
        fontWeight='bold'
        fontSize='gigantic'
        lineHeight='default'
        color='text.blackAmber'
      >
        {currency}
        <Space />
        {costPerMonth}
      </Text>
    </Box>
    <Box display={['flex', 'flex', 'none']}>
      <Box flexShrink={0}>
        <Text
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['semiBig', 'semiExtra', 'semiExtra']}
          lineHeight='default'
          color='text.blackAmber'
        >
          {currency}
          <Space />
        </Text>
      </Box>
      <Box flexShrink={0}>
        <Text
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['regular', 'semiModerate', 'semiModerate']}
          lineHeight='default'
          color='text.blackAmber'
        >
          {costPerMonth}
        </Text>
      </Box>
    </Box>
  </>
)
export { Title }
