import { useQuery }              from '@apollo/client'

import { GET_CONSULTATION_FORM } from '../../../queries'
import { FormID }                from '../../../query.constants'

export const useGetConsultationFormData = () => {
  const { data } = useQuery(GET_CONSULTATION_FORM, {
    variables: { id: FormID.consultation.id },
    fetchPolicy: 'cache-only',
  })
  const consultationFormData = data?.form
  return { consultationFormData }
}
