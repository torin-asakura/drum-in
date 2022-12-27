import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'transparentBackground'
  | 'transparentBackgroundPurpleText'
  | 'darkToPurpleBackground'
  | 'purpleBackground'
  | 'whiteBackground'
  | 'transparentWhiteToPurpleBackground'
  | 'transparentWhiteToGrayBackground'
  | 'borderWhiteToWhiteBackground'

export type ButtonSize =
  | 'withoutPaddingMicroHeight'
  | 'mediumPaddingNormalHeight'
  | 'withoutPaddingBigHeight'
  | 'withoutPaddingMediumHeight'
  | 'mediumPaddingBigHeight'
  | 'middlingPaddingNormalHeight'
  | 'middlingPaddingMediumHeight'
  | 'littlePaddingMediumHeight'
  | 'littlePaddingSemiMediumHeight'
  | 'massivePaddingGiantHeight'
  | 'semiMediumPaddingHugeHeight'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  iconSvg?: object
  valueRadius?: string | object
  valueWidth?: string | object
  valueHeight?: string | object
  valueBackground?: string | object
  horizontalLocation?: 'left' | 'right'
}
