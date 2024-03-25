import { gql } from '../__generated__'

const GET_COURSE = gql(`
  query GetCourse($id: ID!) {
    course(id: $id) {
      title
    }
  }
`)

export { GET_COURSE }
