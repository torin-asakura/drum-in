import { gql } from '@apollo/client'

const GET_LOGO = gql`
  query GetLogo {
    mediaItems(where: { title: "logo" }) {
      nodes {
        altText
        sourceUrl
        mediaItemUrl
        link
      }
    }
  }
`

export { GET_LOGO }
