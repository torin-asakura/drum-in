import { gql } from '@apollo/client'

export const GET_KONNAKOL_SEO = gql`
  query GetKonnakolSeo {
    pageContentBy(uri: "/konnakol") {
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
