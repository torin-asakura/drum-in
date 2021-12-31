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
            mediaItemUrl
            link
            sourceUrl
          }
        }
        additionalImage {
          image {
            altText
            mediaItemUrl
            link
            sourceUrl
          }
        }
      }
    }
  }
`

export { GET_EDUCATION }
