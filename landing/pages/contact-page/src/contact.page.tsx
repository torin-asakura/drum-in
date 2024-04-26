import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { PageID }                   from '@globals/data'
import { ContactBlock }             from '@landing/contact-fragment'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Seo }                      from '@shared/seo-fragment'
import { Box }                      from '@ui/layout'

import { ContactPageProps }         from './contact-page.interfaces'

export const ContactPage: FC<ContactPageProps> = ({ footerData,contactsData, headerData }) => {
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
        <HeaderBlock headerData={headerData} />
        <Seo id={PageID.CONTACT} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
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
              <FooterBlock footerData={footerData} buttonUp={false} />
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
        </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default ContactPage
