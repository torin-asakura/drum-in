import { useMutation }                from '@apollo/client'

import { CONSULTATION_FORM_MUTATION } from '../../../mutation'
import { FormID }                     from '../../../query.constants'
import { FieldID }                    from './consultation-form.constants'
import { SubmitConsultationFormType } from './consultation-form.interfaces'

export const useConsultationFormMutation = () => {
  const [consultationFormMutation, { data }] = useMutation(CONSULTATION_FORM_MUTATION)

  const submitConsultationForm: SubmitConsultationFormType = ({ name, phone, telegram }) => {
    consultationFormMutation({
      variables: {
        formId: FormID.consultation.number,
        nameId: FieldID.NAME,
        phoneId: FieldID.PHONE,
        telegramId: FieldID.TELEGRAM,
        nameValue: name,
        phoneValue: phone,
        telegramValue: telegram,
      },
    })
  }

  return { data, submitConsultationForm }
}
