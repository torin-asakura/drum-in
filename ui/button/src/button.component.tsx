import React                from 'react'
import styled               from '@emotion/styled'
import { FC }               from 'react'
import { layout }           from 'styled-system'
import { space }            from 'styled-system'

import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { appearanceStyles } from './button.styles'

export const ButtonElement = styled.button<any>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  layout,
  space
)

export const Button: FC = ({ ...props }) => <ButtonElement {...props} />
