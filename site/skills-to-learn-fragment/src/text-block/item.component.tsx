import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { TextBlockProps } from './text-block.interface'

const Item: FC<TextBlockProps> = ({  display }) => (
  <Box
    border='1px solid black'
    display={display}
    zIndex={0}
  >
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
