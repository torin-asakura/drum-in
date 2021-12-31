import { gql } from '@apollo/client'

const GET_EDUCATION = gql`
  query GetEducation {
    educationNotes {
      nodes {
        title
        content
        addons {
          side
          picture {
            altText
            sourceUrl
            mediaItemUrl
            link
          }
        }
      }
    }
  }
`

export { GET_EDUCATION }
