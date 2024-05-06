import React                         from 'react'
import { FC }                        from 'react'
import { useRef }                    from 'react'

import { LocomotiveScrollProvider }  from '@forks/react-locomotive-scroll'
import { ContactBlock }              from '@landing/contact-fragment'
import { FooterBlock }               from '@landing/footer-fragment'
import { HeaderBlock }               from '@landing/header-fragment'
import { MainScrollContainer }       from '@shared/main-scroll-container/src'
import { Seo }                       from '@shared/seo-fragment'
import { Box }                       from '@ui/layout'

import { ContactPageProps }          from './contact-page.interfaces'
import { LOCOMOTIVE_SCROLL_WATCH }   from './contact.constants'
import { LOCOMOTIVE_SCROLL_OPTIONS } from './contact.constants'

export const ContactPage: FC<ContactPageProps> = ({ SEO, contactsData }) => {
  const containerRef = useRef(null)

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={LOCOMOTIVE_SCROLL_OPTIONS}
        watch={LOCOMOTIVE_SCROLL_WATCH}
        containerRef={containerRef}
      >
        <HeaderBlock />
        <Seo seo={SEO} />
        <MainScrollContainer containerRef={containerRef}>
          <Box
            width='100%'
            display={['none', 'none', 'flex']}
            flexWrap='wrap'
            backgroundImage={`url(${contactsData?.background?.desktop?.node.sourceUrl})`}
            backgroundSize='100% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center bottom'
          >
            <Box
              flexDirection='column'
              width='100%'
              backgroundImage={`url(${contactsData?.background?.noise?.node.sourceUrl})`}
              backgroundSize='contain'
            >
              <ContactBlock contactsData={contactsData} />
              <FooterBlock buttonUp={false} />
            </Box>
          </Box>
          <Box
            width='100%'
            display={['flex', 'flex', 'none']}
            flexWrap='wrap'
            backgroundImage={`url(${contactsData?.background?.mobile?.node.sourceUrl})`}
            backgroundSize={['100%', '100%', '0']}
            backgroundRepeat='no-repeat'
            backgroundPosition={['center top', 'center top', 'center']}
          >
            <Box
              flexDirection='column'
              width='100%'
              backgroundImage={`url(${contactsData?.background?.noise?.node.sourceUrl})`}
              backgroundSize='contain'
            >
              <ContactBlock contactsData={contactsData} />
              <FooterBlock buttonUp={false} />
            </Box>
          </Box>
        </MainScrollContainer>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default ContactPage
