import { gql } from '@apollo/client'

const GET_PROGRAM = gql`
  query Program {
    coursePolyrhythmicKeysItem(id: "cG9zdDo0MDg=") {
      program {
        benefit
        firstListOfTopics
        numberOfMonths
        numberVideoTutorials
        secondListOfTopics
        thirdListOfTopics
        background {
          sourceUrl
        }
        backgroundMobile {
          sourceUrl
        }
        backgroundMobile2 {
          sourceUrl
        }
      }
    }
  }
`

export { GET_PROGRAM }
