import { gql } from '@apollo/client'

export const GET_FEELING_OF_TIME_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/a-sense-of-time") {
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
