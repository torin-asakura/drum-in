import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    courseFifthDimensionItem(id: "cG9zdDozODM=") {
      heroForCourse {
        descriptionCourseInHero
        levelCourseInHero
        titleInHero
      }
    }
  }
`

export { GET_BANNER }
