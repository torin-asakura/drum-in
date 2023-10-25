import { gql } from "@apollo/client";

export const GET_OPENING_THE_RHYTHM_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/discovering-the-rhythm") {
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
