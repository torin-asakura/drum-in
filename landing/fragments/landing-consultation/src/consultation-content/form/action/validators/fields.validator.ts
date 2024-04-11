import { SubmitConsultationFormProps } from '@globals/data'
import { nameValidator }               from '@shared/validators'
import { phoneValidator }              from '@shared/validators'

export const fieldsValidator = (fields: SubmitConsultationFormProps): boolean =>
  nameValidator(fields.name) && phoneValidator(fields.phone)
