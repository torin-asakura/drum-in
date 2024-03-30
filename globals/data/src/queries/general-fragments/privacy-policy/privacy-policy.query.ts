import { gql } from '../../../__generated__'

export const GET_PRIVACY_POLICY = gql(`
query PrivacyPolicy{
 generalFragments {
    nodes {
      commonFragments {
        privacyPolicy {
          title
          content {
            title
            description
          }
        }
      }
    }
  }
}
`)
