import { gql } from '../../__generated__'

export const GET_HEADER = gql(`
query Header{
  generalFragments {
    nodes {
      commonFragments {
        header {
          logo {
            node {
              sourceUrl
            }
          }
          dropdownList {
            title
            items {
              title
              level
              path
            }
          }
          links {
            path
            title
          }
         ctaButton
        }
      }
    }
  }
}
`)
