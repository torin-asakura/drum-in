import { gql } from '../__generated__'

export const GET_GENERAL_FRAGMENTS = gql(`
query GeneralFragments{
  generalFragments {
    nodes {
      commonFragments {
        teacher {
          heading
          subtitle
          teks
        }
      }
    }
  }
}
`)
