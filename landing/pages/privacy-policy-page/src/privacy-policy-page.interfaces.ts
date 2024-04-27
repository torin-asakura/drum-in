import { FooterDataProps }        from '@globals/data'
import { HeaderDataProps }        from '@globals/data'
import { PrivacyPolicyDataProps } from '@globals/data'

export interface PrivacyPolicyPageProps {
  privacyPolicy?: PrivacyPolicyDataProps | null
  headerData: HeaderDataProps

  footerData: FooterDataProps
}
