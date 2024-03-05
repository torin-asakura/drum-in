import { gql } from '@apollo/client'

const GET_SONG = gql`
  query Song {
    fragmentNewItem(id: "cG9zdDo0NzM=") {
      song {
        songUrl {
          mediaItemUrl
        }
      }
    }
  }
`

export { GET_SONG }
