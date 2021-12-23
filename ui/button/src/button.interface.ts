import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'
import { LayoutProps }                    from 'styled-system'
import { SpaceProps }                     from 'styled-system'

type ButtonVariant = 'primary'
type ButtonSize = 'normal'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
  size?: ButtonSize
  variant?: ButtonVariant
}
