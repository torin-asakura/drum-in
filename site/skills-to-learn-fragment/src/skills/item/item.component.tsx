import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interface'
import { List }      from './list.component'

const Item: FC<ItemProps> = ({ header, content }) => (
  <Box>
    <Column>
      <Layout>
        <Text
          color='dullBlack'
          fontSize={['small', 'small', 'big']}
          fontWeight='bold'
          lineHeight={['normal', 'normal', 'normal']}
        >
          {header}
        </Text>
      </Layout>
      <Layout flexBasis={20} />
      <Column>
        <List content={content} />
        <Layout flexBasis={40} />
      </Column>
    </Column>
  </Box>
)

export { Item }
