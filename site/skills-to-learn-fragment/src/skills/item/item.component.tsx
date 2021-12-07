import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

import { ItemProps } from './item.interface'
import { List }      from './list.component'

const Item: FC<ItemProps> = ({ header, main }) => (
  <Box border='1px solid black' zIndex={0}>
    <Column>
      <Layout>{header}</Layout>
      <Column>
        <List main={main} />
      </Column>
    </Column>
  </Box>
)

export { Item }
