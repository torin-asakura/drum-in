import { gql } from '@apollo/client'

export const GET_SEO = gql`
  query GetOpeningTheRhythmSeo($id: ID!) {
    page(id: $id) {
      seo {
        metaDesc
        focuskw
        opengraphType
        opengraphTitle
        opengraphDescription
        opengraphUrl
        opengraphSiteName
        opengraphModifiedTime
        opengraphSiteName
        opengraphImage {
          mediaDetails {
            sizes {
              height
              width
              name
              sourceUrl
            }
          }
        }
        twitterDescription
        twitterTitle
        twitterImage {
          sourceUrl
        }
        title
        breadcrumbs {
          text
          url
        }
      }
    }
  }
`
