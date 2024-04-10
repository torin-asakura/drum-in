import { gql } from '../../../__generated__'

export const GET_CONSULTATION_FORM = gql(`
query ConsultationForm($id:ID!) {
  form(id: $id) {
    title
    formId
    addSubmit
    allowPublicLink
    classes {
      elementClass
      wrapperClass
    }
    clearComplete
    currency
    customMessages {
      changeDateErrorMsg
      changeEmailErrorMsg
      confirmFieldErrorMsg
      fieldNumberIncrementBy
      fieldNumberNumMaxError
      fieldNumberNumMinError
      fieldsMarkedRequired
      formErrorsCorrectErrors
      honeypotHoneypotError
      validateRequiredField
    }
    databaseId
    defaultLabelPos
    embedForm
    fields {
      nodes {
        updatedAt
        type
        required
        personallyIdentifiable
        parentId
        order
        labelPos
        label
        key
        id
        fieldLabel
        fieldKey
        fieldId
        databaseId
        createdAt
      }
    }
    formTitleHeadingLevel
    hideComplete
    id
    key
    limitSubmissionsSet {
      subLimitMsg
      subLimitNumber
    }
    loggedInSet {
      loggedIn
      notLoggedInMsg
    }
    publicLink
    seqNum
    showTitle
    uniqueFieldSet {
      uniqueField
      uniqueFieldError
    }
  }
}
`)
