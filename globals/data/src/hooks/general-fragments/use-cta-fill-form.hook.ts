import { useQuery }          from '@apollo/client'

import { GET_CTA_FILL_FORM } from '../../queries'

export const useCtaFillForm = () => {
  const { data } = useQuery(GET_CTA_FILL_FORM)

  return { data }
}
