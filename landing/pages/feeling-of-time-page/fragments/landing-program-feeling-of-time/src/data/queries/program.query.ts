import { gql } from '@apollo/client'

const GET_PROGRAM = gql`
  query Program {
    courseFeelingOfTimeItem(id: "cG9zdDozNjg=") {
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
