import { gql } from '@apollo/client'

const GET_FAQ = gql`
  query Faq {
    generalFragment(id: "cG9zdDoyMjk5") {
      title
      details {
        faq {
          answer
          question
        }
      }
    }
  }
`

export { GET_FAQ }
