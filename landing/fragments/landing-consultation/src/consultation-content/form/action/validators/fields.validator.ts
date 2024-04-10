import { SubmitConsultationFormProps } from '@globals/data/src/hooks/forms/consultation/consultation-form.interfaces'

export const fieldsValidator = (fields: SubmitConsultationFormProps): boolean =>
  !!fields.name && !!fields.phone && !!fields.telegram
