import { gql } from '@apollo/client'

const GET_PRIVATE_LESSON = gql`
  query PrivateLesson {
    mainPageItem(id: "cG9zdDoyMDc=") {
      title
      privateLesson {
        description
        durationLesson
        formatLesson
        price
        subtitle
        textButton
      }
    }
  }
`

export { GET_PRIVATE_LESSON }
