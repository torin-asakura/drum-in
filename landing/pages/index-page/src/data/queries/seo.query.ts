import { gql } from '@apollo/client'

export const GET_INDEX_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/home") {
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
