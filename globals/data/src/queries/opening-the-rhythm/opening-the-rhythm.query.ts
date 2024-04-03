import { gql } from '../../__generated__'

export const GET_OPENING_THE_RHYTHM = gql(`
  query GetOpeningTheRhythm($id: ID!) {
  course(id: $id) {
      content {
            payment {
        title
        benefit
        courses {
          nodes {
            ... on IndividualCourse {
              title
              id
              individualCourseData {
                aboutCourse
                price {
                  fullPrice
                  courseLengthInMonths
                }
              }
            }
          }
        }
      }
        hero {
          title
          description
          runningLine
          cta {
            title
            tagsCloud {
              tag
            }
          }
        }
        cta {
          title
          subtitle
        }
        details {
          title
          description
          levels {
            target
            tooltip
            level
            content
            lengthOfCourseInMonths
            liveTrainingsNumber
            videoTrainingsNumber
          }
        }
        price {
          title
          priceMonthly
          priceFull
          discount
          details {
            videoTrainingsNumber
            levelsNumber
            monthsNumber
          }
        }
        background {
          desktop {
            hero {
              node {
                sourceUrl
              }
            }
            teacher {
              node {
                sourceUrl
              }
            }
            footer {
              node {
                sourceUrl
              }
            }
          }
          mobile {
            hero {
              node {
                sourceUrl
              }
            }
            teacher {
              node {
                sourceUrl
              }
            }
            footer {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`)
