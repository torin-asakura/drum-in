import { gql } from '@apollo/client'

const GET_COURSE_PROCESS = gql`
  query CourseProcess {
    fragmentNewItem(id: "cG9zdDoxNjY=") {
      title
      courseProcess {
        descriptionForRectangle
        titleFirstSquare
        imageForFirstSquare {
          sourceUrl
        }
        titleRectangle
        imageForRectangle {
          sourceUrl
        }
        titleSecondSquare
        imageForSecondSquare {
          sourceUrl
        }
      }
    }
  }
`

export { GET_COURSE_PROCESS }
