import { gql } from '../../__generated__'

export const GET_PROCESS_EDUCATION = gql(`
query ProcessEducation{
  generalFragments {
    nodes {
      commonFragments {
        fieldGroupName
      }
    }
  }
}
`)
