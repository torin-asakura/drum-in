import { useQuery }           from '@apollo/client'

import { GET_PRIVACY_POLICY } from '../../queries'

export const usePrivacyPolicy = () => {
  const { data } = useQuery(GET_PRIVACY_POLICY)
  const privacyPolicy = data?.generalFragments?.nodes[0].commonFragments?.privacyPolicy
  return { privacyPolicy }
}
