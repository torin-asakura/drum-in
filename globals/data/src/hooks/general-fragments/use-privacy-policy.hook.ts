import { useQuery }           from '@apollo/client'

import { GET_PRIVACY_POLICY } from '../../queries'
import { GeneralFragmentID }  from '../../query.constants'

export const usePrivacyPolicy = () => {
  const { data } = useQuery(GET_PRIVACY_POLICY, {
    variables: { id: GeneralFragmentID.PRIVACY_POLICY },
    fetchPolicy: 'cache-and-network',
  })
  const privacyPolicyData = data?.generalFragment?.privacyPolicy
  return { privacyPolicyData }
}
