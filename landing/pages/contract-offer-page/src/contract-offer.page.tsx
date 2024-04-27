import React                        from 'react'
import { FC }                       from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { PageID }                   from '@globals/data'
import { ContractOfferBlock }       from '@landing/contract-offer-fragment'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Seo }                      from '@shared/seo-fragment'
import { Box }                      from '@ui/layout'

import { ContractOfferProps }       from './contract-offer.interfaces'

export const ContractOfferPage: FC<ContractOfferProps> = ({
  footerData,
  contractOfferData,
  headerData,
}) => {
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
        <Seo id={PageID.CONTRACT_OFFER} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <ContractOfferBlock contractOfferData={contractOfferData} />
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            backgroundImage={`url(${contractOfferData?.background?.desktopFooter?.node.sourceUrl})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <FooterBlock footerData={footerData} />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            backgroundImage={`url(${contractOfferData?.background?.mobileFooter?.node.sourceUrl})`}
            backgroundSize='100% 80%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center bottom'
          >
            <FooterBlock footerData={footerData} />
          </Box>
        </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default ContractOfferPage
