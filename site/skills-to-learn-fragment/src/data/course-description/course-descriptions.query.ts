import { gql } from '@apollo/client'

const GET_COURSE_DESCRIPTIONS = gql`
  query GetCourseDescription {
    courseDescriptions {
      nodes {
        title
        content
        addons {
          order
          side
          picture {
            altText
            sourceUrl
            mediaItemUrl
            link
          }
        }
      }
    }
  }
`

export { GET_COURSE_DESCRIPTIONS }
