import { gql } from '../../__generated__'

export const GET_HEADER = gql(`
query Header{
  generalFragments {
    nodes {
      commonFragments {
        fieldGroupName
      }
    }
  }
}
`)
