export type SubmitConsultationFormProps = {
  name: string
  phone: string
  telegram?: string
}

export type SubmitConsultationFormType = (fields: SubmitConsultationFormProps) => void
