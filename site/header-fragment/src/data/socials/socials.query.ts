import { gql } from '@apollo/client'

const GET_SOCIALS = gql`
  query GetSocials {
    socials {
      nodes {
        content
        socialsAddons {
          blackIcon {
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

export { GET_SOCIALS }
