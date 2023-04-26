import { gql } from '@apollo/client'

const GET_PRIVACY_POLICY = gql`
  query GetPrivacyPolicy {
    privacyPolicyItem(id: "cG9zdDo0ODA=") {
      title
      privacyPolicy {
        text
      }
    }
  }
`

export { GET_PRIVACY_POLICY }
