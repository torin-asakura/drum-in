import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const Item: FC = () => (
  <Box border='1px solid black' zIndex={0}>
    <Column>
      <Layout>
        <Text>header text</Text>
      </Layout>
      <Layout>
        <Text>text</Text>
      </Layout>
    </Column>
  </Box>
)

export { Item }
