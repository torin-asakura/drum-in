import { FooterDataProps }        from '@globals/data/src'
import { HeaderDataProps }        from '@globals/data/src'
import { ContractOfferDataProps } from '@globals/data/src'

export interface ContractOfferProps {
  contractOfferData?: ContractOfferDataProps | null
  headerData: HeaderDataProps
  SEO: any
  footerData: FooterDataProps
}
