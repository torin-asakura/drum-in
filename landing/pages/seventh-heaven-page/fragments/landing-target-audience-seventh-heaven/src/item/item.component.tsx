import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interfaces'

const ItemCard: FC<ItemProps> = ({
  number,
  text,
  positionVertical,
  positionHorizontal,
  zIndex,
}) => (
  <Box
    left={positionHorizontal}
    top={positionVertical}
    width={[246, '100%', '100%',1213]}
    height={[109, 200, 294]}
    border={['normalBoldDark', 'mediumBoldBlackAmber', 'veryBoldDark']}
    borderRadius={['medium', 'big', 'bigger']}
    backgroundColor='background.smokyWhite'
    zIndex={zIndex}
  >
    <Layout flexBasis={[12, 26, 40]} flexShrink={0} />
    <Column width='100%' justifyContent='center'>
      <Row justifyContent='end'>
        <Text
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['semiModerate', 'godzilla', 'gigantic']}
          lineHeight='default'
          color='text.blackAmber'
        >
          {number}
        </Text>
      </Row>
      <Layout display={['flex', 'flex', 'none']} flexBasis={[15, 10, 0]} />
      <Box width={['100%', '100%', 570]}>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'large', 'mild']}
          lineHeight='medium'
          color='text.blackAmber'
        >
          {text}
        </Text>
      </Box>
    </Column>
    <Layout flexBasis={[12, 26, 40]} flexShrink={0} />
  </Box>
)

export { ItemCard }
