import { gql } from '../../../__generated__'

export const GET_FAQ = gql(`
query Faq($id: ID!){
    generalFragment(id:$id ) {
      faq{
        content {
          answer
          question
      }
    }
  }
}
`)
