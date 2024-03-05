import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputSize = 'small' | 'normal'

export interface InputProps extends BaseInputProps {
  size?: InputSize
  errorText?: string
}
