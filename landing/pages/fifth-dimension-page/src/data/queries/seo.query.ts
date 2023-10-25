import { gql } from '@apollo/client'

export const GET_FIFTH_DIMENSION_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/fifth-dimension") {
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
