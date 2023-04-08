import { gql } from '@apollo/client'

const GET_BACKGROUNDS = gql`
  query Backgrounds {
    mainPageItem(id: "cG9zdDoyMTA=") {
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
