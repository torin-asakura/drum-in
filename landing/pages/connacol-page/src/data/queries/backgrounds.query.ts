import { gql } from '@apollo/client'

const GET_BACKGROUNDS = gql`
  query Backgrounds {
    courseConnacolItem(id: "cG9zdDozOTM=") {
      backgroundForTeacherBlock {
        backgroundForTeacher {
          sourceUrl
        }
      }
      backgroundForFooter {
        backgroundForFooter {
          sourceUrl
        }
        backgroundMobileForFooter {
          sourceUrl
        }
      }
    }
  }
`

export { GET_BACKGROUNDS }
