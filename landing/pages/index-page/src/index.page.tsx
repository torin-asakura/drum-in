import React                        from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { FaqBlock }                 from '@landing/faq'
import { HeaderBlock }              from '@landing/header-fragment'
import { Hero }                     from '@landing/hero-fragment'
import { StudentsBlock }            from '@landing/learning-students'
import { Middle }                   from '@landing/middle-fragment'
import { Box }                      from '@ui/layout'

export const HomePage = () => {
  const containerRef = useRef(null)

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
      <HeaderBlock />
      <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <Hero />
          <Middle />
          <StudentsBlock />
          <FaqBlock />
      </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default HomePage
