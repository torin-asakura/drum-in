import { gql } from '@apollo/client'

export const GET_OPENING_THE_RHYTHM_SEO = gql`
  query GetOpeningTheRhythmSeo {
    pageContentBy(uri: "/discovering-the-rhythm") {
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
