import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    courseOpeningTheRhytmItem(id: "cG9zdDoxNDM=") {
      heroForCourse {
        descriptionCourseInHero
        levelCourseInHero
        titleInHero
      }
    }
  }
`

export { GET_BANNER }
