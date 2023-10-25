import { gql } from '@apollo/client'

export const GET_KONNAKOL_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/konnakol") {
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
