import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { CardProps } from './card.interfaces'

const Card: FC<CardProps> = ({ counter, text }) => (
  <Box
    flexShrink={0}
    width={[300, 360,'100%', 430]}
    height={[180, 240, 300]}
    borderRadius={['medium', 'big', 'bigger']}
    border={['normalBoldDark', 'mediumBoldBlackAmber', 'semiBoldDark']}
    backgroundColor='background.smokyWhite'
  >
    <Layout flexBasis={[20, 24, 28]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={[20, 24, 28]} flexShrink={0} />
      <Box>
        <Text
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['semiModerate', 'semiIncreased', 'big']}
          lineHeight='default'
          color='text.blackAmber'
        >
          {counter}
        </Text>
      </Box>
      <Layout flexGrow={2} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize={['medium', 'regular', 'large']}
          lineHeight={['medium', 'medium', 'primary']}
          color='text.blackAmber'
        >
          {text}
        </Text>
      </Box>
      <Layout flexBasis={[20, 24, 28]} flexShrink={0} />
    </Column>
    <Layout flexBasis={[20, 24, 28]} flexShrink={0} />
  </Box>
)

export { Card }
