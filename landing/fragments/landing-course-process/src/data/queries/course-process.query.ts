import { gql } from '@apollo/client'

const GET_COURSE_PROCESS = gql`
  query CourseProcess {
    fragmentNewItem(id: "cG9zdDoxNjY=") {
      title
      courseProcess {
        descriptionForRectangle
        titleFirstSquere
        imageForFirstSquere {
          sourceUrl
        }
        titleRectangle
        imageForRectangle {
          sourceUrl
        }
        titleSecondSquere
        imageForSecondSquere {
          sourceUrl
        }
      }
    }
  }
`

export { GET_COURSE_PROCESS }
