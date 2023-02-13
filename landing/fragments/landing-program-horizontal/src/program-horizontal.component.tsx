import React                from 'react'

import { Box }              from '@ui/layout'


const ProgramHorizontalBlock = () => {

  return (
       <Box display='block' position='relative' height={1920} id='scroll'>
        <Box data-scroll data-scroll-sticky data-scroll-target='#scroll'>
     <Box data-scroll data-scroll-direction="horizontal" data-scroll-speed='9' data-scroll-target='#scroll'>
       <Box flexShrink={0} width={1000} height='50vh' backgroundColor='orange' />
       <Box flexShrink={0} width={1000} height='50vh' backgroundColor='pink' />
       <Box flexShrink={0} width={1000} height='50vh' backgroundColor='green' />
     </Box>
     </Box>
   </Box>
  )
}

export { ProgramHorizontalBlock }
