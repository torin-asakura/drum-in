import React                         from 'react'
import { FC }                        from 'react'
import { useRef }                    from 'react'

import { LocomotiveScrollProvider }  from '@forks/react-locomotive-scroll'
import { FooterBlock }               from '@landing/footer-fragment'
import { HeaderBlock }               from '@landing/header-fragment'
import { PrivacyPolicyBlock }        from '@landing/privacy-policy-fragment'
import { MainScrollContainer }       from '@shared/main-scroll-container/src'
import { Seo }                       from '@shared/seo-fragment'
import { Box }                       from '@ui/layout'

import { PrivacyPolicyPageProps }    from './privacy-policy-page.interfaces'
import { LOCOMOTIVE_SCROLL_WATCH }   from './privacy-policy.constacts'
import { LOCOMOTIVE_SCROLL_OPTIONS } from './privacy-policy.constacts'

export const PrivacyPolicyPage: FC<PrivacyPolicyPageProps> = ({
  SEO,
  privacyPolicy,
}) => {
  const containerRef = useRef(null)

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={LOCOMOTIVE_SCROLL_OPTIONS}
        containerRef={containerRef}
        watch={LOCOMOTIVE_SCROLL_WATCH}
      >
        <HeaderBlock/>
        <Seo seo={SEO} />
        <MainScrollContainer containerRef={containerRef}>
          <PrivacyPolicyBlock privacyPolicy={privacyPolicy} />
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            backgroundImage={`url(${''})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <FooterBlock />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            backgroundImage={`url(${''})`}
            backgroundSize='100% 80%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center bottom'
          >
            <FooterBlock />
          </Box>
        </MainScrollContainer>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default PrivacyPolicyPage
