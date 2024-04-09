import { gql } from '../../../__generated__'

export const GET_MAIN_PAGE = gql(`
query MainPage($id:ID!){
generalFragment(id:$id) {
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
          runningLine {
            content{text}
            icon{node{sourceUrl}}
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
                      path
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
                      path
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
            leftIcon{node{sourceUrl}},rightIcon{node{sourceUrl}}
              firstBadge
              secondBadge
              title
              description
            }
          }
            background {
            noise{node{sourceUrl}}
            desktop {
              footer {
                node {
                  sourceUrl
                }
              }
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
            }
            mobile {
              footer {
                node {
                  sourceUrl
                }
              }
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
            }
          }        
        
      
    }
  }
}
`)
