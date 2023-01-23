import React                from 'react'

import { Box }              from '@ui/layout'


const ProgramHorizontalBlock = () => {

  return (
   <Box position='relative' id='scroll'>
     <Box data-scroll data-scroll-direction="horizontal" data-scroll-speed='9' data-scroll-target='#scroll'>
       <Box flexShrink={0} width={1000} height='100vh' backgroundColor='orange' />
       <Box flexShrink={0} width={1000} height='100vh' backgroundColor='pink' />
       <Box flexShrink={0} width={1000} height='100vh' backgroundColor='green' />
     </Box>
   </Box>
  )
}

export { ProgramHorizontalBlock }
