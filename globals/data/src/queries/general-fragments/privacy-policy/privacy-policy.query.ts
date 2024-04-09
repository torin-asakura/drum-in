import { gql } from '../../../__generated__'

export const GET_PRIVACY_POLICY = gql(`
query PrivacyPolicy($id: ID!){
 generalFragment(id:$id ) {
        privacyPolicy {
          title
          content {
            title
            description
      }
    }
  }
}
`)
