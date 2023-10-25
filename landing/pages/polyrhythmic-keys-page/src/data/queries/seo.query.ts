import { gql } from "@apollo/client";

export const GET_POLYRHYTMIC_KEY_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/polyrhythmic-keys") {
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
`;
