import { gql } from '@apollo/client'

const GET_PROGRAM = gql`
  query ProgramCourse {
    courseOpeningTheRhytmItem(id: "cG9zdDoxNzg=") {
      title
      programOpeningTheRhythm {
        description
        levelItem {
          descriptionLevel
          forWhoThisLevel
          listNecessaryKnowledge
          nameLevel
          quantityLiveBroadcast
          quantityMonths
          quantityVideoLessons
          titleHoverBlock
          textMonths
        }
      }
    }
  }
`

export { GET_PROGRAM }
