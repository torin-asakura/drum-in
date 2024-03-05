import { gql } from '../__generated__'

const GET_COURSE = gql(`
  query GetCourse($id: ID!) {
    course(id: $id) {
      title
      content
      details {
        faq {
          answer
          question
        }
        additionalQuestions {
          title
          cta {
            afterBoldText
            beforeBoldText
            boldText
          }
          button
        }
      }
    }
  }
`)

export { GET_COURSE }
