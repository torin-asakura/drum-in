import { gql } from '@apollo/client'

const GET_TEACHER = gql`
  query Teacher {
    fragmentNewItem(id: "cG9zdDoxOTE=") {
      title
      teacher {
        description
        nameTeacher
        slider {
          image {
            sourceUrl
          }
        }
        experience {
          number
          characteristic
        }
        education {
          item
        }
      }
    }
  }
`

export { GET_TEACHER }
