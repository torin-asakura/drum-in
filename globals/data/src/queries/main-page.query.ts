import { gql } from '../__generated__'

export const GET_MAIN_PAGE = gql(`
query MainPage{
generalFragments {
    nodes {
      commonFragments {
        main {
          hero {
            title
            subtitle
            scrollButton
            about
            benefits {
              benefit
            }
          }
          runningline {
            text
          }
          chooseCourse {
            title
            courses {
              description
              course {
                nodes {
                  ... on Course {
                    id
                    title
                    content {
                      price {
                        priceMonthly
                        details {
                          videoTrainingsNumber
                          monthsNumber
                          levelsNumber
                        }
                      }
                    }
                  }
                  ... on IndividualCourse {
                    id
                    title
                    individualCourseData {
                      price {
                        monthlyPrice
                        level
                        videoTrainingsNumber
                        liveTrainingsNumber
                        bonuses
                        courseLengthInMonths
                      }
                    }
                  }
                }
              }
            }
          }
          individualLesson {
            cta {
              button
              description
              price
              title
            }
            title
            details {
              description
              title
            }
          }
          slider {
            title
            upperslider {
              text
              image {
                node {
                  sourceUrl
                }
              }
            }
            lowerslider {
              text
              image {
                node {
                  sourceUrl
                }
              }
            }
          }
          students {
            title
            description
            cta
            cards {
              firstBadge
              secondBadge
              title
              description
            }
          }
        }
      }
    }
  }
}
`)
