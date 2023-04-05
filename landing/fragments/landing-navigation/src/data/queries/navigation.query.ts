import { gql } from '@apollo/client'

const GET_NAVIGATION = gql`
  query Navigation {
    menuCourses {
      nodes {
        title
        id
        menuCourse {
          circleFirstLine
          circleSecondLine
          level
          link
          quantityMonths
          quantityVideoLessons
          textMonths
        }
      }
    }
    fragmentNewItem(id: "cG9zdDozMDk=") {
      header {
        nameButton
        titleLink
        urlLink
      }
    }
  }
`

export { GET_NAVIGATION }
