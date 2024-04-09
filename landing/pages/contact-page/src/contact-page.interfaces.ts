import { HeaderDataProps }   from '@globals/data'
import { ContactsDataProps } from '@globals/data'

export interface ContactPageProps {
  contactsData?: ContactsDataProps | null
  headerData: HeaderDataProps
}
