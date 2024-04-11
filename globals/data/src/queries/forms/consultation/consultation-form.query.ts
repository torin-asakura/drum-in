import { gql } from '../../../__generated__'

export const GET_CONSULTATION_FORM = gql(`
query ConsultationForm($id:ID!) {
  form(id: $id) {
    id
    title
    formId
    fields {
      nodes {
        label
        id
        fieldId
      }
    }
  }
}
`)
