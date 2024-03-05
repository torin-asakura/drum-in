import { gql } from '@apollo/client'

const GET_TARGET_AUDIENCE = gql`
  query TargetAudience {
    courseFeelingOfTimeItem(id: "cG9zdDozNjc=") {
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
