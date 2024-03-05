import { useQuery }           from '@apollo/client'

import { GET_PRIVACY_POLICY } from './privacy-policy.query'

const usePrivacyPolicy = () => useQuery(GET_PRIVACY_POLICY).data?.privacyPolicyItem

export { usePrivacyPolicy }
