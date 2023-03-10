import React                        from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { ContactBlock }             from '@landing/contact-fragment'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Background }               from '@ui/background'
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
          <Background
            width='100%'
            display={['none', 'none', 'flex']}
            flexWrap='wrap'
            gradient='purpleBlueAngularGradient'
            backgroundSize='100% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center bottom'
          >
            <ContactBlock />
            <FooterBlock buttonUp={false} />
          </Background>
          <Background
            width='100%'
            display={['flex', 'flex', 'none']}
            flexWrap='wrap'
            gradient='purpleBlueSmallImageGradient'
            backgroundSize={['100%', '100%', '0']}
            backgroundRepeat='no-repeat'
            backgroundPosition={['center top', 'center top', 'center']}
          >
            <ContactBlock />
            <FooterBlock buttonUp={false} />
          </Background>
        </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default ContactPage
