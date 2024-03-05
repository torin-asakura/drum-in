import { gql } from '@apollo/client'

const GET_BANNER = gql`
  query Banner {
    courseSeventhHeavenItem(id: "cG9zdDozODg=") {
      heroForCourse {
        descriptionCourseInHero
        levelCourseInHero
        titleInHero
      }
    }
  }
`

export { GET_BANNER }
