import { gql } from '@apollo/client'

const GET_TARGET_AUDIENCE = gql`
  query TargetAudience {
    courseSeventhHeavenItem(id: "cG9zdDozODk=") {
      title
      targetAudience {
        firstCharacteristic
        secondCharacteristic
        thirdCharacteristic
      }
    }
  }
`

export { GET_TARGET_AUDIENCE }
