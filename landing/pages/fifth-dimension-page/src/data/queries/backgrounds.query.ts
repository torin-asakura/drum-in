import { gql } from '@apollo/client'

const GET_BACKGROUNDS = gql`
  query Backgrounds {
    courseFifthDimensionItem(id: "cG9zdDozODM=") {
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
