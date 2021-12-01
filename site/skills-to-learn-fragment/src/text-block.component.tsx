import React      from 'react'
import {FC} from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

import { TextBlockProps } from './text-block.interface'

const TextBlock:FC<TextBlockProps> = ({ width, height, display, position, zIndex }) => (
  <Box
    width={width}
    height={height}
    border='1px solid black'
    display={display}
    position={position}
    zIndex={zIndex}
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

export { TextBlock }
