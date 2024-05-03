import { gql } from '../../__generated__'

export const GET_SEO = gql(`
query GetSeo($id: ID!, $uriDefaultIcon: String, $uriAppleIcon: String) {
  defaultIcon: mediaItemBy(uri: $uriDefaultIcon) {
    mediaItemUrl
  }
  appleIcon: mediaItemBy(uri: $uriAppleIcon) {
    mediaItemUrl
  }
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
        mediaItemUrl
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
