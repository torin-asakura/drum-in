import { gql } from '@apollo/client'

const GET_PROGRAM = gql`
  query Program {
    courseFifthDimensionItem(id: "cG9zdDozODU=") {
      program {
        benefit
        firstListOfTopics
        numberOfMonths
        numberVideoTutorials
        secondListOfTopics
        thirdListOfTopics
      }
    }
  }
`

export { GET_PROGRAM }
