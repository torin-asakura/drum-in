import { gql } from '@apollo/client'

const GET_AFTER_THE_COURSE = gql`
  query AfterTheCourse {
    courseOpeningTheRhytmItem(id: "cG9zdDoxNDU=") {
      title
      afterTheCourse {
        fitstLineTape
        secondLineTape
        thirdLineTape
      }
    }
  }
`

export { GET_AFTER_THE_COURSE }
