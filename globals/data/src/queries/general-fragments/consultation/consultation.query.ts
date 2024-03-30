import { gql } from '../../../__generated__'

export const GET_CONSULTATION = gql(`
query Consultation{
   generalFragments {
    nodes {
      commonFragments {
        consultation {
          title
          cta
        }
      }
    }
  }
}
`)
