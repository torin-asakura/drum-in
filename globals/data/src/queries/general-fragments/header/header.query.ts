import { gql } from '../../../__generated__'

export const GET_HEADER = gql(`
query Header($id: ID!){
  generalFragment(id:$id ) {
        header {
          logo {
            node {
              sourceUrl
            }
          }
          dropdownList {
            title
            items {
              nodes {
                ... on Course {
                  title
                  content {
                    path
                    price {
                      details {
                        levelsNumber
                        monthsNumber
                        videoTrainingsNumber
                      }
                    }
                  }
                  id
                }
                ... on IndividualCourse {
                  title
                  individualCourseData {
                    path
                    price {
                      level
                      bonuses
                      liveTrainingsNumber
                      videoTrainingsNumber
                      courseLengthInMonths
                    }
                  }
                }
                id
              }
            }
          }
          navigationElements {
            title
            path
          }
          ctaButton
        }
      }
}
`)
