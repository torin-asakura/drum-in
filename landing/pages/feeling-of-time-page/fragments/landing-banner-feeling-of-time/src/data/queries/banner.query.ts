import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    courseFeelingOfTimeItem(id: "cG9zdDozNjY=") {
      heroForCourse {
        descriptionCourseInHero
        levelCourseInHero
        titleInHero
      }
    }
  }
`

export { GET_BANNER }
