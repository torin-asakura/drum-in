import { gql } from '@apollo/client'

const GET_FAQ = gql`
  query Faq {
    faq {
      nodes {
        title
        faq {
          answerForFaq
          positionForFaq
        }
      }
    }
  }
`

export { GET_FAQ }
