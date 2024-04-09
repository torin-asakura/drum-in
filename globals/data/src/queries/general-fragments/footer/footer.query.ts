import { gql } from '../../../__generated__'

export const GET_FOOTER = gql(`
query Footer($id: ID!){
  generalFragment(id:$id ) {
    footer {
      logo {
        node {
          sourceUrl
        }
      }
      privacyPolicy {
        title
        path
      }
      email
      courses {
        nodes {
          ... on Course {
            title
            content {
              path
            }
          }
          ... on IndividualCourse {
            title
            individualCourseData {
              path
            }
          }
        }
      }
      socials {
        title
        link
      }
    }
  }
}
`)
