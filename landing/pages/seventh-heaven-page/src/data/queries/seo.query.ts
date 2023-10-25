import { gql } from '@apollo/client'

export const GET_SEVENTH_HEAVEN_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/seventh-heaven") {
      seo {
        title
        metaDesc
      }
      translation(language: EN) {
        seo {
          title
          metaDesc
        }
      }
    }
  }
`
