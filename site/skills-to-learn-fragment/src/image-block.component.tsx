import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { ImageBlockProps } from './image-block.interface'

const ImageBlock: FC<ImageBlockProps> = ({ top, left, position, zIndex }) => (
  <Box
    top={top}
    left={left}
    zIndex={zIndex}
    position={position}
    flexShrink={0}
    width={[320, 320, 490]}
    height={[320, 320, 500]}
    border='1px solid black'
  >
    <Layout>img</Layout>
  </Box>
)

export { ImageBlock }
