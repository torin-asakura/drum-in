import { gql } from '@apollo/client'

export const GET_CONTACTS_SEO = gql`
  query GetContactsSeo {
    pageContentBy(uri: "/contacts") {
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
