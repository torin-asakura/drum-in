import { SubmitConsultationFormProps } from '@globals/data/src/hooks/forms/consultation/consultation-form.interfaces'

export interface ActionProps{
  fields:SubmitConsultationFormProps
  checkboxText?:string| null
  submitText?:string|null
}
