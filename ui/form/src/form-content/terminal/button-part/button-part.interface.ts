import type { useIntl } from 'react-intl'

export interface ButtonPartProps {
  formatMessage: ReturnType<typeof useIntl>['formatMessage']
  privacyPolicy: boolean
  resultErrorMessage: string
  setResultErrorMessage: React.Dispatch<React.SetStateAction<string>>
  buttonProps: object
  textProps: object
  disabled: boolean
  type: string
}
