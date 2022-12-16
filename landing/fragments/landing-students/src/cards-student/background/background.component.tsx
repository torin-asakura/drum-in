import React          from 'react'

import { Background } from '@ui/background'
import { Layout }     from '@ui/layout'
import { Box }        from '@ui/layout'

const BackgroundBlock = () => (
  <Box position='relative' height={130} overflow='hidden'>
    <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
    <Layout flexBasis={40} flexShrink={0} />
    <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
    <Layout flexBasis={40} flexShrink={0} />
    <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
    <Layout flexBasis={40} flexShrink={0} />
    <Box width={430} height={135} border='veryBoldSmokyWhiteDashed' borderRadius='big' />
    <Background
      position='absolute'
      width='100%'
      height='100%'
      left={0}
      bottom={0}
      gradient='verticalTransparentToBlackGradient'
    />
  </Box>
)
export { BackgroundBlock }
