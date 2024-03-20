import { gql } from '../../__generated__'

export const GET_FAQ = gql(`
query Faq{
  generalFragments {
    nodes {
      commonFragments {
        fieldGroupName
      }
    }
  }
}
`)
