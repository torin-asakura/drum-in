import { gql } from '@apollo/client'

const GET_SKILLS = gql`
  query GetSkills {
    skills {
      nodes {
        title
        addons {
          order
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

export { GET_SKILLS }
