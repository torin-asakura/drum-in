import { useQuery }              from '@apollo/client'

import { GET_CONSULTATION_FORM } from '../../../queries'
import { FormID }                from '../../../query.constants'

export const useGetConsultationFormData = () => {
  const { data } = useQuery(GET_CONSULTATION_FORM, { variables: { id: FormID.consultation.id } })
  const formData = data?.form
  return { formData }
}
