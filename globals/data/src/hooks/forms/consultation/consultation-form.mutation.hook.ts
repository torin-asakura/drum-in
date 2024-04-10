import { useMutation }                from '@apollo/client'
import { CONSULTATION_FORM_MUTATION } from '../../../mutation'
import { FormID }                     from '../../../query.constants'

export const useConsultationFormMutation = () => {
  const [consultationFormMutation, { data }]  = useMutation(CONSULTATION_FORM_MUTATION);

  const submitConsultationForm = ({name, phone, telegram}) => {
    consultationFormMutation({
      variables: {
        formId: FormID.consultation.number,
        nameId: 12,
        phoneId: 13,
        telegramId: 14,
        nameValue:name,
        phoneValue:phone,
        telegramValue:telegram,
      },
    });
  };

  return { data, submitConsultationForm }

}
