import React                        from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { PrivacyPolicyBlock }       from '@landing/privacy-policy-fragment'
import { Box }                      from '@ui/layout'

import { Seo }                      from './seo.component'
import { useBackgrounds }           from './data'

export const OpeningTheRhythmPage = ({ SEO }) => {
  const backgrounds = useBackgrounds()
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
        <Seo SEO={SEO} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <PrivacyPolicyBlock />
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            backgroundImage={`url(${backgrounds?.backgroundForFooter?.backgroundForFooter?.sourceUrl})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <FooterBlock />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            backgroundImage={`url(${backgrounds?.backgroundForFooter?.backgroundMobileForFooter?.sourceUrl})`}
            backgroundSize='100% 80%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center bottom'
          >
            <FooterBlock />
          </Box>
        </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default OpeningTheRhythmPage
