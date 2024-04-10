export type ConsultationFormDataProps = {
  __typename?: 'RootQuery'
  form?: {
    __typename?: 'Form'
    id: string
    title?: string | null
    formId?: number | null
    fields?: {
      __typename?: 'FormToFormFieldConnection'
      nodes: Array<{
        label?: string | null
        id?: string | null
        fieldId?: number | null
      }>
    } | null
  } | null
}
