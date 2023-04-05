import { gql } from '@apollo/client'

const GET_CHOSE_COURSE = gql`
  query choseCourse {
    choseCourse {
      nodes {
        id
        title
        choseCourse {
          circleFirstLine
          circleSecondLine
          description
          level
          price
          quantityMonths
          quantityVideoLessons
          textMonths
        }
      }
    }
  }
`

export { GET_CHOSE_COURSE }
