import { gql } from '@apollo/client'

const GET_FOOTER = gql`
  query Footer {
    fragmentNewItem(id: "cG9zdDozMTU=") {
      footer {
        email
        titleLink
        urlLink
        networksList {
          link
          name
        }
      }
    }
    menuCourses {
      nodes {
        title
        menuCourse {
          link
        }
      }
    }
  }
`

export { GET_FOOTER }
