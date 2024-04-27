import { SeoDataProps }           from '@globals/data/src'
import { FooterDataProps }        from '@globals/data/src'
import { HeaderDataProps }        from '@globals/data/src'
import { ContractOfferDataProps } from '@globals/data/src'

export interface ContractOfferProps {
  contractOfferData?: ContractOfferDataProps | null
  headerData: HeaderDataProps
  SEO: SeoDataProps
  footerData: FooterDataProps
}
