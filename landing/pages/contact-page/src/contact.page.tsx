import React                        from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { ContactBlock }             from '@landing/contact-fragment'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Box }                      from '@ui/layout'

export const ContactPage = () => {
  const containerRef = useRef(null)

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <HeaderBlock />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <ContactBlock />
          <FooterBlock />
        </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default ContactPage
