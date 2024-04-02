import { gql } from '../../../__generated__'

export const GET_TEACHER = gql(`
query Teacher($id: ID!){
    generalFragment(id:$id ) {
    teacher {
      title
      description
      subtitle
      gallery {
        alt
        image {
          node {
            sourceUrl
          }
        }
      }
      statistics {
        text
        number
      }
      education {
        title
        list {
          element
        }
      }
      
    }
  }
}
`)
