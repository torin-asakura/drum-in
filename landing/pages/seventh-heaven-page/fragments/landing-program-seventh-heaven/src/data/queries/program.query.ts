import { gql } from '@apollo/client'

const GET_PROGRAM = gql`
  query Program {
    courseSeventhHeavenItem(id: "cG9zdDozOTA=") {
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