import { gql } from '@apollo/client'

export const GET_FIFTH_DIMENSION_SEO = gql`
  query GetFifthDimensionSeo {
    pageContentBy(uri: "/fifth-dimension") {
      seo {
        metaDesc
        opengraphDescription
        opengraphModifiedTime
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        title
        twitterDescription
        twitterTitle
        opengraphImage {
          mediaDetails {
            sizes {
              height
              name
              sourceUrl
              width
            }
          }
        }
        twitterImage {
          sourceUrl
        }
      }
    }
  }
`
