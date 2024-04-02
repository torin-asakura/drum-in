import { gql } from '../../../__generated__'

export const GET_PROCESS_EDUCATION = gql(`
query ProcessEducation($id: ID!){
  generalFragment(id:$id) {
        learningProcess {
          title
          content{
            title
            text
            picture {
              alt
              image {
                node {
                  sourceUrl
              }
            }
         }
      }
    }
  }
}
`)
