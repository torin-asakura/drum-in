import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { PrivacyPolicyBlock }       from '@landing/privacy-policy-fragment'
import { GoogleTagManager }          from '@shared/google-tag-manager'
import { Seo }                      from '@shared/seo-fragment'
import { Box }                      from '@ui/layout'

import { PrivacyPolicyPageProps }   from './privacy-policy-page.interfaces'

export const PrivacyPolicyPage: FC<PrivacyPolicyPageProps> = ({
  SEO,
  footerData,
  privacyPolicy,
  headerData,
}) => {
  const containerRef = useRef(null)

  return (
    <GoogleTagManager>
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
          <HeaderBlock headerData={headerData} />
          <Seo seo={SEO} />
          <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
            <PrivacyPolicyBlock privacyPolicy={privacyPolicy} />
            <Box
              display={['none', 'none', 'flex']}
              width='100%'
              backgroundImage={`url(${''})`}
              backgroundSize='80% 100%'
              backgroundRepeat='no-repeat'
              backgroundPosition='left bottom'
            >
              <FooterBlock footerData={footerData} />
            </Box>
            <Box
              display={['flex', 'flex', 'none']}
              width='100%'
              backgroundImage={`url(${''})`}
              backgroundSize='100% 80%'
              backgroundRepeat='no-repeat'
              backgroundPosition='center bottom'
            >
              <FooterBlock footerData={footerData} />
            </Box>
          </main>
        </LocomotiveScrollProvider>
      </Box>
    </GoogleTagManager>
  )
}

export default PrivacyPolicyPage
