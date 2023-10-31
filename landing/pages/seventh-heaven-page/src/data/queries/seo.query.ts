import { gql } from '@apollo/client'

export const GET_SEVENTH_HEAVEN_SEO = gql`
  query GetSeventhHeavenSeo {
    pageContentBy(uri: "/seventh-heaven") {
      seo {
        canonical
        cornerstone
        focuskw
        fullHead
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
        title
        twitterDescription
        twitterTitle
        opengraphImage {
          sizes
          caption
          description
          isPreview
          link
          title
          altText
          desiredSlug
          mediaDetails {
            file
            height
            sizes {
              file
              fileSize
              mimeType
              height
              name
              sourceUrl
              width
            }
            width
          }
          srcSet
          sourceUrl
          slug
        }
        twitterImage {
          link
          altText
          caption
          description
          title
        }
      }
    }
  }
`
