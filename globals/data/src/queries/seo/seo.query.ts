import { gql } from '../../__generated__'

export const GET_SEO = gql(`
  query GetSeo($id: ID!) {
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
`)
