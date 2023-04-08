import { gql } from '@apollo/client'

const GET_BACKGROUNDS = gql`
  query Backgrounds {
    coursePolyrhythmicKeysItem(id: "cG9zdDo0MDc=") {
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
