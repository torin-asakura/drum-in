import { gql } from '@apollo/client'

export const GET_FEELING_OF_TIME_SEO = gql`
  query GetIFeelingOfTimeSeo {
    pageContentBy(uri: "/a-sense-of-time") {
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
