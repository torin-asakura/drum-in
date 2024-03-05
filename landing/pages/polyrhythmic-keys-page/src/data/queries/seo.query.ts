import { gql } from '@apollo/client'

export const GET_POLYRHYTMIC_KEY_SEO = gql`
  query GetPolyrhytmicKeySeo {
    pageContentBy(uri: "/polyrhythmic-keys") {
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
