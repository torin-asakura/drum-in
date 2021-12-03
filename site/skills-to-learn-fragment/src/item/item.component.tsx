import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ header, main }) => (
  <Box border='1px solid black' zIndex={0}>
    <Column>
      <Layout>
        <Text>{header}</Text>
      </Layout>
      <Layout>
        <Text>{main}</Text>
      </Layout>
    </Column>
  </Box>
)

export { Item }
