import React          from 'react'
import { FC }         from 'react'

import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'

import { SlideProps } from './slide.interfaces'

const Slide: FC<SlideProps> = ({ pathImage, alt }) => (
  <Box
    width={[300, 400, 600, 900]}
    height={[200, 320, 390, 645]}
    borderRadius='bigger'
    border='mediumBoldSmokyWhite'
    overflow='hidden'
  >
    <ImageBlock alt={alt} src={pathImage} />
  </Box>
)

export { Slide }
