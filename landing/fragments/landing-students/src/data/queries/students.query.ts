import { gql } from '@apollo/client'

const GET_STUDENTS = gql`
  query Students {
    mainPageItem(id: "cG9zdDoyMDU=") {
      title
      students {
        description
        cardsStudents {
          age
          description
          name
          specialization
          firstIcon {
            sourceUrl
          }
          secondIcon {
            sourceUrl
          }
        }
        descriptionModal
        titleModal
        listStudents {
          age
          name
          specialization
        }
      }
    }
  }
`

export { GET_STUDENTS }
