import React               from 'react'
import { FC }              from 'react'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'

import { SlideImageProps } from './slide-image.interfaces'

const SlideImage: FC<SlideImageProps> = ({ pathImage }) =>
  pathImage ? (
    <Box
      width={[246, 350, 480]}
      height={[164, 240, 320]}
      overflow='hidden'
      borderRadius={['medium', 'extra', 'bigger']}
      border={['none', 'none', 'mediumBoldBlackAmber']}
    >
      <ImageBlock src={pathImage} />
    </Box>
  ) : null

export { SlideImage }
