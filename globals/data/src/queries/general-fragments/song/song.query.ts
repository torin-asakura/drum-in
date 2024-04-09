import { gql } from '../../../__generated__'

export const GET_SONG = gql(`
query Song ($id: ID!){
  generalFragment(id: $id) {
    audio {
      song {
        node {
          mediaItemUrl
        }
      }
    }
  }
}

`)
