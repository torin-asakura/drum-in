import { gql } from '@apollo/client'

const GET_HERO = gql`
  query Hero {
    individualCourse(id: "cG9zdDoyMjgx") {
    }
  }
`

export { GET_HERO }
