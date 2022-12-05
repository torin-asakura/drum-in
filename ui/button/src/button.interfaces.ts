import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'transparentBackground'
  | 'transparentBackgroundPurpleText'
  | 'darkToPurpleBackground'
  | 'purpleBackground'

export type ButtonSize =
  | 'withoutPaddingMicroHeight'
  | 'mediumPaddingNormalHeight'
  | 'giantPaddingBigHeight'
  | 'hugePaddingMediumHeight'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  iconSvg?: object
  valueRadius?: object
  valueWidth?: object
  valueHeight?: object
  valueBackground?: object
  horizontalLocation?: string
}
