import { gql } from '@apollo/client'

export const GET_PRIVACY_POLICY_SEO = gql`
  query GetPrivacyPolicySeo {
    pageContentBy(uri: "/privacy-policy") {
      seo {
        focuskw
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
      }
    }
  }
`
