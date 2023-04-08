import { gql } from '@apollo/client'

const GET_BACKGROUNDS = gql`
  query Backgrounds {
    courseSeventhHeavenItem(id: "cG9zdDozODg=") {
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
