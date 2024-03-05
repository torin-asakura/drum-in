import { gql }         from '@apollo/client'
import { useMutation } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm($name: String!, $phone: String!, $telegram: String!) {
    submitForm(
      input: {
        formId: 2
        data: [{ id: 5, value: $name }, { id: 6, value: $phone }, { id: 7, value: $telegram }]
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
`

const useSubmitForm = () => {
  const [submitForm, { data, error }] = useMutation(SUBMIT_FORM)

  if (data) {
    return [submitForm, data.submitForm, error]
  }

  return [submitForm, {}, error]
}

export { useSubmitForm }
