import React                        from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { PageID }                   from '@globals/data'
import { ContactBlock }             from '@landing/contact-fragment'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Seo }                      from '@shared/seo-fragment'
import { Box }                      from '@ui/layout'
import {useContacts}                from '@globals/data'
import { useBackground }            from './data'

export const ContactPage = () => {
  const containerRef = useRef(null)
  const background = useBackground()
  const { contacts } = useContacts()

  console.log(contacts)

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
        <Seo id={PageID.CONTACT} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <Box
            width='100%'
            display={['none', 'none', 'flex']}
            flexWrap='wrap'
            backgroundImage={`url(${background?.backgroundForHero?.sourceUrl})`}
            backgroundSize='100% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center bottom'
          >
            <ContactBlock />
            <FooterBlock buttonUp={false} />
          </Box>
          <Box
            width='100%'
            display={['flex', 'flex', 'none']}
            flexWrap='wrap'
            backgroundImage={`url(${background?.backgroundMobileForHero?.sourceUrl})`}
            backgroundSize={['100%', '100%', '0']}
            backgroundRepeat='no-repeat'
            backgroundPosition={['center top', 'center top', 'center']}
          >
            <ContactBlock />
            <FooterBlock buttonUp={false} />
          </Box>
        </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default ContactPage
