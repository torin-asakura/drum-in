import React                        from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { PageID }                   from '@globals/data'
import { ContractOfferBlock }       from '@landing/contract-offer-fragment'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Seo }                      from '@shared/seo-fragment'
import { Box }                      from '@ui/layout'

export const ContractOfferPage = () => {
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
        {/* TODO: change to contract */}
        <Seo id={PageID.CONTACT} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <ContractOfferBlock />
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            // backgroundImage={`url(${backgrounds?.backgroundForFooter?.backgroundForFooter?.sourceUrl})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <FooterBlock />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            // backgroundImage={`url(${backgrounds?.backgroundForFooter?.backgroundMobileForFooter?.sourceUrl})`}
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

export default ContractOfferPage
