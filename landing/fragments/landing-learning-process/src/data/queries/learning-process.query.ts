import { gql } from '@apollo/client'

const GET_LEARNING_PROCESS = gql`
  query LearningProcess {
    mainPageItem(id: "cG9zdDoyMDY=") {
      title
      learningProcess {
        firstLine {
          text
          image {
            sourceUrl
          }
        }
        secondLine {
          text
          image {
            sourceUrl
          }
        }
      }
    }
  }
`

export { GET_LEARNING_PROCESS }
