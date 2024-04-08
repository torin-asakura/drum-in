import React          from 'react'
import { FC }         from 'react'

import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'

import { SlideProps } from './slide.interfaces'

const Slide: FC<SlideProps> = ({ pathImage, alt }) => (
  <Box
    width={[300, 600, 660, 900]}
    height={[215, 425, 450, 645]}
    borderRadius='bigger'
    border='mediumBoldSmokyWhite'
    overflow='hidden'
  >
    <ImageBlock alt={alt} src={pathImage} />
  </Box>
)

export { Slide }
