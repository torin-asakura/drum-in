import React                         from 'react'
import { FC }                        from 'react'
import { useRef }                    from 'react'

import { LocomotiveScrollProvider }  from '@forks/react-locomotive-scroll'
import { ContractOfferBlock }        from '@landing/contract-offer-fragment'
import { FooterBlock }               from '@landing/footer-fragment'
import { HeaderBlock }               from '@landing/header-fragment'
import { MainScrollContainer }        from '@shared/main-scroll-container'
import { Seo }                       from '@shared/seo-fragment'
import { Box }                       from '@ui/layout'

import { LOCOMOTIVE_SCROLL_WATCH }   from './contract-offer.constacts'
import { LOCOMOTIVE_SCROLL_OPTIONS } from './contract-offer.constacts'
import { ContractOfferProps }        from './contract-offer.interfaces'

export const ContractOfferPage: FC<ContractOfferProps> = ({
  SEO,
  contractOfferData,
}) => {
  const containerRef = useRef(null)
  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={LOCOMOTIVE_SCROLL_OPTIONS}
        watch={LOCOMOTIVE_SCROLL_WATCH}
        containerRef={containerRef}
      >
        <HeaderBlock/>
        <Seo seo={SEO} />
        <MainScrollContainer containerRef={containerRef}>
          <ContractOfferBlock contractOfferData={contractOfferData} />
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            backgroundImage={`url(${contractOfferData?.background?.desktopFooter?.node.sourceUrl})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <FooterBlock />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            backgroundImage={`url(${contractOfferData?.background?.mobileFooter?.node.sourceUrl})`}
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

export default ContractOfferPage
