import { gql } from '@apollo/client'

const GET_CONTACT = gql`
  query Contact {
    contactPageItem(id: "cG9zdDo0MTk=") {
      title
      contacts {
        contacts {
          domainName
          href
          link
          title
        }
      }
    }
  }
`

export { GET_CONTACT }
