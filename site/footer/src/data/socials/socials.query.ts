import { gql } from '@apollo/client'

const GET_SOCIALS = gql`
  query GetSocials {
    socials {
      nodes {
        content
        socialsAddons {
          redIcon {
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
