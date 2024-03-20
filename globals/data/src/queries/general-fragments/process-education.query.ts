import { gql } from '../../__generated__'

export const GET_PROCESS_EDUCATION = gql(`
query ProcessEducation{
  generalFragments {
    nodes {
      commonFragments {
        process {
          title
          text
          picture {
            alt
            image {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
}
`)
