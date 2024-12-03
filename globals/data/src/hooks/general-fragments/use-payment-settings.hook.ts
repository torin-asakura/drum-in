import { useQuery }             from '@apollo/client'

import { GET_PAYMENT_SETTINGS } from '../../queries'
import { GeneralFragmentID }    from '../../query.constants'

export const usePaymentSettings = () => {
  const { data } = useQuery(GET_PAYMENT_SETTINGS, {
    variables: { id: GeneralFragmentID.SETTINGS },
    fetchPolicy: 'cache-and-network',
  })

  const paymentSettingsData = data?.generalFragment?.siteSettings?.paymentSettings

  return { paymentSettingsData }
}
