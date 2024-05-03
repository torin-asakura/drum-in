import { ConsultationDataProps }     from '@globals/data'
import { ConsultationFormDataProps } from '@globals/data'
import { SeoDataProps }              from '@globals/data'
import { FooterDataProps }           from '@globals/data'
import { HeaderDataProps }           from '@globals/data'
import { ContactsDataProps }         from '@globals/data'

export interface ContactPageProps {
  contactsData?: ContactsDataProps | null
  headerData: HeaderDataProps
  SEO: SeoDataProps
  footerData: FooterDataProps
  consultationFormData: ConsultationFormDataProps
  consultationData: ConsultationDataProps
}
