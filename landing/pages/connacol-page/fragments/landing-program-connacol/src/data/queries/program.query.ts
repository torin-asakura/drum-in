import { gql } from '@apollo/client'

const GET_PROGRAM = gql`
  query Program {
    courseConnacolItem(id: "cG9zdDozOTU=") {
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
      }
    }
  }
`

export { GET_PROGRAM }
