import { gql } from '../../__generated__'

export const GET_TEACHER = gql(`
query Teacher{
  generalFragments {
    nodes {
      commonFragments {
        teacher {
          subtitle
          title
          description
          experience {
            number
            text
          }
          education {
            title
            list {
              element
            }
          }
        }
      }
    }
  }
}
`)
