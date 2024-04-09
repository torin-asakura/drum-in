import { gql } from '../../../__generated__'

export const GET_STUDENTS = gql(`
query Students($id:ID!){
  generalFragment(id: $id) {
    students {
      title
      description
      list {
        title
        firstBadge
        secondBadge
      }
    }
  }
}
`)
