import { gql } from '../../../__generated__'

export const GET_CONSULTATION = gql(`
query Consultation($id:ID!){
  generalFragment(id: $id) {
    consultation {
      cta {
        title
        button
        text {
          beforeAccent
          accent
          afterAccent
        }
      }
      modal {
        title
        subtitle
        textForCheckbox
      }
    }
  }
}
`)
