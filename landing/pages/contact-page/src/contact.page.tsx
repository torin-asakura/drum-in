import React                        from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { ContactBlock }             from '@landing/contact-fragment'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Box }                      from '@ui/layout'

import { Seo }                      from './seo.component'
import { useBackground }            from './data'

interface SEOProp {
  [key: string]: string
}
interface Props {
  SEO: SEOProp
}

export const ContactPage = ({ SEO }: Props) => {
  const containerRef = useRef(null)
  const background = useBackground()

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
        <Seo SEO={SEO} />
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
