import { gql } from '../../../__generated__'

export const CONSULTATION_FORM_MUTATION = gql(`
mutation MyMutation (
  $formId:Int,
  $nameId:Int, $nameValue: String,
  $phoneId:Int, $phoneValue: String,
  $telegramId:Int, $telegramValue: String,
  ){
  submitForm(
  input: {
    formId: $formId, 
    data: [
      {id: $nameId, value: $nameValue}, 
      {id: $phoneId, value: $phoneValue}, 
      {id: $telegramId, value: $telegramValue}
    ] 
  }
  ) {
    errors {
      fieldId
      message
      slug
    }
    message
    success
  }
}
`)
