import { gql } from '../__generated__'

const GET_INDIVIDUAL_COURSE = gql(`
  query IndividualCourse($id: ID!) {
    individualCourse(id: $id) {
      content
      title
      individualCourseData {
        background {
          desktop {
            node {
              mediaItemUrl
              sourceUrl
            }
          }
          mobile {
            node {
              mediaItemUrl
              sourceUrl
            }
          }
        }
        price {
          cta
          courseLengthInMonths
          discount
          fullPrice
          liveTrainingsNumber
          monthlyPrice
          oldPrice
          title
          videoTrainingsNumber
        }
        hero {
          benefits {
            content
          }
          runningLine
          courseConditions {
            description
            number
          }
          cta
        }
      }
    }
  }
`)

export { GET_INDIVIDUAL_COURSE }
