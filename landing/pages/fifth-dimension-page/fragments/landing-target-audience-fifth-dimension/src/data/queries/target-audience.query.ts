import { gql } from '@apollo/client'

const GET_TARGET_AUDIENCE = gql`
  query TargetAudience {
    courseFifthDimensionItem(id: "cG9zdDozODQ=") {
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
