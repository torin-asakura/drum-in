import { FooterDataProps }   from '@globals/data'
import { HeaderDataProps }   from '@globals/data'
import { ContactsDataProps } from '@globals/data'

export interface ContactPageProps {
  contactsData?: ContactsDataProps | null
  headerData: HeaderDataProps

  footerData: FooterDataProps
}
